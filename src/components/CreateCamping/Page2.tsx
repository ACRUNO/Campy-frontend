import React, { ChangeEvent, MouseEventHandler } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

export default function Page2({ setInput }: { setInput: any }) {



  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    //e.preventDefault();
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

  const handleChangeSelect = (e: SelectChangeEvent) => {
    e.preventDefault();
    setInput((inputs: any) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value
      }
    })
  };

  const periodo_agua: number[] = [1, 2, 3];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Comodidades en parcela
      </Typography>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="techada" onChange={handleCheckBox} />}
          label="Techada"
        />
        <FormControlLabel
          control={<Checkbox color="secondary" name="iluminacion_toma_corriente" onChange={handleCheckBox} />}
          label="Toma corriente"
        />
        <FormControlLabel
          control={<Checkbox color="secondary" name="agua_en_parcela" onChange={handleCheckBox} />}
          label="Agua en parcela"
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
            color='secondary'
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
            name="baños"
            label="Cantidad de baños"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            color='secondary'
            onChange={handleChangeInput}
          />
        </Grid>
      
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="Cantidad de duchas"
          name="duchas"
          label="Cantidad de duchas"
          fullWidth
          autoComplete="shipping address-level2"
          variant="standard"
          color='secondary'
          onChange={handleChangeInput}
        />
      </Grid>
      <Grid item xs={12} >
{/*         <TextField
          id="Período de agua caliente"
          name="periodo_agua"
          label="Período de agua caliente"
          fullWidth
          autoComplete="shipping address-line2"
          variant="standard"
          onChange={handleChangeInput}
        /> */}
        <FormControl sx={{ m: 1, minWidth: "15rem" }}>
            <InputLabel id="demo-simple-select-helper-label" color="secondary">Periodo de agua caliente</InputLabel>
            <Select
              defaultValue=''
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name='PeriodoAguaCalienteId'
              label="Período de agua caliente"
              color="secondary"
              onChange={handleChangeSelect}>
              {/* <MenuItem value=""><em>None</em></MenuItem> */}
              {periodo_agua?.map(m => (
                <MenuItem value={m}>{m}</MenuItem>
              ))}
            </Select>
          </FormControl>
      </Grid>
      </Grid>

      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="mascotas" onChange={handleCheckBox} />}
          label="Mascotas"
        />
        <FormControlLabel
          control={<Checkbox color="secondary" name="rodantes" onChange={handleCheckBox} />}
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
          control={<Checkbox color="secondary" name="restaurant" onChange={handleCheckBox} />}
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
          control={<Checkbox color="secondary" name="maquinas_gimnasia" onChange={handleCheckBox} />}
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

