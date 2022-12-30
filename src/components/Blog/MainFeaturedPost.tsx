import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Opacity } from '@mui/icons-material';


const logInPhotos: string [] = ["https://res.cloudinary.com/pfcampy/image/upload/v1670536275/Fotos/Jujuy.jpg","https://res.cloudinary.com/pfcampy/image/upload/v1670536434/Fotos/LaPampa.jpg","https://res.cloudinary.com/pfcampy/image/upload/v1670536537/Fotos/Corrientes.jpg","https://res.cloudinary.com/pfcampy/image/upload/v1670536684/Fotos/SanJuan.jpg","https://res.cloudinary.com/pfcampy/image/upload/v1670535617/Fotos/Tierradelfuego.jpg","https://res.cloudinary.com/pfcampy/image/upload/v1670536350/Fotos/SantaCruz.jpg"]

const randomPhoto:string = logInPhotos[Math.floor(Math.random() * logInPhotos.length)];

export default function MainFeaturedPost() {


  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${randomPhoto})`,
        opacity: 0.65
      }}
    >
      {/* Increase the priority of the hero background image */}
      {/* {<img style={{ display: 'none' }} src={randomPhoto} alt={"imagen"} />} */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit"  >
              Bienvenidos al blog de Campy
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Un espacio para compartir con la comunidad experiencias y recomendaciones sobre el mundo del camping 
            </Typography>
            {/* <Typography variant="subtitle1" color="inherit" paragraph>
              
            </Typography> */}
            {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}