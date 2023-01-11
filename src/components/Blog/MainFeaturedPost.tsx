import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Opacity } from '@mui/icons-material';
import { Button, Dialog, DialogTitle } from '@mui/material';
import { allPosts } from '../../reducer/estados';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import * as actions from "../../actions/Blog.action"
import { useNavigate } from 'react-router-dom';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';


const logInPhotos: string[] = ["https://res.cloudinary.com/pfcampy/image/upload/v1670536275/Fotos/Jujuy.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536434/Fotos/LaPampa.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536537/Fotos/Corrientes.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536684/Fotos/SanJuan.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670535617/Fotos/Tierradelfuego.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536350/Fotos/SantaCruz.jpg"]

const randomPhoto: string = logInPhotos[Math.floor(Math.random() * logInPhotos.length)];

type Props = {
  avisoComentario: boolean,
  setAvisoComentario: React.Dispatch<React.SetStateAction<boolean>>,
  posts: allPosts[]
}

export default function MainFeaturedPost(props: Props) {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()

  const handleClick = (id: number) => {
    dispatch(actions.cambiarComentariosVistos(id, () => { navigate(`/blog/${id}`) }))
  }


  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${randomPhoto})`,
      }}
    >


      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container display="flex" flexDirection="row" >

        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" sx={{ textShadow: "5px 2px 36px #070707" }} >
              Bienvenidos al blog de Campy
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Un espacio para compartir con la comunidad experiencias y recomendaciones sobre el mundo del camping
            </Typography>
          </Box>
        </Grid>

        {props.posts.length > 0 &&

          <Grid item md={6} display="flex" justifyContent="flex-end" >

            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pl: { md: 0 },
              }}
            >
              <Grid container display="flex" flexDirection="column" alignItems="center" sx={{ p: 1, maxWidth: "fit-content", borderStyle: "solid", borderColor: "white", borderRadius: 1.5 }}>
                <Paper sx={{ backgroundColor: "white", opacity: 0.75, p: 3, height: "6rem", overflowY: "auto" }}>
                  <Grid item display="flex" alignItems="center" >
                    <NotificationImportantIcon color="error" fontSize='large' />
                    <Typography>Tenes comentarios sin leer de tus posts:</Typography>
                  </Grid>
                  {props.posts?.map((p) => (
                    <Grid item display="flex" justifyContent="center">
                      <Button variant="text" color="inherit" onClick={() => handleClick(p.id)} sx={{ maxWidth: "fit-content" }}>{p.titulo}</Button>
                    </Grid>
                  ))}
                </Paper>
              </Grid>
            </Box>

          </Grid>
        }



      </Grid>
    </Paper>
  );
}