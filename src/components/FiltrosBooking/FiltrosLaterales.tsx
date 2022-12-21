import React, { useEffect } from "react";
import { Box, Card, Grid, Typography, Slider, CardContent, CardMedia, Switch, FormControlLabel, Checkbox, FormGroup,RadioGroup,Radio, Button } from '@mui/material';
import { fontWeight } from "@mui/system";
import { ChangeEvent, MouseEvent } from 'react'
import { filterCategoria, FilterParcela, filtrosBooleanos, filtrosCombinados, filtrosPrecios, getAllCategorias, getFiltersCamping, resetFiltros } from '../../actions/index'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../store/index';
import { filterCamps } from "../../reducer/estados";
import {Campings} from '../../reducer/estados';



type Props = {
    setCurrentPage: (value: React.SetStateAction<number>) => void
  }


export default function FiltrosLaterales(props:Props) {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const dispatch: AppDispatch = useDispatch()

    const allCategorias: { id: number, categoria: string, cantidad_estrellas: number, descripcion_categoria: string }[] = useSelector((state: RootState) => state.allCategorias)
    const filtrosBook: any = useSelector((state: RootState) => state.filtrosBooking)
    const campings:Campings[] = useSelector((state: RootState) => state.campings)
    const allCampings:Campings[] = useSelector((state: RootState) => state.allCampings)


    useEffect(() => {
        dispatch(getAllCategorias())
        dispatch(getFiltersCamping(filtrosBook))
    }, [dispatch, filtrosBook])




   const precioCamps = allCampings.map(c => c.precio)


    const min: number = 0
    const max: number = 8000

    const [precioLocal, setPrecioLocal] = React.useState<number[]>([min, max])


    const handlePrecio = (e: Event, newValue: number | number[]) => {
        setPrecioLocal(newValue as number[]);
        dispatch(filtrosPrecios('precio', newValue))
        props.setCurrentPage(1) 
    }




    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(filtrosCombinados(e.target.name, Number(e.target.value)))
        props.setCurrentPage(1) 
    }




    const handleBoolean = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(filtrosBooleanos(e.target.name, e.target.checked))
        props.setCurrentPage(1) 
    }

    const handleReset = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(resetFiltros());
        setPrecioLocal([min,max])
        props.setCurrentPage(1) 
    }

    const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
        const split = (e.target.value).split(",")
        const tamaño = [Number(split[0]),Number(split[1])]
        dispatch(FilterParcela(tamaño))
    }
    

    return (

        <Box sx={{ borderRadius: 1, backgroundColor: "white", height: "100%", pl: 3, mr: 4, pr: 4, pb: "2.5rem", boxShadow: "0 0 6px rgb(0 0 0 / 50%)" }}>
            < Typography variant="h6" sx={{ paddingTop: "1.5rem", fontSize: "800", mb: "0.5rem" }}> Filtros:</Typography >
            <Button
                onClick={handleReset}
                variant="contained" color="success"
            >Reset Filtros</Button>

            <hr />
            <Typography >Precio</Typography>
            <Typography>${precioLocal[0]}- +${precioLocal[1]}</Typography>

            <Slider
                sx={{ mt: "1rem", mb: "0.5rem" }}
                name="precio"
                value={precioLocal}
                onChange={(e, value) => handlePrecio(e,value)}
                valueLabelDisplay="off"
                color="secondary"
                min={min}
                max={max}
            />




{/*             <hr></hr>
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
 
 */}



            <hr></hr>
            <Typography >Categoría</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>

                {
                    allCategorias.map(c => {
                        return (
                            <FormControlLabel
                                control={<Checkbox onChange={handleCheck} value={c.id} color="secondary" name="id_categoria" checked={filtrosBook.id_categoria.includes(c.id)} />}
                                label={c.categoria}
                            />
                        )
                    })
                }


            </FormGroup>
            <hr></hr>
            <Typography>Tamaño de Parcela</Typography>

                <RadioGroup defaultValue={"0,500"} onChange={handleRadio} >
                <FormControlLabel value={"0,500"}  control={<Radio color="secondary"/>} label="Todos los tamaños" />
                <FormControlLabel value={"0,15"}  control={<Radio color="secondary"/>} label="0 a 15 metros" />
                <FormControlLabel value={"16,20"}  control={<Radio color="secondary"/>} label="16 a 20 metros" />
                <FormControlLabel value={"21,500"}  control={<Radio color="secondary"/>} label="21 o mas metros" />
                </RadioGroup>

{/*             <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>

                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="5" name="parcela_superficie"/>}
                    label="5 metros"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="10" name="parcela_superficie" />}
                    label="10 metros"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="20" name="parcela_superficie"/>}
                    label="20 metros"
                />
            </FormGroup> */}


            <hr></hr>
            <Typography>Comodidades de parcela</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>
                <FormControlLabel
                    control={<Checkbox onChange={handleBoolean} color="secondary" name="parcela_techada" checked={filtrosBook.parcela_techada}/>}
                    label="Techada"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleBoolean} color="secondary" name="parcela_agua_en_parcela" checked={filtrosBook.parcela_agua_en_parcela}/>}
                    label="Agua"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleBoolean} color="secondary" name="parcela_iluminacion_toma_corriente" checked={filtrosBook.parcela_iluminacion_toma_corriente}/>}
                    label="Electricidad"
                />
            </FormGroup>




            <hr />
            <Typography>Servicios:</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>
                <FormControlLabel
                    sx={{ marginTop: "1rem" }}
                    name="mascotas"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.mascotas} />}
                    label="Mascotas"
                    labelPlacement="end" />
                <FormControlLabel
                    name="rodantes"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.rodantes}/>}
                    label="Rodantes"
                    labelPlacement="end" />
                <FormControlLabel
                    name="proveduria"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.proveduria} />}
                    label="Proveeduria"
                    labelPlacement="end" />
                <FormControlLabel
                    name="restaurant"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.restaurant}/>}
                    label="Restaurant"
                    labelPlacement="end" />
                <FormControlLabel
                    name="pileta"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.pileta}/>}
                    label="Pileta"
                    labelPlacement="end" />
                <FormControlLabel
                    name="vigilancia"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.vigilancia}/>}
                    label="Vigilancia"
                    labelPlacement="end" />
                <FormControlLabel
                    name="maquinas_gimnasia"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.maquinas_gimnasia}/>}
                    label="Gimnasio"
                    labelPlacement="end" />
                <FormControlLabel
                    name="juegos_infantiles"
                    control={<Switch onChange={handleBoolean} color='secondary' checked={filtrosBook.juegos_infantiles}/>}
                    label="Juegos Infantiles"
                    labelPlacement="end" />
                <FormControlLabel
                    name="salon_sum"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.salon_sum}/>}
                    label="Salon SUM"
                    labelPlacement="end" />
                <FormControlLabel
                    name="wifi"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.wifi}/>}
                    label="Wifi"
                    labelPlacement="end" />
                <FormControlLabel
                    name="estacionamiento"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.estacionamiento}/>}
                    label="Estacionamiento"
                    labelPlacement="end" />
            </FormGroup>
        </Box >

    )
}