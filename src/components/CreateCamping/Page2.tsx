import React, { ChangeEvent, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Inputs } from './CreateCamping';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getPeriodoAgua } from '../../actions';

interface InputProps {
  setInput: React.Dispatch<React.SetStateAction<Inputs>>,
  input: Inputs
}

export default function Page2({ setInput, input }: InputProps) {

  const dispatch: AppDispatch = useDispatch();

  const allPeriodoAgua: { id: number, descripcion_periodo_agua: string }[] = useSelector((state: RootState) => state.allPeriodoAgua)

  useEffect(() => {
    dispatch(getPeriodoAgua())
  }, [dispatch]);


  const handlePeriodoAgua = (e: SelectChangeEvent) => {
    e.preventDefault();
    setInput((inputs: Inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value
      }
    })
  };


  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((inputs: Inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.checked
      }
    })
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setInput((inputs: Inputs) => {
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
          control={<Checkbox checked={input.techada} color="secondary" name="techada" onChange={handleCheckBox} />}
          label="Techada"
        />
        <FormControlLabel
          control={<Checkbox checked={input.iluminacion_toma_corriente} color="secondary" name="iluminacion_toma_corriente" onChange={handleCheckBox} />}
          label="Toma corriente"
        />
        <FormControlLabel
          control={<Checkbox checked={input.agua_en_parcela} color="secondary" name="agua_en_parcela" onChange={handleCheckBox} />}
          label="Agua en parcela"
        />
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={input.superficie}
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
            value={input.baños}
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
            value={input.duchas}
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
          <FormControl sx={{ m: 1, minWidth: "15rem" }}>
            <InputLabel id="demo-simple-select-helper-label" color="secondary">Periodo de agua caliente</InputLabel>
            <Select
              defaultValue=''
              value={`${input.PeriodoAguaCalienteId}`}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name='PeriodoAguaCalienteId'
              label="Período de agua caliente"
              color="secondary"
              onChange={handlePeriodoAgua}>
              {allPeriodoAgua?.map(m => (
                <MenuItem value={m.id}>{m.descripcion_periodo_agua}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox checked={input.mascotas} color="secondary" name="mascotas" onChange={handleCheckBox} />}
          label="Mascotas"
        />
        <FormControlLabel
          control={<Checkbox checked={input.rodantes} color="secondary" name="rodantes" onChange={handleCheckBox} />}
          label="Casa Rodante"
        />
        <FormControlLabel
          control={<Checkbox checked={input.proveduria} color="secondary" name="proveduria" onChange={handleCheckBox} />}
          label="Proveeduría"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox checked={input.salon_sum} color="secondary" name="salon_sum" onChange={handleCheckBox} />}
          label="Salón SUM"
        />
        <FormControlLabel
          control={<Checkbox checked={input.restaurant} color="secondary" name="restaurant" onChange={handleCheckBox} />}
          label="Restaurant"
        />
        <FormControlLabel
          control={<Checkbox checked={input.vigilancia} color="secondary" name="vigilancia" onChange={handleCheckBox} />}
          label="Vigilancia"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox checked={input.pileta} color="secondary" name="pileta" onChange={handleCheckBox} />}
          label="Pileta"
        />
        <FormControlLabel
          control={<Checkbox checked={input.estacionamiento} color="secondary" name="estacionamiento" onChange={handleCheckBox} />}
          label="Estacionamiento"
        />
        <FormControlLabel
          control={<Checkbox checked={input.juegos_infantiles} color="secondary" name="juegos_infantiles" onChange={handleCheckBox} />}
          label="Juegos Infantiles"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox checked={input.maquinas_gimnasia} color="secondary" name="maquinas_gimnasia" onChange={handleCheckBox} />}
          label="Gimnasio"
        />
        <FormControlLabel
          control={<Checkbox checked={input.wifi} color="secondary" name="wifi" onChange={handleCheckBox} />}
          label="Wifi"
        />

      </Grid>
    </React.Fragment>
  );
}

