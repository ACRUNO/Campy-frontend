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


export default function Booking() {

    const dispatch: AppDispatch = useDispatch()
    const allCampings:{id: number,
        nombre_camping: string,
        descripcion_camping: string,
        direccion: string,
        telefono: string,
        longitud: string,
        latitud: string,
        prop_camping_Id: number,
        cerrado_fecha_desde: string, // chequear este dato"2022-12-09T23:52:13.000Z",
        cerrado_fecha_hasta: string, // chequear "2022-12-09T23:52:13.000Z",
        localidad: string,
        provincia: string,
        categoria: string,
        cantidad_estrellas: number,
        duchas: number,
        baños: number,
        mascotas: number,
        rodantes: number,
        proveduria: number,
        salon_sum: number,
        restaurant: number,
        vigilancia: number,
        pileta: number,
        estacionamiento: 1,
        juegos_infantiles: number,
        maquinas_gimnasia: number,
        wifi: number,
        parcela_techada: number,
        parcela_agua_en_parcela: number,
        parcela_iluminacion_toma_corriente: number,
        parcela_superficie: number,
        descripcion_periodo: string,
        descripcion_periodo_agua: string}[] = useSelector((state: RootState) => state.allCampings)
    console.log(allCampings)

    useEffect(()=>{
        dispatch(actions.getAllCampings())
      },[dispatch]
      )




    let campings: Array<number> = [1, 2, 3, 4, 5, 6]

    return (
        
        <Box>

            <FiltrosPrincipales></FiltrosPrincipales>
            <Grid container direction="row">
                <Grid item justifyContent="left" xs={0} sm={4} md={2}>

                    <FiltrosLaterales></FiltrosLaterales>
                </Grid>
                <Grid item justifyContent="right" xs={12} sm={8} md={10}>
                 {/* { DESCOMENTAR CUANDO ESTEN LAS RUTAS DEL BACK 
                    {allCampings?.map((c: )=>(
                       <CardCamping key={c.id} id={c.id} nombre={c.nombre_camping} descripcion={c.descripcion_camping}
                       localidad={localidad} provincia={provincia}
                       categoria={categoria} imagen={c.imagen}></CardCamping> 
                    ))}  }

                    { {campings.map(c => (
                        <CardCamping key={c}></CardCamping>
                    ))} } */}
                </Grid>
            </Grid>
            <Paginado></Paginado>
            <Footer />
        </Box>

    )
}



  


    



