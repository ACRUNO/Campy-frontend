import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Navigate, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import * as actions from "../../actions/Blog.action"

interface FeaturedPostProps {
  id: number
  date: string;
  foto: string,
  description: string;
  title: string;
  username: string
  comentarios: number,
  vistas: number
}

export default function Card_chica(props: FeaturedPostProps) {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()

  const handleClick = () => {
    let data: { visitas: number } = { visitas: props.vistas + 1 }
    dispatch(actions.visualizaciones(props.id, data, () => { navigate(`/blog/${props.id}`) }))
  }

  return (
    <Grid item xs={12} md={3} onClick={() => handleClick()} display="flex"  >
      <CardActionArea component="a" href="#" sx={{ "&:hover": { boxShadow: "0px 4px 8px rgba(50, 50, 50, 1)" } }}>
        <Card sx={{ display: "flex", height: "10rem" }}>
          <CardContent sx={{ flex: 2, height: "6rem" }}>
            <Typography component="h2" variant="h5" align="center">{props.title}</Typography>
            <Grid display="flex" flexDirection="row" alignItems="center" justifyContent="center" justifyItems="flex-end">
              <Typography variant="subtitle1" color="text.secondary" sx={{ mr: 1, p: 0, mb: 0 }}>{new Date(props.date).toLocaleDateString("en-GB")} - </Typography>
              <Avatar src={props.foto} />
            </Grid>
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