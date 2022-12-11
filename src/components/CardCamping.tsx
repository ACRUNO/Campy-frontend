import React from "react";
import {Box, Card, Grid, Typography, CardContent, CardMedia, Link} from '@mui/material';

export default function CardCamping()
  //nombre, id, localidad, provincia, descripcion, categoria, imagen,precio
   {
    return (
    
        <Link href="/booking/camping/8">
        {/* <Link href="/booking/camping/`${id}`"> */}
    <Card sx={{ display: 'flex', mt: 2, mb:2, height:200 , width:1000}}>
        <CardMedia
        component="img"
        sx={{ width: 400 }}
        image="https://thehotelfactory.com/wp-content/uploads/2018/09/Camping-portada.jpeg"
        // image={imagen}
        alt="Camping"
        />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Nombre del Camping
            {/* {nombre} */}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Localidad, Provincia ------Categoría
            {/* {localidad}{provincia}----{categoria} */}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Descripcion
            {/* {descripcion} */}
          </Typography>
        </CardContent>
      </Box>
      <Box >
      <Typography variant="subtitle1" color="text.secondary" component="div">Precio</Typography>
        </Box>
      
    </Card>
    </Link>
    
    )}
