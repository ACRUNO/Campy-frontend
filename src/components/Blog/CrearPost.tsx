import { Grid, Typography, TextField, Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/index';
import * as actions from "../../actions/Blog.action"
import { useNavigate } from 'react-router-dom';



let img: Array<string> = ["1", "2", "3", "4"]

export default function CrearPost() {

  const dispatch: AppDispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user);
  const navigate =useNavigate()

  const [input, setInput] = React.useState<{titulo:string, texto:string, imagenes:string[], usuarioId: number}>({
    titulo: '',
    texto: '',
    imagenes:[],
    usuarioId:0})

  const [habilitar, setHabilitar]= React.useState<boolean>(true)
  
    const handleChangeTitulo=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      setInput({
          ...input,
          titulo: e.target.value,
          usuarioId: user.id
        })
      if (!user.id){setHabilitar(false)}
    }

    const handleChangeTexto=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      setInput({
          ...input,
          texto: e.target.value
        })
    }

    const handleChangeImagenes=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setInput({
        ...input,
        imagenes: [...input.imagenes, e.target.value] 
      })
     
    }

   

    const handleSubmit=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      e.preventDefault()
      setTimeout(()=>{dispatch(actions.crearPost(input, user.token))})
      setInput({
        ...input,
          texto: "",
          titulo:"",
          imagenes:[]
        })
      dispatch(actions.getAll_posts())
      setTimeout(()=>{navigate("/blog")},5000)
    }

  

    return(
        <React.Fragment>
          <Typography align="center" variant='h3' sx={{mt:2}}>Formulario</Typography>
          <Typography align="center" variant="h6">**Funcionalidad en desarrollo**</Typography>
        <Grid container spacing={2} display="flex" flexDirection="column" alignItems="stretch" sx={{mt:2, pr:6, pl:6}} >
              <Grid item xs={12} >
                <TextField
                color="secondary"
                  name="Titulo"
                  required
                  fullWidth
                  id="Titulo"
                  label="Título"
                  onChange={(e)=>{handleChangeTitulo(e)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                color="secondary"
                  required
                  fullWidth
                  id="Texto"
                  label="Texto"
                  name="Texto"
                  multiline
                  onChange={(e)=>{handleChangeTexto(e)}}
                />
                </Grid>
                {/* ESTO ES DE PRUEBA SOLAMENTE, CAMBIAR POR CLOUDINARY */}
                <Grid item xs={12}>
                <TextField
                color="secondary"
                  required
                  fullWidth
                  id="Imagen"
                  label="Imagen URL"
                  name="Imagen"
                  onBlur={(e)=>{handleChangeImagenes(e)}}
                />
                <Typography>Proximamente se podrá subir más de una foto y también desde el ordenador</Typography>
                </Grid>
                </Grid>
                {/* <Grid container columnSpacing={2} justifyContent="center" sx={{ mt: 4, ml: 0 }}>
                {img.map(m => (
                  <Grid item key={m}>
                    <Box
                      id={m}
                      component="img"
                      sx={{
                        ml: "1%",
                        bgcolor: "white",
                        height: 200,
                        width: 200
                      }}
                      alt="Logo"
                      src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png"} />
                  </Grid>
                ))}
                
              </Grid> */}
              <Grid display="flex" justifyContent="center">
              {user === null ? <Button variant="outlined" color="error">Es necesario loguearse para crear un post</Button>
              :<Button color="secondary" variant='contained' id='Crear' sx={{mt:2}} onClick={(e)=>{handleSubmit(e)}} value="Crear Post">Crear Post</Button>}
              </Grid>
              </React.Fragment>
              
        
    )
}