import React from "react";
import { Box, Card, Grid, Typography, Slider, CardContent, CardMedia, Switch, FormControlLabel } from '@mui/material';

export default function FiltrosLaterales() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const [precio, setPrecio] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setPrecio(newValue as number[]);
    };
    return (

        <Box sx={{ backgroundColor: "#5F8D4E", height: "100%", pl: 3, mr: 4, pr: 4 ,boxShadow:"0 0 6px rgb(0 0 0 / 40%)"}}>
            <Box sx={{ width: "10rem", height: "1rem", backgroundColor: "#5F8D4E"}}>
            </Box>
            <Box sx={{ width: "15rem", height: "4rem", backgroundColor: "white",mb:"2rem"}}>
            <Typography align="center" variant="h5" > Funcionalidad en desarrollo </Typography>
            </Box>
            <Typography>Filtrar por:</Typography>
            <Typography>Precio</Typography>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={precio}
                onChange={handleChange}
                valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
            />
            <Typography >Puntuacion</Typography>
            <Typography >Categoría</Typography>
            <Typography >Baños</Typography>
            <Typography >Duchas</Typography>
            <Typography >Agua caliente</Typography>
            <Typography >Tamaño de Parcela</Typography>
            <Typography >Otros Filtros</Typography>
            <FormControlLabel
                value="Mascotas"
                control={<Switch color="primary" />}
                label="Mascotas"
                labelPlacement="end" />
            <FormControlLabel
                value="Rodantes"
                control={<Switch color="primary" />}
                label="Rodantes"
                labelPlacement="end" />
            <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                label="Proveeduria"
                labelPlacement="end" />
            <FormControlLabel
                value="Restaurant"
                control={<Switch color="primary" />}
                label="Restaurant"
                labelPlacement="end" />
            <FormControlLabel
                value="Pileta"
                control={<Switch color="primary" />}
                label="Pileta"
                labelPlacement="end" />
            <FormControlLabel
                value="Vigilancia"
                control={<Switch color="primary" />}
                label="Vigilancia"
                labelPlacement="end" />
            <FormControlLabel
                value="Gimnasio"
                control={<Switch color="primary" />}
                label="Gimnasio"
                labelPlacement="end" />
            <FormControlLabel
                value="Juegos Infantiles"
                control={<Switch color='primary' />}
                label="Juegos Infantiles"
                labelPlacement="end" />
            <FormControlLabel
                value="Salon SUM"
                control={<Switch color="primary" />}
                label="Salon SUM"
                labelPlacement="end" />
            <FormControlLabel
                value="Wifi"
                control={<Switch color="primary" />}
                label="Wifi"
                labelPlacement="end" />


        </Box>

    )
}