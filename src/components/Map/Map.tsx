import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import s from "./Map.module.css"
import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import { Box } from "@mui/system";

export default function Mapa() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyChcClmha8e-qVgQpXurFMDX0X57--Nqh8",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map/>
}

const center = {lat: -38.40725346022871, lng: -63.617129400239264}

function Map() {

function handleMarker(){
    
   
}

  return (
   
    <GoogleMap 
    zoom={5} 
    center={center} 
    mapContainerClassName="map-container"
    >
        <MarkerF onClick={handleMarker} position={center} icon={"https://res.cloudinary.com/pfcampy/image/upload/v1671067970/campy/mapIcon_ej0msp.png"}/>
        <MarkerF onClick={handleMarker} position={{lat: -31.532271330349058, lng: -64.2362134738245}} icon={"https://res.cloudinary.com/pfcampy/image/upload/v1671067970/campy/mapIcon_ej0msp.png"} />
        <MarkerF onClick={handleMarker} position={{lat: -41.17195054526889, lng: -71.29609791237797}} icon={"https://res.cloudinary.com/pfcampy/image/upload/v1671067970/campy/mapIcon_ej0msp.png"}/>
        
        <Box sx={{position:"absolute", zIndex:"100"}}>
        <Typography variant="h6" >CARTA</Typography>
        </Box>

    </GoogleMap>

  );
}














