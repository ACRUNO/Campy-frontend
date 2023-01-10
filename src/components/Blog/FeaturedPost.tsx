import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, CardMedia } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import * as actions from "../../actions/Blog.action";
import s from './FeaturedPost.module.css';
import { allPosts } from '../../reducer/estados';

interface FeaturedPostProps {
  id: number
  date: string;
  foto: string,
  description: string;
  title: string;
  username: string
  comentarios: number,
  vistas: number,
  tipo: string
  userNow: number,
  userId: number,
  imagenes: Array<string>
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const handleClick = () => {

    if (props.userNow === props.userId) { dispatch(actions.cambiarComentariosVistos(props.id)) }
    if (props.userNow !== props.userId) {
      let data: { visitas: number } = { visitas: props.vistas + 1 }
      dispatch(actions.visualizaciones(props.id, data, () => { navigate(`/blog/${props.id}`) }))
    }
    else { navigate(`/blog/${props.id}`) }


  }


  return (
    <Grid item xs={12} md={10} onClick={() => handleClick()}>


      <CardActionArea component="a" href="#" sx={{ "&:hover": { boxShadow: "0px 4px 8px rgba(50, 50, 50, 1)" } }}>

        <Card sx={{ display: 'flex' }}>
          {props.imagenes[0] ? <CardMedia
            component="img"
            image={props.imagenes[0]}
            alt="img"
            sx={{ objectFit: "cover", width: "30%", height: "19rem", pr: "1rem" }}
          /> : null}
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {props.title}
            </Typography>

            <Grid sx={{ mb: 2, mt: 1 }} display="flex" alignItems="center" >
              <Typography variant="subtitle1" color="text.secondary" sx={{ mr: 1 }}>{new Date(props.date).toLocaleDateString("en-GB")} - </Typography>
              <Avatar sx={{ mr: 1 }} src={props.foto} />
              <Typography sx={{ mb: 1.5 }} fontWeight="600" variant="subtitle1" color="text.secondary" position='relative'>
                {props.username}
                <Typography fontWeight="100" variant='subtitle2' sx={{
                  position: 'absolute', top: 22, left: 0, opacity: .8
                }} className={s[props.tipo]}>{props.tipo}</Typography>
              </Typography>
            </Grid>

            <Grid sx={{ display: "flex" }}>
              <Typography sx={{ mb: 1, mt: 1 }} variant="subtitle1" paragraph>
                {props.description.length > 250 ? props.description.slice(0, 250) + "..." : props.description}
              </Typography>
            </Grid>

            <Typography variant="subtitle1" color="secondary">
              Continuar leyendo...
            </Typography>
            <Grid display="flex" alignItems="center" sx={{ mt: 1 }}>
              <Typography sx={{ mr: 1 }}>{props.comentarios}</Typography>
              <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
              <Typography sx={{ ml: 2, mr: 1 }}>{props.vistas}</Typography>
              <VisibilityIcon />
            </Grid>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>

  );
}