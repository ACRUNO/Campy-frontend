import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Navigate, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';

interface FeaturedPostProps {
    id:number
    date: string;
    foto: string,
    description: string;
    title: string;
    username: string
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const navigate =useNavigate()

  const handleClick=()=>{
    setTimeout(()=>{navigate(`/blog/${props.id}`)},100)
    
  }

  return (
    <Grid  item xs={12} md={10} onClick={()=>handleClick()}>
      <CardActionArea component="a" href="#" sx={{"&:hover":{boxShadow: "0px 4px 8px rgba(50, 50, 50, 1)"}}}>
        <Card sx={{ display: 'flex'}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {new Date(props.date).toLocaleDateString("en-GB")} - {props.username}
            </Typography>
            <Avatar src={props.foto}/>
            <Typography variant="subtitle1" paragraph>
              {props.description.length>250? props.description.slice(0,250) + "...":props.description}
            </Typography>
            <Typography variant="subtitle1" color="secondary">
              Continuar leyendo...
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
    //</Link>
  );
}