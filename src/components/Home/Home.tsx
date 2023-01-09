import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import SkeletonCard from "../Cards/SkeletonCard"
import Banner from "../Banner/Banner"
import { Grid, Box, Collapse, Button, Typography, Card, CardActionArea } from '@mui/material';
import s from './Home.module.css'
import Filters from "../Filters/Filters";
import { AppDispatch, RootState } from '../../store/index';
import Footer from "../Footer/Footer";
import { getProvincias, filterProvincia, filtrosPrincipales, getLocalidades } from "../../actions";
import * as actions from "../../actions/Dash.admin.action"
import { MouseEvent } from 'react';
import { useNavigate } from "react-router-dom";
import Carrousel from "./Carrousel";


export default function Home() {


    const dispatch: AppDispatch = useDispatch()
    const allProvincias: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allProvincias)
    const datos_graftop: { nombre_camping: string, cant_reservas: number }[] = useSelector((state: RootState) => state.datos_graftop)?.slice(0, 5);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProvincias())
        dispatch(actions.getMasreservados())
    }, [dispatch]);



    function handleClick(id: number) {
        dispatch(filterProvincia(id))
        dispatch(getLocalidades(id))
        dispatch(filtrosPrincipales(id, 0, undefined, undefined))
        setTimeout(() => {
            navigate('/booking')
            document.documentElement.scrollTop = 0
        }, 100);
    }


    return (
        <>
            <Banner />
            <Filters />
            <Box>
                <Carrousel />
            </Box>
            <Box sx={{ p: '80px 0 150px', bgcolor: 'rgb(245, 245, 245)' }} >
                <Box className={s.grid} >
                    {
                        !allProvincias.length ?
                            new Array(23).fill(1).map((p, i) =>
                                <SkeletonCard key={i}></SkeletonCard>
                            )
                            :
                            allProvincias?.map((e: { id: number, nombre: string, imagen: string }) => {
                                return (
                                    <Grid item className={s.item} sm={12} md={6} lg={4} xl={3} key={e.id}>

                                        <Box onClick={(event: MouseEvent<HTMLElement>) => handleClick(e.id)} sx={{ cursor: "pointer" }}>

                                            <Cards id={e.id} name={e.nombre} img={e.imagen} />
                                        </Box>
                                    </Grid>
                                )
                            })
                    }
                </Box>
            </Box>
            <Footer />
        </>
    )
}







