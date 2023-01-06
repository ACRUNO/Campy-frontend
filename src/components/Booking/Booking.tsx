import React from "react";
import Footer from "../Footer/Footer";
import Paginado from "../Paginado/Paginado";
import FiltrosLaterales from "../FiltrosBooking/FiltrosLaterales";
import FiltrosPrincipales from "../FiltrosBooking/FiltrosPrincipales";
import Alert_busqueda from "../AlertBusqueda/Alert_busqueda";
import CardCamping from "../CardCamping/CardCamping";
import SkeletonCardCamping from '../CardCamping/SkeletonCardCamping'
import { Box, Grid } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { getAllCampings, filterProvincia, getCampingsProvincias, getCampingsLocalidades } from "../../actions/index"
import { useEffect, useState } from "react";
import * as actions from "../../actions";
import { AppDispatch, RootState } from '../../store/index';
import { Campings, filterCamps } from '../../reducer/estados';
import s from './Booking.module.css';




export default function Booking() {




    const dispatch: AppDispatch = useDispatch()
    const { result, done } = useSelector((state: RootState) => state.campings)
    const [open, setOpen] = React.useState(false);
    const filtrosBook: filterCamps = useSelector((state: RootState) => state.filtrosBooking)










    useEffect(() => {
        if (done && !result.length) setOpen(true)
    }, [done])

    useEffect(() => {
        dispatch(actions.resetFilterCamping());
        dispatch(actions.getFiltersCamping(filtrosBook));
    }, [dispatch, filtrosBook]
    )


    const [currentPage, setCurrentPage] = useState(1);
    const [campingsxPage, setCampingsxPage] = useState(6);
    const indexLastCamping: number = currentPage * campingsxPage;
    const indexFirstCamping: number = indexLastCamping - campingsxPage;

    const currentCampings: Campings[] = result.slice(indexFirstCamping, indexLastCamping)




    return (
 
        <Box className={s.contenedor_gral} >

            <Box className={s.filtrosJuntos}>
                <h1>Boton para Filtros Juntos</h1>
            </Box>

            <Box className={s.FiltrosPrinc}>
                <FiltrosPrincipales 
                    setCurrentPage={setCurrentPage}
                />
            </Box>

            {/* GRID CONTIENE FILROS LATERALES + CARD */}
            <Grid className={s.ContenedorFilCards} container>
                {/* MUESTRA FILTROS LATERALES */}
                <Grid className={s.FiltrosLaterales} item >

                    <FiltrosLaterales
                        setCurrentPage={setCurrentPage}
                    />

                </Grid>
                {/* MUESTRA CARDS */}
                <Grid className={s.Cards} item >
                    {
                        currentCampings.length > 0 ? currentCampings.map((c: Campings) => (


                            <CardCamping key={c.id + 1} id={c.id} nombre={c.nombre_camping} descripcion={c.descripcion_camping}
                                localidad={c.localidad} provincia={c.provincia}
                                categoria={c.categoria} imagenes={c.imagenes} reviews={c.puntuacion_promedio} precio={c.precio}></CardCamping>

                        )) :
                            result.length === 0 && !done ?
                                new Array(5).fill(1).map((p, i) =>
                                    <SkeletonCardCamping key={i} />
                                )
                                :
                                <Alert_busqueda estadoopen={open} setestadoopen={setOpen} />
                    }

                </Grid>
            </Grid>

            <Paginado
                campingsxPage={campingsxPage}
                allCampings={result.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Footer />
        </Box >

    )
}


















