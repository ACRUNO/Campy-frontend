import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import s from "./Map.module.css"
import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import MapCard from "./CardMap/CardMap"
import FiltersMap from "./FiltersMap/FiltersMap"
import { Campings } from "../../reducer/estados";
import { Campys } from "../../reducer/estados";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getFiltersCamping, popUpCard, setCardInfo } from "../../actions";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';





export default function Mapa() {




  const dispatch: AppDispatch = useDispatch()
  const filtrosBook: any = useSelector((state: RootState) => state.filtrosBooking)



  useEffect(() => {
    dispatch(getFiltersCamping(filtrosBook))
  }, [dispatch, filtrosBook]
  )





  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyChcClmha8e-qVgQpXurFMDX0X57--Nqh8"
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />
}




function Map() {


  const params = useParams()
  const dispatch: AppDispatch = useDispatch()


  const campings: Campings[] = useSelector((state: RootState) => state.campings)
  var linkMap: { lat: number, lng: number, zoom: number } = useSelector((state: RootState) => state.linkMap)


  const center = useMemo(() => ({ lat: linkMap.lat, lng: linkMap.lng }),[]);
  const zoomMap = linkMap.zoom


  const iconImage2 = "https://res.cloudinary.com/pfcampy/image/upload/v1671133089/campy/mapiconBlack_wmuuqv.png"
  const iconImage1 = "https://res.cloudinary.com/pfcampy/image/upload/v1671067970/campy/mapIcon_ej0msp.png"



  const [cardInfo, SetCardInfo] = useState<Campings>(Campys)
  const cardInfoo: {id: number, nombre_camping: string, imagenes: string, descripcion_camping: string} = useSelector((state: RootState) => state.cardInfoMap)
  //const [popUpBoolean, SetpopUpBoolean] = useState<boolean>(false)
  const popUpBool: boolean = useSelector((state: RootState) => state.popUpCards)
  const [popUpFilters, SetPopUpFilters] = useState<boolean>(false)
  const [filtersArrow, SetFiltersArrow] = useState<boolean>(false)
  const [icon, SetIcon] = useState<string>(iconImage1)

  function handleMarker(c: any) {
    c.id !== cardInfoo.id ? 
    //SetpopUpBoolean(true) :
    dispatch(popUpCard(true)) :
    //popUpBoolean === false ? SetpopUpBoolean(true) : SetpopUpBoolean(false)
    popUpBool === false ? dispatch(popUpCard(true)) : dispatch(popUpCard(false))
    //SetCardInfo(c)
    dispatch(setCardInfo(c.id, c.nombre_camping, c.imagenes, c.descripcion_camping))
    SetIcon(iconImage2)
  }



  const handleButton = () => {
    popUpFilters === false ? SetPopUpFilters(true) : SetPopUpFilters(false);
    filtersArrow === false ? SetFiltersArrow(true) : SetFiltersArrow(false)
  }


  const OPTIONS = {
    minZoom: 4,
    maxZoom: 18,
    mapTypeId: 'terrain',
  }


  return (
      <GoogleMap
        zoom={zoomMap}
        center={center}
        mapContainerClassName="map-container"
        options={OPTIONS}
      >

        <button className={s.buttonFilters} onClick={handleButton}>
          Filtros

          <Box className={s.filtersArrow} >
            {
              filtersArrow === false ? <ArrowDropUpIcon sx={{}} /> : <ArrowDropDownIcon />
            }
          </Box>


        </button>



        {

          campings?.map((c: any) => {
            return (
              <MarkerF onClick={() => handleMarker(c)} key={c.id} position={{ lat: +c.latitud, lng: +c.longitud }} icon={icon} />
            )
          })
        }


        <Box className={s.filters}>
          {
            popUpFilters === true ? <FiltersMap /> : <Box />
          }
        </Box>

        <Box className={s.MapCard}>
          {
            // popUpBoolean === true ?
            popUpBool === true ?
              <Link className={s.link} to={`/booking/camping/${cardInfoo.id}`}>
                <MapCard nombre={cardInfoo.nombre_camping} imagen={cardInfoo.imagenes} descripcion={cardInfoo.descripcion_camping} />
              </Link> :
              <Box />
          }
        </Box>

      </GoogleMap>
  );
}














