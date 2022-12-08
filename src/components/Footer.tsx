import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {CardMedia, Avatar} from '@mui/material';

import Link from '@mui/material/Link';
import "./footer.modules.css"
import GitHubIcon from '@mui/material/Icon';


export default function Footer() {


  return (
    <Box sx={{ p: 6 }} component="footer" className="footer">
      <Box
        component="img"
        sx={{
          ml: "1%",
          bgcolor: "white",
        }}
        alt="Logo"
        src={"https://res.cloudinary.com/pfcampy/image/upload/v1670466096/logo_CAMPY_rjsp9a.png"}
          />
        <Typography
            variant="subtitle1"
            align="center"
            > Quienes Somos
        </Typography>
        <Typography
            variant="subtitle1"
            align="center"> Preguntas Frecuentes
        </Typography>
        <Typography
            variant="subtitle1"
            align="center"> Contacto
        </Typography>
        {/* <GitHubIcon  color="primary"/> */}
    </Box>
    
  );
}