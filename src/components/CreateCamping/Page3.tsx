import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Page1() {
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
            name="Tarifa por mayor por día "
            label="Tarifa por mayor por día "
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Tarifa por menor por día"
            name="Tarifa por menor por día"
            label="Tarifa por menor por día"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Tarifa por casa rodante por día"
            name="Tarifa por casa rodante por día"
            label="Tarifa por casa rodante por día"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Periodo abierto - poner calendario?"
            name="Periodo abierto - poner calendario?"
            label="Periodo abierto - poner calendario?"
            fullWidth
            variant="standard"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="País"
            name="País"
            label="País"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Categoría"
            name="Categoría"
            label="Categoría"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Nombre de contacto"
            name="Nombre de contacto"
            label="Nombre de contacto"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Teléfono de contacto"
            name="Teléfono de contacto"
            label="Teléfono de contacto"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            id="IMAGENES - CONECTAR CLOUDINARY"
            name="IMAGENES - CONECTAR CLOUDINARY"
            label="IMAGENES - CONECTAR CLOUDINARY"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

