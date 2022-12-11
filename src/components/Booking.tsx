import React from "react";
import Footer from "./Footer";
import Paginado from "./Paginado";
import FiltrosLaterales from "./FiltrosLaterales";
import FiltrosPrincipales from "./FiltrosPrincipales";
import CardCamping from "./CardCamping";
import { Box, Grid } from '@mui/material'
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import * as actions from "../actions";
import { AppDispatch, RootState } from '../store/index';
import {Campings} from '../reducer/estados';


export default function Booking() {

    const dispatch: AppDispatch = useDispatch()
    const allCampings:Campings[] = useSelector((state: RootState) => state.allCampings)
    

    useEffect(()=>{
        dispatch(actions.getAllCampings())
      },[dispatch]
      )

    return (
        
        <Box>

            <FiltrosPrincipales></FiltrosPrincipales>
            <Grid container direction="row">
                <Grid item justifyContent="left" xs={0} sm={4} md={2}>

                    <FiltrosLaterales></FiltrosLaterales>
                </Grid>
                <Grid item justifyContent="right" xs={12} sm={8} md={10}>
                    {allCampings?.map((c: Campings)=>(
                       <CardCamping key={c.id} id={c.id} nombre={c.nombre_camping} descripcion={c.descripcion_camping}
                       localidad={c.localidad} provincia={c.provincia}
                       categoria={c.categoria} imagenes={c.imagenes}></CardCamping> 
                    ))}  
                </Grid>
            </Grid>
            <Paginado></Paginado>
            <Footer />
        </Box>

    )
}



  


    



