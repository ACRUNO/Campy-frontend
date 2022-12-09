import React from "react";
import {Box, Card, Grid, Typography, CardContent, CardMedia, } from '@mui/material';

export default function CardCamping() {
    return (
    
        
    <Card sx={{ display: 'flex', mt: 2, mb:2, height:200 , width:1000}}>
        <CardMedia
        component="img"
        sx={{ width: 400 }}
        image="https://thehotelfactory.com/wp-content/uploads/2018/09/Camping-portada.jpeg"
        alt="Camping"
        />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Nombre del Camping
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Descripcion
          </Typography>
        </CardContent>
      </Box>
      <Box >
      <Typography variant="subtitle1" color="text.secondary" component="div">Precio</Typography>
        </Box>
      
    </Card>
    
    )}
