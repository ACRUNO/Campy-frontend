import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Box, Card, Grid, Typography, CardContent, CardMedia, Link } from '@mui/material';
import Cloudinary from "./Cloudinary";

export default function Page3({ setInput }: { setInput: any }) {


  const [imagenes, setImagenes] = React.useState({
    array: []
  });

  let img: Array<string> = ["1", "2", "3", "4"]

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setInput((inputs: any) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value
      }
    })
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tarifas/Imágenes
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Tarifa por mayor por día "
            name="tarifa_por_mayor_dia"
            label="Tarifa por mayor por día "
            fullWidth
            autoComplete="given-name"
            variant="standard"
            color='secondary'
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Tarifa por menor por día"
            name="tarifa_por_menor_dia"
            label="Tarifa por menor por día"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            color='secondary'
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="Tarifa por casa rodante por día"
            name="tarifa_por_casa_rodante"
            label="Tarifa por casa rodante por día"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            color='secondary'
            onChange={handleChangeInput}
          />
        </Grid>
        {/* LUEGO VER EL TEMA DE LAS FECHAS */}
        {/*         <Grid item xs={12} sm={6}>
          <TextField
            id="Periodo abierto - poner calendario?"
            name="Periodo abierto - poner calendario?"
            label="Periodo abierto - poner calendario?"
            fullWidth
            variant="standard"
          />
        </Grid> */}
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
        {/* HABRIA QUE VER EL TEMA DE LATITUD Y LONGITUD */}




      </Grid>

    </React.Fragment>

  );

}


