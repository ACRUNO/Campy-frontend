import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";
import { Box } from "@mui/material";
import "./CreateMap.css"
import { Inputs } from "./CreateCamping";


const containerStyle = {
    height: "19rem",
    width: "31.25rem"
}

interface InputProps {
    setInput: React.Dispatch<React.SetStateAction<Inputs>>,
    input: Inputs,
}


export default function MapCreate({ setInput, input }: InputProps) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyChcClmha8e-qVgQpXurFMDX0X57--Nqh8",
        libraries: ["places"]
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map setInput={setInput}
        input={input} />
}


interface LtnLng {
    lat: number;
    lng: number;
}

function Map({ setInput, input }: InputProps) {

    const [selected, setSelected] = useState<LtnLng | null>(null)

    const center = selected ? selected : { lat: -38.40725346022871, lng: -63.617129400239264 };
    const zoom = selected ? 15 : 5;

    console.log(selected);

    return (
        <>
            <Box>
                <PlacesAutocomplete setInput={setInput}
                    input={input}
                    setSelected={setSelected} />
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

interface InputPropsPlace {
    setInput: React.Dispatch<React.SetStateAction<Inputs>>,
    input: Inputs,
    setSelected: React.Dispatch<React.SetStateAction<LtnLng | null>>
}

const PlacesAutocomplete = ({ setInput, input, setSelected }: InputPropsPlace) => {

    const {
        ready,
        value= input.direccion,
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
        setInput((inputs: Inputs) => {
            return {
                ...inputs,
                latitud: String(lat),
                longitud: String(lng),
                direccion: address
            }
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value)
        setInput((inputs: Inputs) => {
            return {
                ...inputs,
                direccion: e.target.value
            }
        })
    }

    console.log(input);


    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput value={input.direccion} onChange={(e) => handleChange(e)} disabled={!ready} className="combobox-input" placeholder="Buscar Direccion..." />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map(({ place_id, description }) => <ComboboxOption key={place_id} value={description} />)}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
}