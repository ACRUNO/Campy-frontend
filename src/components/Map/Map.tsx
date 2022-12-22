import {useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import s from "./Map.module.css"
import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function Mapa() {




  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyChcClmha8e-qVgQpXurFMDX0X57--Nqh8",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map/>
}

const center = {lat: -38.40725346022871, lng: -63.617129400239264}


function Map() {

"https://res.cloudinary.com/pfcampy/image/upload/v1671067970/campy/mapIcon_ej0msp.png"


"https://res.cloudinary.com/pfcampy/image/upload/v1671132554/campy/mapIconLarge_lnxtpp.png"


"https://res.cloudinary.com/pfcampy/image/upload/v1671133089/campy/mapiconBlack_wmuuqv.png"


const [icon,SetIcon] = useState<string>("https://res.cloudinary.com/pfcampy/image/upload/v1671067970/campy/mapIcon_ej0msp.png")

const navigate = useNavigate()

function handleMarker1(){
    navigate("/booking/camping/1")
   
}

function handleMarker2(){
    navigate("/booking/camping/6")
   
}

function handleMarker3(){
    navigate("/booking/camping/18")
   
}




  return (
   
    <GoogleMap 
    zoom={5} 
    center={center} 
    mapContainerClassName="map-container"
    >
        <MarkerF onClick={handleMarker1} position={center} icon={icon} />
        <MarkerF onClick={handleMarker2} position={{lat: -31.532271330349058, lng: -64.2362134738245}} icon={icon}/>
        <MarkerF onClick={handleMarker3} position={{lat: -41.17195054526889, lng: -71.29609791237797}} icon={icon}/>
        
        <Box sx={{position:"absolute", zIndex:"100"}}>
        <Typography variant="h6" >CARTA</Typography>
        </Box>

    </GoogleMap>

  );
}














