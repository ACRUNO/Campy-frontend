import { Grid, Typography, TextField, Box, Button, Dialog, DialogTitle, DialogContent, Checkbox, FormControlLabel } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/index';
import * as actions from "../../actions/Blog.action"
import { useNavigate } from 'react-router-dom';
import Cloudinary from './Cloudinary';
import { Cancel } from '@mui/icons-material';
import { VERDE } from '../helpers/colors';



let img: Array<string> = ["1", "2", "3"]

export default function CrearPost() {

  const dispatch: AppDispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  // const [boton, setBoton] = React.useState(true)
  const [checked, setChecked] = React.useState(false)

  const [input, setInput] = React.useState<{ titulo: string, texto: string, imagenes: string[], usuarioId: number }>({
    titulo: '',
    texto: '',
    imagenes: [],
    usuarioId: 0
  })

  let boton = !(
    input.texto.length > 0 &&
    input.titulo.length > 0 &&
    input.imagenes.length > 0 &&
    checked
  )


  const handleChangeTitulo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      titulo: e.target.value,
      usuarioId: user.id
    })

  }

  const handleChangeTexto = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      texto: e.target.value
    })
  }


  const declaracion = "Declaro que la única finalidad del presente posteo es contribuir a la comunidad de Campy y que el mismo no posee ningún tipo de lenguaje inapropiado ni discriminatorio."

  const handleSubmit = (e: React.ChangeEvent<unknown>) => {
    e.preventDefault();
    setOpen(true);
    dispatch(actions.crearPost(input, user.token, () => { navigate(`/blog`) }));
    //dispatch(actions.getAll_posts());
    //setTimeout(() => { navigate("/blog") }, 3000);
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  const removeImage = (index: number) => {
    setInput((input: any) => {
      return {
        ...input,
        imagenes: input.imagenes.filter((_: any, i: number) => i !== index)
      }
    })
  }


  return (
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


      <Typography align="center" variant='h3' sx={{ mt: 2 }}>Formulario</Typography>
      <Grid container spacing={2} display="flex" flexDirection="column" alignItems="stretch" sx={{ mt: 2, pr: 6, pl: 6 }} >
        <Grid item xs={12} >
          <TextField
            color="secondary"
            name="Titulo"
            required
            fullWidth
            id="Titulo"
            label="Título"
            onChange={(e) => { handleChangeTitulo(e) }}
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
            onChange={(e) => { handleChangeTexto(e) }}
          />
        </Grid>

      </Grid>
      <Grid container columnSpacing={2} justifyContent="center" sx={{ mt: 4, ml: 0 }}>
        {img.map((m, i) => (
          <Grid position='relative' item key={m}>
            <Box
              component="img"
              sx={{
                ml: "1%",
                bgcolor: "white",
                height: 200,
                width: 200
              }}
              alt="Logo"
              src={input.imagenes[i] || "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png"} />
            {input.imagenes[i] &&
              <Cancel
                sx={{
                  fontSize: "1.5rem",
                  position: "absolute",
                  top: 5, right: 3,
                  fill: VERDE, bgcolor: "white",
                  borderRadius: "50%",
                  cursor: "pointer"
                }}
                onClick={() => removeImage(i)}
              />
            }
          </Grid>
        ))}
      </Grid>
      <Cloudinary setInput={setInput}></Cloudinary>

      <Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ mt: 4, mb: 4 }}>
        <FormControlLabel
          label={declaracion}
          control={<Checkbox color="secondary" onChange={(e) => handleChange(e)} />}
        />
        <Button disabled={boton} color="secondary" variant='contained' id='Crear' sx={{ mt: 2 }} onClick={(e) => handleSubmit(e)} value="Crear Post">Crear Post</Button>
      </Grid>
    </React.Fragment>


  )
}