import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF, Marker } from "@react-google-maps/api";
import s from "./Map.module.css"
import { Link, useLocation, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import MapCard from "./CardMap/CardMap"
import FiltersMap from "./FiltersMap/FiltersMap"
import { Campings } from "../../reducer/estados";
import { Campys } from "../../reducer/estados";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getFiltersCamping, popUpCard, setCardInfo, zoomOutMap } from "../../actions";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Badge, Typography } from "@mui/material";
import Loader from "../helpers/Loader";





export default function Mapa() {




  const dispatch: AppDispatch = useDispatch()
  const filtrosBook: any = useSelector((state: RootState) => state.filtrosBooking)

  var linkMap: { lat: number, lng: number, zoom: number } = useSelector((state: RootState) => state.linkMap)


  const center = useMemo(() => ({ lat: linkMap.lat, lng: linkMap.lng }), []);
  const zoomMap = linkMap.zoom



  useEffect(() => {
    dispatch(getFiltersCamping(filtrosBook))
  }, [dispatch, filtrosBook, linkMap]
  )






  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY as string
  });

  if (!isLoaded) return <Loader open={true}></Loader>;
  return <Map center={center} zoomMap={zoomMap} linkMap={linkMap} />
}

interface mapProps {
  center: { lat: number, lng: number },
  zoomMap: number,
  linkMap: { lat: number, lng: number, zoom: number }
}


function Map({ center, zoomMap, linkMap }: mapProps) {




  const location = useLocation();
  const dispatch: AppDispatch = useDispatch()

  const campingIdMap = location.state?.campingId;


  const { result }: { result: Campings[] } = useSelector((state: RootState) => state.campings)
  const filtrosBook: any = useSelector((state: RootState) => state.filtrosBooking)

  let num = 0

  if (filtrosBook.id_provincia > 0 || filtrosBook.id_localidad) num++
  if (filtrosBook.abierto_fecha_desde || filtrosBook.abierto_fecha_hasta) num++
  if (filtrosBook.precio.length > 0) num++
  if (filtrosBook.reviews.length > 0) num++
  if (filtrosBook.id_categoria.length > 0) num++
  if (filtrosBook.parcela_superficie.length > 0 && filtrosBook.parcela_superficie[1] < 510) num++
  if (filtrosBook.parcela_agua_en_parcela || filtrosBook.parcela_iluminacion_toma_corriente || filtrosBook.parcela_techada) num++
  if (filtrosBook.mascotas || filtrosBook.rodantes || filtrosBook.proveduria || filtrosBook.restaurant || filtrosBook.pileta || filtrosBook.vigilancia || filtrosBook.maquinas_gimnasia || filtrosBook.juegos_infantiles || filtrosBook.salon_sum || filtrosBook.wifi || filtrosBook.estacionamiento) num++






  const iconImage2 = "https://res.cloudinary.com/pfcampy/image/upload/v1671133089/campy/mapiconBlack_wmuuqv.png"
  const iconImage1 = "https://res.cloudinary.com/pfcampy/image/upload/v1671067970/campy/mapIcon_ej0msp.png"




  const [cardInfo, SetCardInfo] = useState<Campings>(Campys)
  const cardInfoo: { id: number, nombre_camping: string, imagenes: string, descripcion_camping: string } = useSelector((state: RootState) => state.cardInfoMap)
  const popUpBool: boolean = useSelector((state: RootState) => state.popUpCards)
  const [popUpFilters, SetPopUpFilters] = useState<boolean>(false);
  const [filtersArrow, SetFiltersArrow] = useState<boolean>(false);
  const [markers, setMarkers] = useState<any>({});

  function handleMarker(c: any) {

    c.id !== cardInfoo.id ?
      dispatch(popUpCard(true)) :
      popUpBool === false ? dispatch(popUpCard(true)) : dispatch(popUpCard(false))
    dispatch(setCardInfo(c.id, c.nombre_camping, c.imagenes, c.descripcion_camping));
  }



  const handleButton = () => {
    popUpFilters === false ? SetPopUpFilters(true) : SetPopUpFilters(false);
    filtersArrow === false ? SetFiltersArrow(true) : SetFiltersArrow(false);
  }

  /*   const handleZoomOut = () => {
      dispatch(zoomOutMap())
    }
   */



  const OPTIONS = {
    minZoom: 4,
    maxZoom: 18,
    mapTypeId: 'terrain',
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP,
    },

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
            filtersArrow === false ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
          }
        </Box>
        {
          num > 0 ? <Badge badgeContent={num} color="secondary" sx={{ ml: "1rem", mr: "0.5rem" }}> <Typography></Typography> </Badge> : <Box />
        }



      </button>


      {/*  <button className={s.buttonZoomOut} onClick={handleZoomOut}>ZoomOut</button> */}



      {

        result?.map((c: any, i: number) => {

          return (
            <MarkerF
              onLoad={(markerInstance: google.maps.Marker) =>
                setMarkers((prevMarkers: any) => ({ ...prevMarkers, [i]: markerInstance }))
              }
              onClick={() => {
                for (let key in markers) if (i !== +key) markers[key].setIcon(iconImage1);

                markers[i].setIcon(markers[i]?.getIcon() === iconImage1 ? iconImage2 : iconImage1)
                handleMarker(c);
              }}
              key={c.id}
              position={{ lat: +c.latitud, lng: +c.longitud }}
              icon={c.id === +campingIdMap ? iconImage2 : iconImage1} />
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














