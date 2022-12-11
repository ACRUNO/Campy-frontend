import React from "react";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from '../store/index';
import { getProvincias, getLocalidades } from "../actions";
import { MouseEvent } from 'react';
import { Box, Select, MenuItem, InputLabel, FormControl, TextField, Button, Grid } from '@mui/material';
import { SelectChangeEvent} from '@mui/material/Select';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Dayjs } from 'dayjs';
import{getCampingsProvincias,getCampingsLocalidades} from '../actions/index'


export default function FiltrosPrincipales() {

    const dispatch: AppDispatch = useDispatch()

    const allProvincias: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allProvincias)
    const allLocalidades: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allLocalidades)


    useEffect(() => {
        dispatch(getProvincias())
    }, [dispatch]);


    const [provincia, setProvincia] = useState<number>(0);
    const [localidad, setLocalidad] = useState<number>(0);
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [value2, setValue2] = React.useState<Dayjs | null>(null);



    const handleChangeProvincia = (e: SelectChangeEvent) => {
        e.preventDefault();
        setProvincia(Number(e.target.value) as number);
        dispatch(getLocalidades(Number(e.target.value) as number))
    };

    const handleChangeLocalidad = (e: SelectChangeEvent) => {
        e.preventDefault();
        setLocalidad(Number(e.target.value) as number);
    };

    const handleSubmit=(e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if(provincia !== 0 && localidad === 0) dispatch(getCampingsProvincias(provincia))
        if(provincia !== 0 && localidad !== 0) dispatch(getCampingsLocalidades(localidad))
    }

    return (
        <Box sx={{ pt:1.25, pb:1.25 ,mb:2, boxShadow:"0 0 6px rgb(0 0 0 / 40%)"}}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
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
                <FormControl sx={{ m: 1, minWidth: 120 }}>
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
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker
                            label="Ingreso"
                            openTo="day"
                            views={['year', 'month', 'day']}
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Egreso"
                            openTo="day"
                            views={['year', 'month', 'day']}
                            value={value2}
                            onChange={(newValue) => {
                                setValue2(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Button 
                    onClick={handleSubmit}
                    variant="contained" color="success" 
                    sx={{ m: 0, height: 56 }} 
                    disabled={provincia === 0}
                    >Buscar
                    </Button>
                </FormControl>
            </Grid>
        </Box>
    )
}