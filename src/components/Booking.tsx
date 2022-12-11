import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import Footer from "./Footer";
import Paginado from "./Paginado";
import FiltrosLaterales from "./FiltrosLaterales";
import FiltrosPrincipales from "./FiltrosPrincipales";
import CardCamping from "./CardCamping";
import { Box, Grid } from '@mui/material'
import { AppDispatch, RootState } from "../store";
import { Campings } from "../reducer/estados";



export default function Booking() {

    const dispatch: AppDispatch = useDispatch()
    const allCampings:Campings[] = useSelector((state: RootState) => state.allCampings)
    console.log(allCampings)

    useEffect(()=>{
        dispatch(actions.getAllCampings())
      },[dispatch]
      )

    // let campings: Array<number> = [1, 2, 3, 4, 5, 6]

    return (
        
        <Box>

            <FiltrosPrincipales></FiltrosPrincipales>
            <Grid container direction="row">
                <Grid item justifyContent="left" xs={0} sm={4} md={2}>

                    <FiltrosLaterales></FiltrosLaterales>
                </Grid>
                <Grid item justifyContent="right" xs={12} sm={8} md={10}>
                    {/* {allCampings?.map((c: Campings)=>(
                       <CardCamping key={c.id} id={c.id} nombre={c.nombre_camping} descripcion={c.descripcion_camping}
                       localidad={c.localidad} provincia={c.provincia}
                       categoria={c.categoria} imagen={c.imagenes}></CardCamping> 
                    ))}   */}

                    {/* { {campings.map(c => (
                        <CardCamping key={c}></CardCamping>
                    ))} } */}
                </Grid>
            </Grid>
            <Paginado></Paginado>
            <Footer />
        </Box>

    )
}



  


    



