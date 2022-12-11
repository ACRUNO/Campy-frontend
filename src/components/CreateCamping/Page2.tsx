import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Page2() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Comodidades en parcela
      </Typography>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Techada"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Toma corriente"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Agua"
          />
        </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Superficie m2"
            name="Superficie m2"
            label="Superficie m2"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
        Otras comodidades
        </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Cantidad de baños"
            name="Cantidad de baños"
            label="Cantidad de baños"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Cantidad de duchas"
            name="Cantidad de duchas"
            label="Cantidad de duchas"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Período de agua caliente"
            name="Período de agua caliente"
            label="Período de agua caliente"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Mascotas"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Casa Rodante"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Proveeduría"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Salón SUM"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Restaurant"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Vigilancia"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Pileta"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Estacionamiento"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Juegos Infantiles"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Gimnasio"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Wifi"
          />

        </Grid>
    </React.Fragment>
  );
}

