import React from "react";
import { Box, Typography } from '@mui/material';
import s from './Banner.module.css';


export default function Banner() {
    const banner: string = "https://www.argentinosxargentina.ar/media/sticky/1920x830/zc/slide_2.jpg"
    return (

        <Box display='flex' justifyContent='center' alignItems='center' width='100%'>

            <Box px="2rem" sx={{
                color: 'primary.light',
                position: 'absolute',
                width: '100%',
            }}>

                <Typography className={s.titulo} variant="h1" component="h1" display='flex' justifyContent='center' alignItems='center' px="2rem" >ARGENTINA</Typography>

                <Typography className={s.subtitulo} variant="h4" component="h4" display='flex' justifyContent='center' textAlign='center' px="2rem" >Pais multicultural con miles de rincones para descubrir</Typography>
            </Box>


            <Box
                component="img"
                className={s.banner}
                alt="Paisaje"
                src={banner}
            />
        </Box>

    )
}