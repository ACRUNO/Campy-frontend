import { Grid, Typography, TextField, Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import * as React from 'react';


let img: Array<string> = ["1", "2", "3", "4"]

export default function CrearPost() {
    return(
        <React.Fragment>
        <Grid container spacing={2} display="flex" flexDirection="column" alignItems="stretch" sx={{mt:2, pr:6, pl:6}} >
              <Grid item xs={12} >
                <TextField
                color="secondary"
                  autoComplete="given-name"
                  name="Titulo"
                  required
                  fullWidth
                  id="Titulo"
                  label="Título"
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
              <Grid alignContent="center">
              <Button color="secondary" variant='contained'  sx={{mt:2}}>Crear Post</Button>
              </Grid>
              </React.Fragment>
        
    )
}