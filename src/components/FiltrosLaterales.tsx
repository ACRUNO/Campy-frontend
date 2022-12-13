import React from "react";
import { Box, Card, Grid, Typography, Slider, CardContent, CardMedia, Switch, FormControlLabel } from '@mui/material';
import { fontWeight } from "@mui/system";

export default function FiltrosLaterales() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const [precio, setPrecio] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setPrecio(newValue as number[]);
    };
    return (

        
        <Box sx={{ borderRadius: 1, backgroundColor: "white", height: "100%", pl: 3, mr: 4, pr: 4, pb: "2.5rem", boxShadow: "0 0 6px rgb(0 0 0 / 50%)" }}>
            <Box sx={{width:"100%",height:"2rem",backgroundColor: "white",borderRadius:1}}/>
            <Box sx={{width:"100%",height:"3rem",backgroundColor: " #16161F",borderRadius:1,pb:"12%"}}>
            <Typography align="center" variant="h6" sx={{ paddingTop: "1.5rem", fontSize: "800",color:"white"}}>En desarrollo</Typography>
            </Box>
            <Typography variant="h6" sx={{ paddingTop: "1.5rem", fontSize: "800" }}>Filtrar por:</Typography>
            <Typography sx={{ marginTop: "1rem" }} >Precio</Typography>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={precio}
                onChange={handleChange}
                valueLabelDisplay="auto"
                color="secondary"
            // getAriaValueText={valuetext}
            />
            <Typography >Puntuacion</Typography>
            <Typography >Categoría</Typography>
            <Typography >Baños</Typography>
            <Typography >Duchas</Typography>
            <Typography >Agua caliente</Typography>
            <Typography >Tamaño de Parcela</Typography>
            <Typography variant="h6" sx={{ marginTop: "1rem" }} >Otros Filtros:</Typography>
            <FormControlLabel
                sx={{ marginTop: "1rem" }}
                value="Mascotas"
                control={<Switch color="secondary" />}
                label="Mascotas"
                labelPlacement="end" />
            <FormControlLabel
                value="Rodantes"
                control={<Switch color="secondary" />}
                label="Rodantes"
                labelPlacement="end" />
            <FormControlLabel
                value="start"
                control={<Switch color="secondary" />}
                label="Proveeduria"
                labelPlacement="end" />
            <FormControlLabel
                value="Restaurant"
                control={<Switch color="secondary" />}
                label="Restaurant"
                labelPlacement="end" />
            <FormControlLabel
                value="Pileta"
                control={<Switch color="secondary" />}
                label="Pileta"
                labelPlacement="end" />
            <FormControlLabel
                value="Vigilancia"
                control={<Switch color="secondary" />}
                label="Vigilancia"
                labelPlacement="end" />
            <FormControlLabel
                value="Gimnasio"
                control={<Switch color="secondary" />}
                label="Gimnasio"
                labelPlacement="end" />
            <FormControlLabel
                value="Juegos Infantiles"
                control={<Switch color='secondary' />}
                label="Juegos Infantiles"
                labelPlacement="end" />
            <FormControlLabel
                value="Salon SUM"
                control={<Switch color="secondary" />}
                label="Salon SUM"
                labelPlacement="end" />
            <FormControlLabel
                value="Wifi"
                control={<Switch color="secondary" />}
                label="Wifi"
                labelPlacement="end" />


        </Box>

    )
}