import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";
import { Box } from "@mui/material";
import "./CreateMap.css"


const containerStyle = {
    height: "19rem",
    width: "31.25rem"
}



export default function MapCreate() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyChcClmha8e-qVgQpXurFMDX0X57--Nqh8",
        libraries: ["places"]
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />
}

function Map() {

    const [selected, setSelected] = useState(null)

    const center = selected ? selected : { lat: -38.40725346022871, lng: -63.617129400239264 };
    const zoom = selected ? 15 : 5;

    console.log(selected);

    return (
        <>
            <Box>
                <PlacesAutocomplete setSelected={setSelected} />
            </Box>

            <GoogleMap
                zoom={zoom}
                center={center}
                // mapContainerClassName="map-container"
                mapContainerStyle={containerStyle}>
                {selected && <Marker position={selected} />}
            </GoogleMap>
        </>
    )

};

const PlacesAutocomplete = ({ setSelected }: any) => {

    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address: string) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = getLatLng(results[0]);
        setSelected({ lat, lng })
    }

    console.log(value);


    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready} className="combobox-input" placeholder="Buscar Direccion..." />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map(({ place_id, description }) => <ComboboxOption key={place_id} value={description} />)}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
}