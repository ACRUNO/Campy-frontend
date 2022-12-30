import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Grid, Typography, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Cloudinary from "./Cloudinary";
import { Inputs } from './CreateCamping';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getPeriodoAbierto } from '../../actions';


interface InputProps {
  setInput: React.Dispatch<React.SetStateAction<Inputs>>,
  input: Inputs
}

export default function Page3({ setInput, input }: InputProps) {

  const dispatch: AppDispatch = useDispatch();

  const allPeriodoAbierto: { id: number, descripcion_periodo: string }[] = useSelector((state: RootState) => state.allPeriodoAbierto)

  useEffect(() => {
    dispatch(getPeriodoAbierto())
  }, [dispatch]);


  const handlePeriodoAbierto = (e: SelectChangeEvent) => {
    e.preventDefault();
    let abiertoDesde: string = 'dsadas';
    let abiertoHasta: string = 'dsadas';
    let fecha: Date = new Date()
    let anio: number = fecha.getFullYear()
    let fechaInvierno: Date = new Date(anio, 9, 24)
    switch (Number(e.target.value)) {
      case 1:
        abiertoDesde = `${anio}/01/01`;
        abiertoHasta = `${anio}/12/31`;
        break;
      case 2:
        abiertoDesde = `${anio}/12/21`;
        abiertoHasta = `${anio + 1}/03/22`;
        break;
      case 3:
        if (fecha > fechaInvierno) {
          abiertoDesde = `${anio + 1}/06/21`
          abiertoHasta = `${anio + 1}/09/24`
        } else {
          abiertoDesde = `${anio}/06/21`;
          abiertoHasta = `${anio}/09/24`;
        }
        break;
      default:
        abiertoDesde = '';
        abiertoHasta = '';
        break;
    }

    setInput((inputs: Inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value,
        abierto_fecha_desde: abiertoDesde,
        abierto_fecha_hasta: abiertoHasta
      }
    })
  };

  console.log(input);


  let img: Array<string> = ["1", "2", "3", "4"]


  const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setInput((inputs: Inputs) => {
      return {
        ...inputs,
        [e.target.name]: Number(e.target.value)
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
            value={input.mayores}
            id="Tarifa por mayor por día"
            name="mayores"
            label="Tarifa por mayor por día"
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
            value={input.menores}
            id="Tarifa por menor por día"
            name="menores"
            label="Tarifa por menor por día"
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
            value={input.rodante}
            id="Tarifa por casa rodante por día"
            name="rodante"
            label="Tarifa casa rodante por día"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            color='secondary'
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ minWidth: "15rem" }}>
            <InputLabel id="demo-simple-select-helper-label" color="secondary">Periodo Abierto</InputLabel>
            <Select
              defaultValue=''
              value={`${input.AbiertoPeriodoId}`}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name='AbiertoPeriodoId'
              label="Período Abierto"
              color="secondary"
              onChange={handlePeriodoAbierto}>
              {allPeriodoAbierto?.map(m => (
                <MenuItem key={m.id} value={m.id}>{m.descripcion_periodo}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid container columnSpacing={2} justifyContent="center" sx={{ mt: 4, ml: 0 }}>
          {img.map(m => (
            <Grid item key={m} >
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

      </Grid>

    </React.Fragment>

  );

}


