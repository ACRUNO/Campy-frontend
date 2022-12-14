import React from "react";
import {Box, Card, Grid, Typography, CardContent, CardMedia, Link} from '@mui/material';
import Rating from '@mui/material/Rating';
import Style from "./Camping/Camping.module.css"

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
    
    <Link href={`/booking/camping/${props.id}`}>
    <Card sx={{ display: 'flex', mt: 2, mb:2, ml:2, mr:2, height:200 , width:1000, p:1,boxShadow: 3, justifyContent:"space-around"}}>
        <CardMedia
        component="img"
        image={props.imagenes[0]}
        alt="Camping"
        sx={{width:250}}
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
      <Box className={Style.rankingcont} display="flex" alignContent="flex-end" sx={{mt:1, mr:1, ml:0}}>
            <Typography  color="secondary" component="legend">review/puntuacion??</Typography>
            {/* <Rating  name="read-only" value={props.estrellas} readOnly /> */}
      </Box>
      <Box display="flex" flexDirection="column"  justifyContent="flex-end" component="div" >
      <Typography variant="subtitle1" color="text.secondary" component="div" align="right">1 noche, 1 adulto</Typography>
      <Typography variant="h4" color="text.secondary" component="div" align="right">Desde <strong>${props.precio}</strong></Typography>
      <Typography variant="body2" color="text.secondary" component="div" align="right">Incluye impuestos y cargos</Typography>
      </Box>
      </Box>
      
    </Card>
    </Link>
    
    )}
