import React from "react";
import Footer from "./Footer";
import Paginado from "./Paginado";
import FiltrosLaterales from "./FiltrosLaterales";
import FiltrosPrincipales from "./FiltrosPrincipales";
import CardCamping from "./CardCamping";
import { Box, Grid } from '@mui/material'
import { useDispatch, useSelector} from "react-redux";
import {getAllCampings} from "../actions/index"
import { useEffect, useState } from "react";
import * as actions from "../actions";
import { AppDispatch, RootState } from '../store/index';
import {Campings} from '../reducer/estados';


export default function Booking() {

    const dispatch: AppDispatch = useDispatch()
    const allCampings:Campings[] = useSelector((state: RootState) => state.allCampings)

    const [currentPage,setCurrentPage]=useState(1);
    const [campingsxPage,setCampingsxPage]=useState(5);
    const indexLastCamping : number = currentPage * campingsxPage;
    const indexFirstCamping : number = indexLastCamping - campingsxPage;
    const currentCampings:Campings[]= allCampings.slice(indexFirstCamping,indexLastCamping)
    

    useEffect(()=>{
        dispatch(getAllCampings())
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
                    {currentCampings?.map((c: Campings)=>(
                       <CardCamping key={c.id} id={c.id} nombre={c.nombre_camping} descripcion={c.descripcion_camping}
                       localidad={c.localidad} provincia={c.provincia}
                       categoria={c.categoria} imagenes={c.imagenes}></CardCamping> 
                    ))}  
                </Grid>
            </Grid>
                <Paginado campingsxPage={campingsxPage} 
                allCampings={allCampings.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                />
            <Footer />
        </Box>

    )
}



  


    





  


    



