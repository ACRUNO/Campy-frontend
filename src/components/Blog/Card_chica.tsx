import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Navigate, useNavigate } from 'react-router-dom';
import { Avatar, Box } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import * as actions from "../../actions/Blog.action"
import formatDate from '../helpers/formatDate';
import s from './Card_chica.module.css';

interface FeaturedPostProps {
  id: number
  date: string;
  foto: string,
  description: string;
  title: string;
  username: string
  comentarios: number,
  vistas: number,
  userNow: number,
  userId: number
}

export default function Card_chica(props: FeaturedPostProps) {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()

  const handleClick = () => {

    if (props.userNow === props.userId) { dispatch(actions.cambiarComentariosVistos(props.id, () => { })) }
    if (props.userNow !== props.userId) {
      let data: { visitas: number } = { visitas: props.vistas + 1 }
      dispatch(actions.visualizaciones(props.id, data, () => { navigate(`/blog/${props.id}`) }))
    }
    else { navigate(`/blog/${props.id}`) }

  }

  return (
    <Box
      onClick={() => handleClick()}
      display="flex"
      sx={{ cursor: "pointer", maxWidth: "none" }}
      width="300px"
    >
      <CardActionArea
        component="a"
        href="#"
        sx={{
          width: "300px",
          "&:hover": {
            boxShadow: "0px 4px 8px rgba(50, 50, 50, 1)"
          }
        }}
        disabled={true}
      >
        <Card sx={{ display: "flex", height: "8rem", mb: 0, alignItems: "space-around" }}>
          <CardContent sx={{ flex: 3, height: "7rem" }}>
            <Typography component="h2" variant="subtitle1" align="center">{props.title}</Typography>
            {/* <Grid display="flex" flexDirection="row" alignItems="center" justifyContent="center" justifyItems="flex-end">
              <Typography variant="body2" color="text.secondary" sx={{ mr: 0.4, p: 0, mb: 0 }}>{new Date(props.date).toLocaleDateString("en-GB")} - </Typography>
              <Avatar src={props.foto} />
            </Grid> */}
            <Grid container display="flex" alignContent="flex-end" justifyContent="space-between" sx={{ mt: 0.5 }}>
              <Grid item display="flex" alignItems="center" justifyContent="center">
                <Typography sx={{ mr: 1 }}>{props.comentarios}</Typography>
                <ChatBubbleOutlineIcon fontSize='small'></ChatBubbleOutlineIcon>
                <Typography sx={{ ml: 2, mr: 1 }}>{props.vistas}</Typography>
                <VisibilityIcon fontSize='small' />
              </Grid>
              <Grid item display="flex" alignItems="center" justifyContent="center">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mr: 0.4, p: 0, mb: 0 }}
                >{formatDate(props.date)} - </Typography>
                <Avatar src={props.foto} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </CardActionArea>
    </Box >

  );
}