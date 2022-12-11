import React, { ChangeEvent, MouseEventHandler } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { SelectChangeEvent } from '@mui/material';

export default function Page2({ setInput }: { setInput: any }) {



  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput((inputs: any) => {
      return {
        ...inputs,
        [e.target.name]: e.target.checked
      }
    })
  }

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
        Comodidades en parcela
      </Typography>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="techado" onChange={handleCheckBox}/>}
            label="Techada"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="toma_corriente" onChange={handleCheckBox} />}
            label="Toma corriente"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="agua" onChange={handleCheckBox} />}
            label="Agua"
          />
        </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Superficie m2"
            name="superficie"
            label="Superficie m2"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChangeInput}
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
            name="cant_banios"
            label="Cantidad de baños"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleChangeInput}
          />
        </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Cantidad de duchas"
            name="cant_duchas"
            label="Cantidad de duchas"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Período de agua caliente"
            name="periodo_agua"
            label="Período de agua caliente"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={handleChangeInput}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="mascotas" onChange={handleCheckBox} />}
            label="Mascotas"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="casa_rodante" onChange={handleCheckBox} />}
            label="Casa Rodante"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="proveduria" onChange={handleCheckBox} />}
            label="Proveeduría"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="salon_sum" onChange={handleCheckBox} />}
            label="Salón SUM"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="retaurant" onChange={handleCheckBox} />}
            label="Restaurant"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="vigilancia" onChange={handleCheckBox} />}
            label="Vigilancia"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="pileta" onChange={handleCheckBox} />}
            label="Pileta"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="estacionamiento" onChange={handleCheckBox} />}
            label="Estacionamiento"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="juegos_infantiles" onChange={handleCheckBox} />}
            label="Juegos Infantiles"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="gimnasio" onChange={handleCheckBox} />}
            label="Gimnasio"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="wifi" onChange={handleCheckBox} />}
            label="Wifi"
          />

        </Grid>
    </React.Fragment>
  );
}

