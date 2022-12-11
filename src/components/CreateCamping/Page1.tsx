import React from 'react';
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

export default function Page1() {

  const dispatch: AppDispatch = useDispatch()

  const allProvincias: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allProvincias)
  const allLocalidades: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allLocalidades)

  useEffect(() => {
    dispatch(getProvincias())
  }, [dispatch]);

  const [provincia, setProvincia] = useState<number>(0);
  const [localidad, setLocalidad] = useState<number>(0);
  const [categoria, setCategoria] = useState<string>('');

  const categorias : string[] = ['Lujo', 'Normal','Berreta'];

  const handleChangeProvincia = (e: SelectChangeEvent) => {
    e.preventDefault();
    setProvincia(Number(e.target.value) as number);
    dispatch(getLocalidades(Number(e.target.value) as number))
  };

  const handleChangeLocalidad = (e: SelectChangeEvent) => {
    e.preventDefault();
    setLocalidad(Number(e.target.value) as number);
  };

  const handleChangeCategoria = (e: SelectChangeEvent) => {
    e.preventDefault();
    setCategoria(e.target.value as string);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos generales
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Nombre"
            name="Nombre"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Teléfono"
            name="Teléfono"
            label="Teléfono"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Dirección"
            name="Dirección"
            label="Dirección"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
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
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
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
              disabled={provincia === 0}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="localidad"
              color="secondary"
              onChange={handleChangeLocalidad}>
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
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="localidad"
              color="secondary"
              onChange={handleChangeCategoria}>
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
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            rows={6}
            id="Descripción"
            name="Descripción"
            label="Descripción"
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

