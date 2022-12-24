import React from "react";
import {Box, Card, Grid, Typography, CardContent, CardMedia } from '@mui/material'
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Style from "../Camping/Camping.module.css"

type Props = {
  id:number,
  nombre: string,
  localidad: string,
  provincia:string,
  descripcion:string,
  categoria: string,
  imagenes:Array<string>,
  estrellas: number,
  precio:number
}

export default function CardCamping( props: Props){
    return (
    
    <Link to={`/booking/camping/${props.id}`} style={{textDecoration: 'none'}}>
    <Card className={Style.card} sx={{ display: 'flex', mt: 2, mb:2,  mr:5, height:200 , width:0.90, p:1,boxShadow: 3, justifyContent:"space-around",}}>
        <CardMedia
        component="img"
        image={props.imagenes[0]}
        alt="Camping"
        sx={{width:"15.6rem"}}
        />
      <Box >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', width:500, p:0, m:0}}>
          <Typography component="div" variant="h4" sx={{mb:1}}>
            {props.nombre}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            <strong>Ubicación: </strong>{props.localidad},{props.provincia}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            <strong>Categoría: </strong>{props.categoria}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" >
            {props.descripcion}
          </Typography>
        </CardContent>
      </Box>
      <Box flexDirection="column" display="flex" component="div" justifyContent="space-between" alignItems="flex-end">
      <Box className={Style.rankingcont} display="flex" alignContent="flex-end">
            <Typography  color="secondary" component="legend">Puntuación de usuarios</Typography>
            {/* <Rating  name="read-only" value={props.estrellas} readOnly /> */}
      </Box>
      <Box display="flex" flexDirection="column"  justifyContent="flex-end" component="div" >
      <Typography variant="subtitle1" color="text.secondary" component="div" align="right">1 noche, 1 adulto</Typography>
      <Typography variant="h4"  component="div" align="right">Desde <strong>${props.precio}</strong></Typography>
      <Typography variant="body2" color="text.secondary" component="div" align="right">Incluye impuestos y cargos</Typography>
      </Box>
      </Box>
      
    </Card>
    </Link>
    
    )}
