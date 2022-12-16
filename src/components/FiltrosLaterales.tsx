import React, { useEffect } from "react";
import { Box, Card, Grid, Typography, Slider, CardContent, CardMedia, Switch, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import { fontWeight } from "@mui/system";
import { ChangeEvent } from 'react'
import { filterCategoria, getAllCategorias } from '../actions/index'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../store/index';


export default function FiltrosLaterales() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const dispatch: AppDispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllCategorias())
    }, [dispatch])

    interface filtrosBack {
        id_provincia: number,
        id_localidad: number,
        abierto_fecha_desde: "",
        abierto_fecha_hast: "",
        precio: number[],
        reviews: number[],
        id_categoria: [],
        parcela_superficie: [],
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

    const [filters, setFilters] = React.useState<filtrosBack>({
        id_provincia: 0,
        id_localidad: 0,
        abierto_fecha_desde: "",
        abierto_fecha_hast: "",
        precio: [0, 0],
        reviews: [],
        id_categoria: [],
        parcela_superficie: [],
        parcela_techada: 0,
        parcela_agua_en_parcela: 0,
        parcela_iluminacion_toma_corriente: 0,
        mascotas: 0,
        rodantes: 0,
        proveduria: 0,
        restaurant: 0,
        pileta: 0,
        vigilancia: 0,
        maquinas_gimnasia: 0,
        juegos_infantiles: 0,
        salon_sum: 0,
        wifi: 0,
        estacionamiento: 0,
    })



    const min: number = 0
    const max: number = 8000

    const [precioLocal, setPrecioLocal] = React.useState<number[]>([min, max])




    const allCategorias: { id: number, categoria: string, cantidad_estrellas: number, descripcion_categoria: string }[] = useSelector((state: RootState) => state.allCategorias)





    const handlePrecio = (e: Event, newValue: number | number[]) => {
        setPrecioLocal(newValue as number[]);
        setFilters((filters: filtrosBack) => {
            return {
                ...filters,
                precio: precioLocal
            }
        })
    }



    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {

        setFilters((filters: any) => {
            if (!filters[e.target.name].includes(Number(e.target.value))) {
                return {
                    ...filters,
                    [e.target.name]: [...filters[e.target.name], Number(e.target.value)]
                }
            } else {
                return {
                    ...filters,
                    [e.target.name]: filters[e.target.name].filter((r: number) => r !== Number(e.target.value))
                }
            }
        })


    }

    




    const handleBoolean = (e: ChangeEvent<HTMLInputElement>) => {
        setFilters((filters: any) => {
            return{
                ...filters,
                [e.target.name]: e.target.checked
            }
        })
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


        <Box sx={{ borderRadius: 1, backgroundColor: "white", height: "100%", pl: 3, mr: 4, pr: 4, pb: "2.5rem", boxShadow: "0 0 6px rgb(0 0 0 / 50%)" }}>
            < Typography variant="h6" sx={{ paddingTop: "1.5rem", fontSize: "800", mb: "0.5rem" }}> Filtros:</Typography >
            <hr />
            <Typography >Precio</Typography>

            <Typography>${precioLocal[0]}- +${precioLocal[1]}</Typography>

            <Slider
                sx={{ mt: "1rem", mb: "0.5rem" }}
                getAriaLabel={() => 'Temperature range'}
                value={precioLocal}
                onChange={handlePrecio}
                valueLabelDisplay="off"
                color="secondary"
                min={min}
                max={max}
            // getAriaValueText={valuetext}
            />




            <hr></hr>
            <Typography >Reviews</Typography>

            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>

                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="5" name="reviews" />}
                    label="5 estrellas"

                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="4" name="reviews" />}
                    label="4 estrellas"

                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="3" name="reviews" />}
                    label="3 estrellas"

                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="2" name="reviews" />}
                    label="2 estrellas"

                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="1" name="reviews" />}
                    label="1 estrellas"

                />
            </FormGroup>





            <hr></hr>
            <Typography >Categoría</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>

                {
                    allCategorias.map(c => {
                        return (
                            <FormControlLabel
                                control={<Checkbox onChange={handleCheck} value={c.id} color="secondary" name="id_categoria" />}
                                label={c.categoria}
                            />
                        )
                    })
                }


            </FormGroup>
            <hr></hr>
            <Typography>Tamaño de Parcela</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>

                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="5" name="parcela_superficie" />}
                    label="5 metros"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="10" name="parcela_superficie" />}
                    label="10 metros"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="20" name="parcela_superficie" />}
                    label="20 metros"
                />
            </FormGroup>


            <hr></hr>
            <Typography>Comodidades de parecela</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>
                <FormControlLabel
                    control={<Checkbox onChange={handleBoolean} color="secondary" name="parcela_techada" />}
                    label="Techada"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleBoolean} color="secondary" name="parcela_agua_en_parcela" />}
                    label="Agua"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleBoolean} color="secondary" name="parcela_iluminacion_toma_corriente" />}
                    label="Electricidad"
                />
            </FormGroup>




            <hr />
            <Typography>Servicios:</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>
                <FormControlLabel
                    sx={{ marginTop: "1rem" }}
                    name="mascotas"
                    control={<Switch  onChange={handleBoolean} color="secondary" />}
                    label="Mascotas"
                    labelPlacement="end" />
                <FormControlLabel
                    name="rodantes"
                    control={<Switch onChange={handleBoolean} color="secondary" />}
                    label="Rodantes"
                    labelPlacement="end" />
                <FormControlLabel
                    name="proveduria"
                    control={<Switch onChange={handleBoolean} color="secondary" />}
                    label="Proveeduria"
                    labelPlacement="end" />
                <FormControlLabel
                    name="restaurant"
                    control={<Switch onChange={handleBoolean}  color="secondary" />}
                    label="Restaurant"
                    labelPlacement="end" />
                <FormControlLabel
                    name="pileta"
                    control={<Switch onChange={handleBoolean} color="secondary" />}
                    label="Pileta"
                    labelPlacement="end" />
                <FormControlLabel
                    name="vigilancia"
                    control={<Switch onChange={handleBoolean} color="secondary" />}
                    label="Vigilancia"
                    labelPlacement="end" />
                <FormControlLabel
                    name="maquinas_gimnasio"
                    control={<Switch onChange={handleBoolean} color="secondary" />}
                    label="Gimnasio"
                    labelPlacement="end" />
                <FormControlLabel
                    name="juegos_infantiles"
                    control={<Switch onChange={handleBoolean} color='secondary' />}
                    label="Juegos Infantiles"
                    labelPlacement="end" />
                <FormControlLabel
                    name="salon_sum"
                    control={<Switch onChange={handleBoolean} color="secondary" />}
                    label="Salon SUM"
                    labelPlacement="end" />
                <FormControlLabel
                    name="wifi"
                    control={<Switch onChange={handleBoolean} color="secondary" />}
                    label="Wifi"
                    labelPlacement="end" />
            </FormGroup>
        </Box >

    )
}




/* interface filtrosBack {
    id_provincia: number
    id_localidad: number
    abierto_fecha_desde: Date
    abierto_fecha_hast: Date
    precio: [min: number, max: number],
    reviews: [],
    id_categoria: [],
    parcela_superficie: [],
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
} */