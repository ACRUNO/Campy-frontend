import React, { ChangeEvent, ChangeEventHandler } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from '../../store/index';
import { getProvincias, getLocalidades, getCampingsProvincias, getCampingsLocalidades } from "../../actions";
import { SelectChangeEvent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { setUncaughtExceptionCaptureCallback } from 'process';
import { Inputs } from './CreateCamping';

export default function Page1({ setInput }: { setInput: React.Dispatch<React.SetStateAction<Inputs>> }) {

  const dispatch: AppDispatch = useDispatch()

  const allProvincias: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allProvincias)
  const allLocalidades: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allLocalidades)

  useEffect(() => {
    dispatch(getProvincias())
  }, [dispatch]);

  const [provincia, setProvincia] = useState<number>(0);


  const categorias: number[] = [1, 2, 3];
  

  const handleChangeProvincia = (e: SelectChangeEvent) => {
    e.preventDefault();
    setProvincia(Number(e.target.value) as number);
    dispatch(getLocalidades(Number(e.target.value) as number))
    setInput((inputs: Inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value
      }
    })
  };

  const handleChangeSelect = (e: SelectChangeEvent) => {
    e.preventDefault();
    setInput((inputs: Inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value
      }
    })
  };


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
        Datos generales
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="nombre_camping"
            label="Nombre Camping"
            name="nombre_camping"
            autoComplete="nombre_camping"
            autoFocus
            color='secondary'
            variant="standard"
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin='normal'
            required
            fullWidth
            id="Teléfono"
            label="Teléfono"
            name="telefono"
            autoComplete="family-name"
            color='secondary'
            variant="standard"
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="Dirección"
            label="Dirección"
            name="direccion"
            autoComplete="shipping address-line1"
            color='secondary'
            variant="standard"
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/*           <TextField
            required
            id="Localidad"
            name="Localidad"
            label="Localidad"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          /> */}
          <FormControl sx={{ m: 1, minWidth: "12rem" }}>
            <InputLabel id="demo-simple-select-helper-label" color="secondary">Provincia</InputLabel>
            <Select
              defaultValue=''
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name='provincia'
              label="provincia"
              color="secondary"
              onChange={handleChangeProvincia}>
              {allProvincias?.map(m => (
                <MenuItem value={m.id}>{m.nombre}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/*           <TextField
            id="Provincia"
            name="Provincia"
            label="Provincia"
            fullWidth
            variant="standard"
          /> */}
          <FormControl sx={{ m: 1, minWidth: "12rem" }}>
            <InputLabel id="demo-simple-select-helper-label" color="secondary">Localidad</InputLabel>
            <Select
              defaultValue=''
              disabled={provincia === 0}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name='LocalidadeId'
              label="localidad"
              color="secondary"
              onChange={handleChangeSelect}>
              {/* <MenuItem value=""><em>None</em></MenuItem> */}
              {allLocalidades?.map(m => (
                <MenuItem value={m.id}>{m.nombre}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {//DESPUES AGREGAMOS EL SELECT PARA PAISES
        }
        {/*         <Grid item xs={12} sm={6}>
          <TextField
            required
            id="País"
            name="País"
            label="País"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12} sm={12}>
          {/*           <TextField
            required
            id="Categoría"
            name="Categoría"
            label="Categoría"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          /> */}
          <FormControl sx={{ m: 1, minWidth: "12rem" }}>
            <InputLabel id="demo-simple-select-helper-label" color="secondary">Categoria</InputLabel>
            <Select
              defaultValue=''
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name='CategoriaCampingId'
              label="categoria"
              color="secondary"
              onChange={handleChangeSelect}>
              {/* <MenuItem value=""><em>None</em></MenuItem> */}
              {categorias?.map(m => (
                <MenuItem value={m}>{m}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Nombre de contacto"
            name="contacto_nombre"
            label="Nombre de contacto"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            color='secondary'
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Teléfono de contacto"
            name="contacto_tel"
            label="Teléfono de contacto"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            color='secondary'
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            rows={6}
            id="Descripción"
            name="descripcion_camping"
            label="Descripción"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            color='secondary'
            onChange={handleChangeInput}
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

