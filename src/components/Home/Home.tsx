import React from "react";
import Cards from "../Cards/Cards";
import Banner from "../Banner/Banner"
import { Grid, Box, Link, Container } from '@mui/material';
import s from './Home.module.css'
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters"


export default function Home() {

    const infoCard: { name: string, img: string }[] = [
        {
            name: "Tierra del fuego",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/canal-beagle-faro-ushuaia%20(1).jpg"
        },
        {
            name: "Chubut",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/turismo-en-chubut-ballenas.jpg"
        },
        {
            name: "Santiago del estero",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/turismo-santiago-del-estero.jpg"
        },
        {
            name: "San luis",
            img: " https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/sierras%20de%20las%20quijadas4.jpg"
        },
        {
            name: "Tucuman",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/turismo-en-tucuman.jpg"
        },
        {
            name: "Misiones",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/turismo-misiones-cataratas-argentina.jpg"
        },
        {
            name: "Catamarca",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/cabecera_catamarca.jpg"
        },
        {
            name: "La rioja",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/turismo-la-rioja.jpg"
        },
        {
            name: "Jujuy",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/_DSC7920-02.%20(1).jpg"
        },
        {
            name: "Santa cruz",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/SouthAmericaPatagonia2017_1018_100843-7744_AGP_HDR.jpg"
        },
        {
            name: "Buenos aires",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/turismo-buenos-aires-de-noche.jpg"
        },
        {
            name: "Chaco",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/Impenetrable-arboles-rio-aerea-Fredrik%20(46).jpg"
        },
        {
            name: "La pampa",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/turismo-la-pampa.jpg"
        },
        {
            name: "Entre rios",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/1-1.jpg"
        },
        {
            name: "Santa fe",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/DJI_20191117_195237_288-01..jpg"
        },
        {
            name: "Rio negro",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/turismo-en-rio-negro-bariloche.jpg"
        },
        {
            name: "Corrientes",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/NATURALEZA%20(2).jpg"
        },
        {
            name: "Neuquen",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/turismo-en-neuquen-argentina.jpg"
        },
        {
            name: "Salta",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/turismo-en-salta-argentina.jpg"
        },
        {
            name: "Formosa",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/Parque%20Nacional%20Rio%20Pilcomayo.jpg"
        },
        {
            name: "Mendoza",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/_FGI2164.jpg"
        },
        {
            name: "Cordoba",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/DSC_0196.jpg"
        },
        {
            name: "San juan",
            img: "https://www.argentinosxargentina.ar/media/catalogo/destinos/pics/1920x830/zc/turismo-san-juan.jpg"
        },


        
        


    ]

    return (
        <>
            <Banner />
            <Filters/>
            <Box>
                <Grid className={s.grid} container >

                    {
                        infoCard?.map(e => {
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
        </>
    )
}






