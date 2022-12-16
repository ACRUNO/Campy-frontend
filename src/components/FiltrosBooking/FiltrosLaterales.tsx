import React from "react";
import { Box, Card, Grid, Typography, Slider, CardContent, CardMedia, Switch, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import { fontWeight } from "@mui/system";
import { ChangeEvent } from 'react'
import { filterCategoria } from '../../actions/index'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../store/index';

export default function FiltrosLaterales() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const max: number = 8000
    const min: number = 1500

    interface filterCamps {
        longitud: string,
        latitud: string,
        categoria: string,
        id_categoria: number,
        cantidad_estrellas: number,
        duchas: number,
        baños: number,
        mascotas: number,
        rodantes: number,
        proveduria: number,
        salon_sum: number,
        restaurant: number,
        vigilancia: number,
        pileta: number,
        estacionamiento: number,
        juegos_infantiles: number,
        maquinas_gimnasia: number,
        wifi: number,
        parcela_techada: number,
        parcela_agua_en_parcela: number,
        parcela_iluminacion_toma_corriente: number,
        parcela_superficie: number,
        descripcion_periodo: string,
        descripcion_periodo_agua: string,
    }

    const [filter, SetFilter] = React.useState<filterCamps>({
        longitud: "",
        latitud: "",
        categoria: "",
        id_categoria: 0,
        cantidad_estrellas: 0,
        duchas: 0,
        baños: 0,
        mascotas: 0,
        rodantes: 0,
        proveduria: 0,
        salon_sum: 0,
        restaurant: 0,
        vigilancia: 0,
        pileta: 0,
        estacionamiento: 0,
        juegos_infantiles: 0,
        maquinas_gimnasia: 0,
        wifi: 0,
        parcela_techada: 0,
        parcela_agua_en_parcela: 0,
        parcela_iluminacion_toma_corriente: 0,
        parcela_superficie: 0,
        descripcion_periodo: "",
        descripcion_periodo_agua: "",
    })



    const dispatch: AppDispatch = useDispatch()


    const [filterCat, SetFilterCat] = React.useState<number>(0)
    const [precio, setPrecio] = React.useState<number[]>([min, max]);


    const handleChange = (event: Event, newValue: number | number[]) => {
        setPrecio(newValue as number[]);
        console.log(newValue)
    };



    const handleCategoria = (e: ChangeEvent<HTMLInputElement>) => {
        SetFilterCat(Number(e.target.value))
        dispatch(filterCategoria(filterCat))
    }

    /*     const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
            //e.preventDefault();
            setInput((inputs: any) => {
              return {
                ...inputs,
                [e.target.name]: e.target.checked
              }
            })
          } */


    return (


        /* 
        
        const [] = React.useState[]([])
        
        
        useEffect */





        <Box sx={{ borderRadius: 1, backgroundColor: "white", height: "100%", pl: 3, mr: 4, pr: 4, pb: "2.5rem", boxShadow: "0 0 6px rgb(0 0 0 / 50%)" }}>
            {/* 
             */}
            < Typography variant="h6" sx={{ paddingTop: "1.5rem", fontSize: "800", mb: "0.5rem" }}> Filtros:</Typography >
            <hr />
            <Typography >Precio</Typography>

            <Typography>${precio[0]}- +${precio[1]}</Typography>

            <Slider
                sx={{ mt: "1rem", mb: "0.5rem" }}
                getAriaLabel={() => 'Temperature range'}
                value={precio}
                onChange={handleChange}
                valueLabelDisplay="off"
                color="secondary"
                min={min}
                max={max}
            />
            <hr></hr>
            <Typography >Puntuacion</Typography>

            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>

                <FormControlLabel
                    control={<Checkbox color="secondary" name="5" />}
                    label="5 estrellas"
                />
                <FormControlLabel
                    control={<Checkbox color="secondary" name="4" />}
                    label="4 estrellas"
                />
                <FormControlLabel
                    control={<Checkbox color="secondary" name="3" />}
                    label="3 estrellas"
                />
                <FormControlLabel
                    control={<Checkbox color="secondary" name="2" />}
                    label="2 estrellas"
                />
                <FormControlLabel
                    control={<Checkbox color="secondary" name="1" />}
                    label="1 estrellas"
                />
            </FormGroup>

            <hr></hr>
            <Typography >Categoría</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>
                <FormControlLabel
                    control={<Checkbox onChange={handleCategoria} value="1" color="secondary" name="id_categoria" />}
                    label="Lujo"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCategoria} value="2" color="secondary" name="id_categoria" />}
                    label="Primera"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCategoria} value="3" color="secondary" name="id_categoria" />}
                    label="Segunda"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCategoria} value="4" color="secondary" name="id_categoria" />}
                    label="Tercera"
                />

            </FormGroup>
            <hr></hr>
            <Typography>Tamaño de Parcela</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>
                <FormControlLabel
                    control={<Checkbox color="secondary" name="6" />}
                    label="6 metros o menos"
                />
                <FormControlLabel
                    control={<Checkbox color="secondary" name="7" />}
                    label="7 metros"
                />
                <FormControlLabel
                    control={<Checkbox color="secondary" name="8" />}
                    label="8 metros"
                />
                <FormControlLabel
                    control={<Checkbox color="secondary" name="9" />}
                    label="9 metros"
                />
                <FormControlLabel
                    control={<Checkbox color="secondary" name="10" />}
                    label="10 metros"
                />
                <FormControlLabel
                    control={<Checkbox color="secondary" name="11" />}
                    label="11 metros"
                />
                <FormControlLabel
                    control={<Checkbox color="secondary" name="12" />}
                    label="12 metros o mas"
                />
            </FormGroup>
            <hr></hr>
            <Typography>Comodidades de parecela</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>
                <FormControlLabel
                    control={<Checkbox color="secondary" name="parcela_techada" />}
                    label="Techada"
                />
                <FormControlLabel
                    control={<Checkbox color="secondary" name="parcela_agua_en_parcela" />}
                    label="Agua"
                />
                <FormControlLabel
                    control={<Checkbox color="secondary" name="parcela_iluminacion_toma_corriente" />}
                    label="Electricidad"
                />
            </FormGroup>
            <hr />
            <Typography>Servicios:</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>
                <FormControlLabel
                    sx={{ marginTop: "1rem" }}
                    name="mascotas"
                    control={<Switch color="secondary" />}
                    label="Mascotas"
                    labelPlacement="end" />
                <FormControlLabel
                    name="rodantes"
                    control={<Switch color="secondary" />}
                    label="Rodantes"
                    labelPlacement="end" />
                <FormControlLabel
                    name="proveduria"
                    control={<Switch color="secondary" />}
                    label="Proveeduria"
                    labelPlacement="end" />
                <FormControlLabel
                    name="restaurant"
                    control={<Switch color="secondary" />}
                    label="Restaurant"
                    labelPlacement="end" />
                <FormControlLabel
                    name="pileta"
                    control={<Switch color="secondary" />}
                    label="Pileta"
                    labelPlacement="end" />
                <FormControlLabel
                    name="vigilancia"
                    control={<Switch color="secondary" />}
                    label="Vigilancia"
                    labelPlacement="end" />
                <FormControlLabel
                    name="maquinas_gimnasio"
                    control={<Switch color="secondary" />}
                    label="Gimnasio"
                    labelPlacement="end" />
                <FormControlLabel
                    name="juegos_infantiles"
                    control={<Switch color='secondary' />}
                    label="Juegos Infantiles"
                    labelPlacement="end" />
                <FormControlLabel
                    name="salon_sum"
                    control={<Switch color="secondary" />}
                    label="Salon SUM"
                    labelPlacement="end" />
                <FormControlLabel
                    name="wifi"
                    control={<Switch color="secondary" />}
                    label="Wifi"
                    labelPlacement="end" />
            </FormGroup>
        </Box >

    )
}




interface filtrosBack {
    id_provincia: number
    id_localidad: number
    abierto_fecha_desde: Date
    abierto_fecha_hast: Date
    precio:[min:number,max:number],
    reviews:[],
    id_categoria:[],
    parcela_superficie:[],
    parcela_techada: number,
    parcela_agua_en_parcela: number,
    parcela_iluminacion_toma_corriente: number,
    mascotas: number,
    rodantes: number,
    proveduria: number,
    restaurant: number,
    pileta: number,
    vigilancia: number,
    maquinas_gimnasia: number,
    juegos_infantiles: number,
    salon_sum: number,
    wifi: number,
    estacionamiento: number,
}