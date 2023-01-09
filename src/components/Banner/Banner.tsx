import React from "react";
import { Box, Typography } from '@mui/material';
import s from './Banner.module.css'


export default function Banner() {
    const banner: string = "https://res.cloudinary.com/pfcampy/image/upload/v1673187498/camping-4303357_feggti.jpg"
    return (

        <Box display='flex' justifyContent='center' alignItems='center'>
            <Box position="absolute" color="primary.light" justifyContent='center' alignItems='center' >
                <Typography className={s.titulo} component="h1" variant="h2"
                    display='flex' justifyContent='center' alignItems='center' sx={{ textShadow: "5px 3px 6px #070707" }}>DESCUBRE ARGENTINA</Typography>
                <Typography className={s.subtitulo} sx={{ textShadow: "2px 2px 2px #070707" }} component="h5" variant="h5" display='flex' justifyContent='center' textAlign='center' >Reserva el camping perfecto para tu próxima aventura y unete a nuestra comunidad de viajeros  </Typography>
                <Typography className={s.subtitulo} sx={{ textShadow: "2px 2px 2px #070707" }} component="h5" variant="h5" display='flex' justifyContent='center' textAlign='center' >Planifica tu viaje, la naturaleza te espera.</Typography>
                {/*                 <Typography className={s.subtitulo} component="h6" variant="h6" display='flex' justifyContent='center' textAlign='center' >Encuentra el camping perfecto para tu próximo viaje,la naturaleza te espera.</Typography>
                <Typography className={s.subtitulo} component="h6" variant="h6" display='flex' justifyContent='center' textAlign='center' >Únete a nuestra Comunidad de viajeros y planifica tu aventura.</Typography> */}

            </Box>
            <Box
                height="calc(100vh - 70px)"
                sx={{ objectFit: 'cover' }}
                component="img"
                className={s.banner}
                alt="Paisaje"
                src={banner}
            />
        </Box>

    )
}