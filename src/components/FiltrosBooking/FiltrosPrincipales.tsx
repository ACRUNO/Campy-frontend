import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from '../../store/index';
import { MouseEvent } from 'react';
import { Box, Select, MenuItem, InputLabel, FormControl, TextField, Button, Grid } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs, { Dayjs } from 'dayjs';
import { getCampingsProvincias, getCampingsLocalidades, filterLocalidad, filterProvincia, getProvincias, getLocalidades, getAllCampings, filtrosPrincipales, getFiltersCamping, } from '../../actions/index'
import { Campings } from "../../reducer/estados";
import { TodayTwoTone } from "@mui/icons-material";



export default function FiltrosPrincipales() {

    


    const dispatch: AppDispatch = useDispatch()

    const allProvincias: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allProvincias)
    const allLocalidades: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allLocalidades)
    const provincia: number = useSelector((state: RootState) => state.provincia)
    const localidad: number = useSelector((state: RootState) => state.localidad)
    const campings:Campings[] = useSelector((state: RootState) => state.campings)
    const filtrosBook: any = useSelector((state: RootState) => state.filtrosBooking)

    useEffect(() => {
        dispatch(getFiltersCamping(filtrosBook));
        dispatch(getProvincias())
    }, [dispatch, filtrosBook])


    const today:Dayjs = dayjs();

    const [ingreso, setIngreso] = React.useState<Dayjs | null>(null);
    const [egreso, setEgreso] = React.useState<Dayjs | null>(null);

    // console.log(ingreso?.toDate().toLocaleDateString().split('/').reverse().join('/'));
    
    console.log(filtrosBook);
    

    const handleChangeProvincia = (e: SelectChangeEvent) => {
        e.preventDefault();
        dispatch(filterProvincia(Number(e.target.value) as number))
        dispatch(getLocalidades(Number(e.target.value) as number))
    };

    const handleChangeLocalidad = (e: SelectChangeEvent) => {
        e.preventDefault();
        dispatch(filterLocalidad(Number(e.target.value) as number))

    };

    const handleSubmit = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        // if (provincia !== 0 && localidad === 0) dispatch(getCampingsProvincias());
        // if (provincia !== 0 && localidad !== 0) dispatch(getCampingsLocalidades());
        const fecha_ingreso: string | undefined = ingreso?.toDate().toLocaleDateString().split('/').reverse().join('/')
        const fecha_egreso: string | undefined = egreso?.toDate().toLocaleDateString().split('/').reverse().join('/')
        dispatch(filtrosPrincipales(provincia, localidad, fecha_ingreso, fecha_egreso))
        
    }
    


    return (
        <Box sx={{ pt: 1.25, pb: 1.25, mb: 2, boxShadow: "0 0 6px rgb(0 0 0 / 40%)"}}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Provincia</InputLabel>

                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="provincia"
                        color="secondary"
                        value={String(provincia)}
                        onChange={handleChangeProvincia}>
                        {allProvincias?.map((m, i) => (
                            <MenuItem value={m.id} key={i}>{m.nombre}</MenuItem>
                        ))}
                    </Select>

                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Localidad</InputLabel>

                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="localidad"
                        color="secondary"
                        value={String(localidad)}
                        onChange={handleChangeLocalidad}>
                        {allLocalidades?.map(m => (
                            <MenuItem value={m.id}>{m.nombre}</MenuItem>
                        ))}
                    </Select>

                </FormControl>
                <FormControl color="secondary" sx={{ m: 1, minWidth: 120 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker
                            label="Ingreso"
                            openTo="day"
                            views={['year', 'month', 'day']}
                            value={ingreso}
                            onChange={(newValue) => {
                                setIngreso(newValue);
                            }}
                            minDate={today}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl  color="secondary"sx={{ m: 1, minWidth: 120 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Egreso"
                            openTo="day"
                            views={['year', 'month', 'day']}
                            value={egreso}
                            onChange={(newValue) => {
                                setEgreso(newValue)
                            }}
                            minDate={ingreso}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Button
                        onClick={handleSubmit}
                        variant="contained" color="success"
                        sx={{ m: 0, height: 56 }}
                    >Buscar
                    </Button>
                </FormControl>
            </Grid>
        </Box>
    )
}