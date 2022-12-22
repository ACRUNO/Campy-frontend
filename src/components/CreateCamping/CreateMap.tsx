import React from "react";
import { GoogleMap } from "@react-google-maps/api";

const containerStyle = {
    height: "19rem",
    width: "31.25rem"
}

const center = { lat: -38.40725346022871, lng: -63.617129400239264 }

export default function MapCreate() {

    return (
        <GoogleMap
            zoom={5}
            center={center}
            // mapContainerClassName="map-container"
            mapContainerStyle={containerStyle}>

        </GoogleMap>
    )

};