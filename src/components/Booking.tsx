import React from "react";
import Footer from "./Footer";
import Paginado from "./Paginado";
import FiltrosLaterales from "./FiltrosLaterales";
import FiltrosPrincipales from "./FiltrosPrincipales";
import CardCamping from "./CardCamping";
import { Box, Grid } from '@mui/material'


export default function Booking() {

    let campings: Array<number> = [1, 2, 3, 4, 5, 6]

    return (
        
        <Box>

            <FiltrosPrincipales></FiltrosPrincipales>
            <Grid container direction="row">
                <Grid item justifyContent="left" xs={0} sm={4} md={2}>

                    <FiltrosLaterales></FiltrosLaterales>
                </Grid>
                <Grid item justifyContent="right" xs={12} sm={8} md={10}>
                    {campings.map(c => (
                        <CardCamping key={c}></CardCamping>
                    ))}
                </Grid>
            </Grid>
            <Paginado></Paginado>
            <Footer />
        </Box>

    )
}

