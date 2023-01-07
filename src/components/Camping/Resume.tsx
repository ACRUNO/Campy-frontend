import * as React from 'react';
import { Box } from '@mui/material';
import Style from "./Camping.module.css"
import { Typography, TextField } from '@mui/material';
import { useSelector } from 'react-redux';


export default function Resume() {

    let camp = useSelector((state: any) => state.detailCamping)

    let lugar = {
        localidad: "Villa Patito",
        provincia: "Mendoza"
    }
    let info = {
        localidad: camp?.descripcion_camping,
        provincia: camp?.descrip_historia,
    }
    return (
        <Box sx={{ maxWidth: 750 }} >
            <Typography variant="h3" > Queres conocer mas de {camp?.nombre_camping}  y {camp?.provincia} ? </Typography>
            <Box sx={{ maxWidth: 600 }}>
                <Typography sx={{ marginTop: 1 }} variant="body1">  {camp?.nombre_camping} {info.localidad} </Typography>
                <Typography sx={{ marginTop: 1 }} variant="body1"> {info.provincia} </Typography>
            </Box>
        </Box >
    )
}