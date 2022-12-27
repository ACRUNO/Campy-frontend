import * as React from 'react';
import { CardHeader,CardMedia,CardContent,CardActions,Card,Typography,Button,Avatar} from '@mui/material';
import s from "./CardMap.module.css"
import { Campings } from "../../../reducer/estados";
import CloseIcon from '@mui/icons-material/Close';


type Props = {
    nombre: string,
    imagen: string,
    descripcion:string
}


export default function CardMap(props:Props) {





  return (
    <Card className={s.Card} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.imagen}
        title="camping"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.descripcion}
        </Typography>
      </CardContent>
    </Card>
  );
}