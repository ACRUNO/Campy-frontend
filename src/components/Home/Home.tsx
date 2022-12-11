import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import Banner from "../Banner/Banner"
import { Grid, Box,Container} from '@mui/material';
import s from './Home.module.css'
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";
import { AppDispatch, RootState } from '../../store/index';
import Footer from "../Footer";
import {getProvincias,getAllCampings,filterProvincia,getCampingsProvincias}from "../../actions";
import { MouseEvent } from 'react';
import { Link } from "react-router-dom";







export default function Home() {

    const dispatch: AppDispatch = useDispatch()


    const allProvincias:{id:number ,nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allProvincias)

    useEffect(() => {
        dispatch(getProvincias())
        dispatch(getAllCampings())
    }, [dispatch]);



    function handleClick(id:number){
        dispatch(filterProvincia(id)) 
        dispatch(getCampingsProvincias())
        document.documentElement.scrollTop = 0

    }

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
                                <Link onClick={(event:MouseEvent<HTMLElement>) => handleClick(e.id)} to={`/booking/`} className={s.link}>
                                        <Cards id={e.id} name={e.nombre} img={e.imagen} />

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






