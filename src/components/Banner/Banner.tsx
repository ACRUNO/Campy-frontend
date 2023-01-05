import React from "react";
import { Box, Typography } from '@mui/material';
import s from './Banner.module.css'


export default function Banner() {
    const banner: string = "https://www.argentinosxargentina.ar/media/sticky/1920x830/zc/slide_2.jpg"
    return (

        <Box display='flex' justifyContent='center' alignItems='center'>
            <Box position="absolute" color="primary.light" justifyContent='center' alignItems='center'  >
                <Typography className={s.titulo} component="h1" variant="h2"
                    display='flex' justifyContent='center' alignItems='center' >DESCUBRE ARGENTINA</Typography>
                <Typography className={s.subtitulo} component="h6" variant="h6" display='flex' justifyContent='center' textAlign='center' >Reserva el camping perfecto para tu próxima aventura y unete a nuestra comunidad de viajeros  </Typography>
                <Typography className={s.subtitulo} component="h6" variant="h6" display='flex' justifyContent='center' textAlign='center' >Planifica tu viaje, la naturaleza te espera.</Typography>
                {/*                 <Typography className={s.subtitulo} component="h6" variant="h6" display='flex' justifyContent='center' textAlign='center' >Encuentra el camping perfecto para tu próximo viaje,la naturaleza te espera.</Typography>
                <Typography className={s.subtitulo} component="h6" variant="h6" display='flex' justifyContent='center' textAlign='center' >Únete a nuestra Comunidad de viajeros y planifica tu aventura.</Typography> */}

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