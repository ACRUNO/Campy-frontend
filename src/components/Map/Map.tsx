import { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF, MarkerProps } from "@react-google-maps/api";
import s from "./Map.module.css"
import { Typography} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import MapCard from "./CardMap/CardMap"
import { getByLabelText } from "@testing-library/react";
import FiltersMap from "./FiltersMap/FiltersMap"
import { Campings } from "../../reducer/estados";
import { Campys } from "../../reducer/estados";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getFiltersCamping } from "../../actions";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Terrain } from "@mui/icons-material";





export default function Mapa() {




  const dispatch: AppDispatch = useDispatch()
  const filtrosBook: any = useSelector((state: RootState) => state.filtrosBooking)



  useEffect(() => {
    dispatch(getFiltersCamping(filtrosBook))
  }, [dispatch, filtrosBook]
  )





  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyChcClmha8e-qVgQpXurFMDX0X57--Nqh8",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />
}

const center = { lat: -38.40725346022871, lng: -63.617129400239264 }


function Map() {


  const campings: Campings[] = useSelector((state: RootState) => state.campings)

  const iconImage2 = "https://res.cloudinary.com/pfcampy/image/upload/v1671133089/campy/mapiconBlack_wmuuqv.png" 
  const iconImage1 = "https://res.cloudinary.com/pfcampy/image/upload/v1671067970/campy/mapIcon_ej0msp.png"
  


  const [cardInfo, SetCardInfo] = useState<Campings>(Campys)
  const [popUpBoolean, SetpopUpBoolean] = useState<boolean>(false)
  const [popUpFilters, SetPopUpFilters] = useState<boolean>(false)
  const[filtersArrow,SetFiltersArrow] = useState<boolean>(false)
  const [icon, SetIcon] = useState<string>(iconImage1)

  const navigate = useNavigate()

  function handleMarker(c: any) {
    c.id !== cardInfo.id ? SetpopUpBoolean(true) :
      popUpBoolean === false ? SetpopUpBoolean(true) : SetpopUpBoolean(false)
    SetCardInfo(c)
    SetIcon(iconImage2)
  }



  const handleButton = () => {
    popUpFilters === false ? SetPopUpFilters(true) : SetPopUpFilters(false);
    filtersArrow === false ? SetFiltersArrow(true) :SetFiltersArrow(false)
  }


  const OPTIONS = {
    minZoom: 4,
    maxZoom: 18,
    mapTypeId:'terrain',
  }


  return (
      <GoogleMap
        zoom={5}
        center={center}
        mapContainerClassName="map-container"
        options={OPTIONS}
      >
        
        <button className={s.buttonFilters} onClick={handleButton}>
          Filtros
          
            <Box className={s.filtersArrow} >
              {
            filtersArrow === false?<ArrowDropUpIcon sx={{}}/>:<ArrowDropDownIcon/>
              }
            </Box>
         
          
          </button>
      
        

        {

          campings?.map((c: any) => {
            return (
                <MarkerF onClick={() => handleMarker(c)} key={c.id}position={{ lat: +c.latitud, lng: +c.longitud }} icon={icon} />
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
            popUpBoolean === true ?
              <Link className={s.link} to={`/booking/camping/${cardInfo.id}`}>
                  <MapCard nombre={cardInfo.nombre_camping} imagen={cardInfo.imagenes[0]} descripcion={cardInfo.descripcion_camping} />
              </Link> : 
              <Box />
          }
        </Box>

      </GoogleMap>
  );
}














