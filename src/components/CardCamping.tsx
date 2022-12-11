import React from "react";
import {Box, Card, Grid, Typography, CardContent, CardMedia, Link} from '@mui/material';

type Props = {
  id:number,
  nombre: string,
  localidad: string,
  provincia:string,
  descripcion:string,
  categoria: string,
  imagenes:Array<string>
}

export default function CardCamping( props: Props){
    return (
    
        <Link href={`/booking/camping/${props.id}`}>
    <Card sx={{ display: 'flex', mt: 2, mb:2, height:200 , width:1000}}>
        <CardMedia
        component="img"
        width="400px"
        image={props.imagenes[0]}
        alt="Camping"
        />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.nombre}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <strong>Ubicación: </strong>{props.localidad},{props.provincia}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <strong>Categoría: </strong>{props.categoria}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.descripcion}
          </Typography>
        </CardContent>
      </Box>
      {/* <Box >
      <Typography variant="subtitle1" color="text.secondary" component="div">Precio</Typography>
        </Box> */}
      
    </Card>
    </Link>
    
    )}
