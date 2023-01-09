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


export default function Home() {

    const [collapse, setCollapse] = useState(false);
    const [collapse2, setCollapse2] = useState(false);


    const dispatch: AppDispatch = useDispatch()
    const allProvincias: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allProvincias)
    const datos_graftop: { nombre_camping: string, cant_reservas: number }[] = useSelector((state: RootState) => state.datos_graftop).slice(0, 5);

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

    // const handleCollapse = () => {
    //     if (collapse) { setCollapse(false) }
    //     else { setCollapse(true) }
    // }

    // const handleCollapse2 = () => {
    //     if (collapse2) { setCollapse2(false) }
    //     else { setCollapse2(true) }
    // }

    return (
        <>
            <Banner />
            <Filters />
            <Box>
                {/* <Grid >
                    <Grid display="flex" flexDirection="row" justifyContent="space-around">
                        <Button variant="outlined" color="secondary" onClick={handleCollapse}>Campings más reservados</Button>
                        <Button variant="outlined" color="secondary" onClick={handleCollapse2}>Campings mejor puntuados</Button>
                    </Grid>
                    <Grid container display="flex" justifyContent="center">
                        <Collapse in={collapse}>
                            <Grid item display="flex" >
                                {datos_graftop.map(c =>
                                    <CardActionArea component="a" href="#" sx={{ "&:hover": { boxShadow: "0px 4px 8px rgba(50, 50, 50, 1)" } }}>
                                        <Card sx={{ display: "flex", height: "10rem" }}>
                                            <Typography>{c.nombre_camping}</Typography>
                                        </Card>
                                    </CardActionArea>)}
                            </Grid>
                        </Collapse>
                        <Collapse in={collapse2}>
                            <Grid item display="flex" >
                                {datos_graftop.map(c =>
                                    <CardActionArea component="a" href="#" sx={{ "&:hover": { boxShadow: "0px 4px 8px rgba(50, 50, 50, 1)" } }}>
                                        <Card sx={{ display: "flex", height: "10rem" }}>
                                            <Typography>{c.nombre_camping}</Typography>
                                        </Card>
                                    </CardActionArea>)}
                            </Grid>
                        </Collapse>
                    </Grid>
                </Grid> */}
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







