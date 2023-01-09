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
            <Typography className={Style.tituloResume} sx={{ paddingRight: "4rem", paddingLeft: "4rem" }} variant="h4" component="h4"> Querés conocer más de {camp?.nombre_camping} y la prov. de {camp?.provincia} ? </Typography>
            <Box className={Style.contResumenDecripHistoria}>
                <Typography sx={{ textAlign: "justify", marginTop: 1, paddingRight: "4rem", paddingLeft: "2rem" }} variant="body1">  {camp?.nombre_camping} {info.localidad} </Typography>
                <Typography sx={{ textAlign: "justify", marginTop: 1, paddingRight: "4rem", paddingLeft: "2rem" }} variant="body1"> {info.provincia} </Typography>
            </Box>
        </Box >
    )
}