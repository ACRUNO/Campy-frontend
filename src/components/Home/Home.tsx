import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import Banner from "../Banner/Banner"
import { Grid, Box, Link, Container } from '@mui/material';
import s from './Home.module.css'
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters"
import { RootState } from '../../store/index'
import Footer from "../Footer";





export default function Home() {

    const allProvincias = useSelector((state: RootState) => state.allProvincias)


    return (
        <>
            <Banner />
            <Filters />
            <Box>
                <Grid className={s.grid} container >

                    {
                        allProvincias?.map((e: { name: string, img: string }) => {
                            return (
                                <Grid item className={s.item} sm={12} md={6} lg={4} xl={3} key={e.name}>
                                    <Link href="/booking" >
                                        <Cards name={e.name} img={e.img} />

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






