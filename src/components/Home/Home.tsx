import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import SkeletonCard from "../Cards/SkeletonCard"
import Banner from "../Banner/Banner"
import { Grid, Box } from '@mui/material';
import s from './Home.module.css'
import Filters from "../Filters/Filters";
import { AppDispatch, RootState } from '../../store/index';
import Footer from "../Footer/Footer";
import { getProvincias, filterProvincia, filtrosPrincipales } from "../../actions";
import { MouseEvent } from 'react';
import { useNavigate } from "react-router-dom";


export default function Home() {




    const dispatch: AppDispatch = useDispatch()
    const allProvincias: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allProvincias)


    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProvincias())
    }, [dispatch]);



    function handleClick(id: number) {
        dispatch(filterProvincia(id))
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
            <Box sx={{ p: '80px 0 150px', bgcolor: 'rgb(245, 245, 245)' }} >
                <Box className={s.grid} >

                    {
                        !allProvincias.length ?
                            new Array(23).fill(1).map(p =>
                                <SkeletonCard></SkeletonCard>
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
                    {/* <Loader open={allProvincias.length === 0} /> */}
                </Box>
            </Box>
            <Footer />
        </>
    )
}







