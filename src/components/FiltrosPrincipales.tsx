import React from "react";
import { Box, Select, MenuItem, InputLabel, FormControl, TextField, Button, Grid } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Dayjs } from 'dayjs';

export default function FiltrosPrincipales() {

    const [provincia, setProvincia] = React.useState('');
    const [localidad, setLocalidad] = React.useState('');
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [value2, setValue2] = React.useState<Dayjs | null>(null);


    let provincias: Array<string> = ["Buenos Aires", "Salta", "Jujuy", "Tucumán", "Chaco", "Formosa", "Santiago del Estero", "Córdoba"]
    let localidades: Array<string> = ["Mar del Plata", "Chascomus", "San Pedro", "San Antonio de Areco"]


    const handleChangeProvincia = (event: any) => {
        setProvincia(event.target.value);
    };

    const handleChangeLocalidad = (event: any) => {
        setLocalidad(event.target.value);
    };


    return (
        <Box sx={{ mt: 5, backgroundColor: "#E5D9B6" }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Provincia</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={provincia}
                        label="provincia"
                        color="secondary"
                        onChange={handleChangeProvincia}>
                        {provincias.map(m => (
                            <MenuItem value={m}>{m}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Localidad</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={localidad}
                        label="localidad"
                        color="secondary"
                        onChange={handleChangeLocalidad}>
                        {/* <MenuItem value=""><em>None</em></MenuItem> */}
                        {localidades.map(m => (
                            <MenuItem value={m}>{m}</MenuItem>
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
                    <Button variant="contained" color="success" sx={{ m: 0, height: 56 }}>Buscar</Button>
                </FormControl>
            </Grid>



        </Box>
    )
}