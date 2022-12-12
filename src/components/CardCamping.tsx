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
  estrellas: number
}

export default function CardCamping( props: Props){
    return (
    
    <Link href={`/booking/camping/${props.id}`}>
    <Card sx={{ display: 'flex', mt: 2, mb:2, height:200 , width:1000, p:1,boxShadow: 3}}>
        <CardMedia
        component="img"
        image={props.imagenes[0]}
        alt="Camping"
        sx={{width:250}}
        />
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto', mt:1,ml:2,mb:1, p:0 }}>
          <Typography component="div" variant="h4" sx={{mb:1}}>
            {props.nombre}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            <strong>Ubicación: </strong>{props.localidad},{props.provincia}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            <strong>Categoría: </strong>{props.categoria}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{width:550}}>
            {props.descripcion}
          </Typography>
        </CardContent>
      </Box>
      <Box className={Style.rankingcont} display="flex" alignContent="flex-end" sx={{mt:1, mr:1, ml:0}}>
            <Typography  color="primary" component="legend">Ranking</Typography>
            <Rating  name="read-only" value={props.estrellas} readOnly />
            </Box>
      
      
      {/* <Box >
      <Typography variant="subtitle1" color="text.secondary" component="div">Precio</Typography>
        </Box> */}
      
    </Card>
    </Link>
    
    )}
