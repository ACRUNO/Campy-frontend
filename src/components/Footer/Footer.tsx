import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {CardMedia, Avatar, Grid} from '@mui/material';

import Link from '@mui/material/Link';
import Style from "./footer.module.css"


function Copyright(props: any) {
  return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" href="http://localhost:3000/">
              CAMPY S.A.
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
      </Typography>
  );
}


export default function Footer() {


  return (
    <Box sx={{ p: '100px 0', bgcolor: 'rgb(245, 245, 245)'}} component="footer" className={Style.footer}>
        <Grid container direction="row"  justifyContent="center" sx={{pt: 5}} >
        <Box className={Style.img}
          component="img"
          sx={{
            ml: "1%",
          }}
          alt="Logo"
          src={"https://res.cloudinary.com/pfcampy/image/upload/v1670849448/campy/logo_CAMPY-BLANCO_hn507u.png"}/>
          </Grid>
        <Grid container direction="row"  justifyContent="center" columnSpacing={15} sx={{mt: 5}}>
        <Grid item >
          <Typography sx={{mt: 2}}
              variant="subtitle1"
              align="center"
              > Quienes Somos
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{mt: 2}}
              variant="subtitle1"
              align="center"> Preguntas Frecuentes
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{mt: 2}}
              variant="subtitle1"
              align="center"> Contacto
          </Typography>
        </Grid>
        </Grid>
        <Copyright sx={{ mt: 5, color: "white"}} />
    </Box>
    
  );
}