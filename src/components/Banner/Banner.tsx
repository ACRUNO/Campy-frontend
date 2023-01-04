import React from "react";
import { Box, Typography } from '@mui/material';
import s from './Banner.module.css'


export default function Banner() {
    const banner: string = "https://www.argentinosxargentina.ar/media/sticky/1920x830/zc/slide_2.jpg"
    return (
       
        <Box display='flex' justifyContent='center' alignItems='center'>
            <Box position="absolute" color="primary.light" justifyContent='center' alignItems='center'  >
                <Typography className={s.titulo} component="h1" variant="h2"
                display='flex' justifyContent='center' alignItems='center' >ARGENTINA</Typography>
                <Typography className={s.subtitulo} component="h5" variant="h6" display='flex' justifyContent='center' textAlign='center' >Pais multicultural con miles de rincones para descubrir</Typography>
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