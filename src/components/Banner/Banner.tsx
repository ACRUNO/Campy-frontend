import React from "react";
import { Box, Typography } from '@mui/material'
import { height, maxHeight, maxWidth } from "@mui/system";
import s from './Banner.module.css'


export default function Banner() {
    const banner: string = "https://www.argentinosxargentina.ar/media/sticky/1920x830/zc/slide_2.jpg"
    return (
        <Box display='flex' justifyContent='center' alignItems='center'>
            <Box position="absolute" color="primary.light" justifyContent='center' alignItems='center'  >
                <Typography variant="h1" display='flex' justifyContent='center' alignItems='center' sx={{ letterSpacing: 20 }}>ARGENTINA</Typography>
                <Typography variant="h4" display='flex' justifyContent='center' textAlign='center' sx={{ letterSpacing: 5 }}>Pais multicultural con miles de rincones para descubrir</Typography>
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
