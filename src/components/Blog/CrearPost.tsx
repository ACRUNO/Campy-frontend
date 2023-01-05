import { Grid, Typography, TextField, Box, Button, Dialog, DialogTitle,DialogContent, Checkbox, FormControlLabel} from '@mui/material';
import { Container } from '@mui/system';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/index';
import * as actions from "../../actions/Blog.action"
import { useNavigate } from 'react-router-dom';
import Cloudinary from './Cloudinary';



let img: Array<string> = ["1", "2", "3"]

export default function CrearPost() {

  const dispatch: AppDispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user);
  const navigate =useNavigate()
  const [open, setOpen]=React.useState(false)
  const [boton, setBoton]=React.useState(true)

  const [input, setInput] = React.useState<{titulo:string, texto:string, imagenes:string[], usuarioId: number}>({
    titulo: '',
    texto: '',
    imagenes:[],
    usuarioId:0})

  
  
    const handleChangeTitulo=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      setInput({
          ...input,
          titulo: e.target.value,
          usuarioId: user.id
        })
      
    }

    const handleChangeTexto=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      setInput({
          ...input,
          texto: e.target.value
        })
    }


   const declaracion = "Declaro que la única finalidad del presente posteo es contribuir a la comunidad de Campy y que el mismo no posee ningún tipo de lenguaje inapropiado ni discriminatorio."

    const handleSubmit=(e:React.ChangeEvent<unknown>)=>{
      e.preventDefault();
      dispatch(actions.crearPost(input, user.token));
      setOpen(true);
      dispatch(actions.getAll_posts());
      setTimeout(()=>{navigate("/blog")},3000);
    }


    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
      if (input.texto.length>0 && input.titulo.length>0 && e.target.checked === true ){
      setBoton(false)}
    }


    return(
        <React.Fragment>
        <Dialog
        fullWidth
        maxWidth="md"
        open={open}>
        <DialogTitle align='center'>Creando Post...</DialogTitle>
        <DialogContent >
        <Box
            component="img"
            alt="imagen"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          />
        </DialogContent>
        </Dialog>
          
          
        <Typography align="center" variant='h3' sx={{mt:2}}>Formulario</Typography>
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
                  minRows={10}
                  onChange={(e)=>{handleChangeTexto(e)}}
                />
                </Grid>
                
                </Grid>
                <Grid container columnSpacing={2} justifyContent="center" sx={{ mt: 4, ml: 0 }}>
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
              </Grid>
              <Cloudinary setInput={setInput}></Cloudinary>
              
              <Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{mt:4, mb:4}}>
              <FormControlLabel
              label={declaracion}
               control={<Checkbox color="secondary" onChange={(e)=>handleChange(e)}/>}
      />
              <Button disabled={boton} color="secondary" variant='contained' id='Crear' sx={{mt:2}} onClick={(e)=>handleSubmit(e)} value="Crear Post">Crear Post</Button>
              </Grid>
              </React.Fragment>
              
        
    )
}