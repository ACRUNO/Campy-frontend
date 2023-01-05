import React, { ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from '../../store/index';
import { getProvincias, getAllCategorias, getAllLocalidades } from "../../actions";
import { SelectChangeEvent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Inputs } from '../../reducer/estados';
import MapCreate from './CreateMap';

interface InputProps {
  setInput: React.Dispatch<React.SetStateAction<Inputs>>,
  input: Inputs
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: '85%'
    }
  }
}

export default function Page1({ setInput, input }: InputProps) {

  const dispatch: AppDispatch = useDispatch()

  const allProvincias: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allProvincias)
  const allLocalidades: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allLocalidades)
  const allCategorias: { id: number, categoria: string, cantidad_estrellas: number, descripcion_categoria: string }[] = useSelector((state: RootState) => state.allCategorias)

  useEffect(() => {
    if (!allProvincias.length) dispatch(getProvincias())
    if (!allCategorias.length) dispatch(getAllCategorias())
  }, [dispatch]);

  const [provincia, setProvincia] = useState<number>(input.ProvinciaId || 0);


  const handleChangeProvincia = (e: SelectChangeEvent) => {
    e.preventDefault();
    setProvincia(Number(e.target.value) as number);

    setInput((inputs: Inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value
      }
    })
  };

  const handleChangeCategoria = (e: SelectChangeEvent) => {
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

  useEffect(() => {
    if (provincia) dispatch(getAllLocalidades(provincia))
  }, [provincia])

  if (!allProvincias.length || !allCategorias.length || (provincia && !allLocalidades.length))
    return <div>cargando</div>

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
            value={input.nombre_camping}
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
            value={input.telefono}
            id="Teléfono"
            label="Teléfono"
            name="telefono"
            autoComplete="family-name"
            color='secondary'
            variant="standard"
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item justifyContent="center" alignContent="center" sx={{ mt: 1, mb: 1 }}>
          <MapCreate setInput={setInput}
            input={input} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, minWidth: "12rem" }}>
            <InputLabel id="demo-simple-select-helper-label" color="secondary">Provincia</InputLabel>
            <Select
              defaultValue=""
              value={`${input.ProvinciaId || ''}`}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name='ProvinciaId'
              label="provincia"
              color="secondary"
              MenuProps={MenuProps}
              onChange={handleChangeProvincia}>
              {allProvincias?.map((m, i) => (
                <MenuItem value={m.id} key={i + 1}>{m.nombre}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, minWidth: "12rem" }}>
            <InputLabel id="demo-simple-select-helper-label" color="secondary">Localidad</InputLabel>
            <Select
              defaultValue=''
              value={`${input.LocalidadeId || ''}`}
              disabled={provincia === 0}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name='LocalidadeId'
              label="localidad"
              color="secondary"
              MenuProps={MenuProps}
              onChange={handleChangeSelect}>
              {allLocalidades?.map((m, i) => (
                <MenuItem value={m.id} key={i + 1}>{m.nombre}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl sx={{ m: 1, minWidth: "12rem" }}>
            <InputLabel id="demo-simple-select-helper-label" color="secondary">Categoria</InputLabel>
            <Select
              defaultValue=''
              value={`${input.CategoriaCampingId || ''}`}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name='CategoriaCampingId'
              label="categoria"
              color="secondary"
              MenuProps={MenuProps}
              onChange={handleChangeCategoria}>
              {allCategorias?.map(m => (
                <MenuItem value={m.id} key={m.id}>{m.categoria}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={input.contacto_nombre}
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
            value={input.contacto_tel}
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
            value={input.descripcion_camping}
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
      </Grid>
    </React.Fragment>
  );
}

