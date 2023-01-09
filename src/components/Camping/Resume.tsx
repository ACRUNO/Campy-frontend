import * as React from 'react';
import { Box } from '@mui/material';
import Style from "./Camping.module.css"
import { Typography, TextField } from '@mui/material';
import { useSelector } from 'react-redux';


export default function Resume() {

    let camp = useSelector((state: any) => state.detailCamping)

 /*    let lugar = {
        localidad: "Villa Patito",
        provincia: "Mendoza"
    } */
    let info = {
        localidad: camp?.descripcion_camping,
        provincia: camp?.descrip_historia,
    }
    return (
        <Box className={Style.contResumen} >
            <Typography variant="h4" > Querés conocer más de {camp?.nombre_camping} y la prov. de {camp?.provincia} ? </Typography>
            <Box className={Style.contResumenDecripHistoria}>
                <Typography sx={{ marginTop: 1 }} variant="body1">  {camp?.nombre_camping} {info.localidad} </Typography>
                <Typography sx={{ marginTop: 1 }} variant="body1"> {info.provincia} </Typography>
            </Box>
        </Box >
    )
}