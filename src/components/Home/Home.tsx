import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import Banner from "../Banner/Banner"
import { Grid, Box, Link, Container } from '@mui/material';
import s from './Home.module.css'
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";
import { AppDispatch, RootState } from '../../store/index';
import Footer from "../Footer";
import {getProvincias}from "../../actions";






export default function Home() {

    const dispatch: AppDispatch = useDispatch()


    const allProvincias:{id:number ,nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allProvincias)

    useEffect(() => {
        dispatch(getProvincias())
    }, [dispatch]);


    return (
        <>
            <Banner />
            <Filters />
            <Box>
                <Grid className={s.grid} container >

                    {
                        allProvincias?.map((e: {id:number ,nombre: string, imagen: string }) => {
                            return (
                                <Grid item className={s.item} sm={12} md={6} lg={4} xl={3} key={e.id}>
                                    <Link href="/booking" >
                                        <Cards name={e.nombre} img={e.imagen} />

                                    </Link>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
            <Footer />
        </>
    )
}






