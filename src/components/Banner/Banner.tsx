import React from "react";
import { Box } from '@mui/material'
import { height, maxHeight, maxWidth } from "@mui/system";
import s from './Banner.module.css'


export default function Banner() {
    const banner:string ="https://www.argentinosxargentina.ar/media/sticky/1920x830/zc/slide_2.jpg" 
    return (
        <>
    
       <Box
                            component="img"
                            className={s.banner}
                            alt="Paisaje"
                            src={banner}
                        />
        </>

    )
} 
