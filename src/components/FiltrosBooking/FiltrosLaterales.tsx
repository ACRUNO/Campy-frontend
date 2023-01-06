import React, { useEffect } from "react";
import { Box, Typography, Slider, Switch, FormControlLabel, Checkbox, FormGroup, RadioGroup, Radio, Button } from '@mui/material';
import { ChangeEvent, MouseEvent } from 'react'
import { diasReservadosBooking, FilterParcela, filtrosBooleanos, filtrosCombinados, filtrosPrecios, getAllCampings, getAllCategorias, getFiltersCamping, resetFiltros } from '../../actions/index'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../store/index';
import { Campings } from '../../reducer/estados';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

type Props = {
    setCurrentPage: (value: React.SetStateAction<number>) => void
}

export default function FiltrosLaterales(props: Props) {

    const dispatch: AppDispatch = useDispatch()
    const allCategorias: { id: number, categoria: string, cantidad_estrellas: number, descripcion_categoria: string }[] = useSelector((state: RootState) => state.allCategorias)
    const filtrosBook: any = useSelector((state: RootState) => state.filtrosBooking)
    const allCampings: Campings[] = useSelector((state: RootState) => state.allCampings)
    const diasReservados: number = useSelector((state: RootState) => state.diasReservadosBooking)


    useEffect(() => {
        dispatch(getAllCategorias())
        dispatch(getFiltersCamping(filtrosBook))
    }, [dispatch, filtrosBook])


    useEffect(() => {
        dispatch(getAllCampings())
    }, [dispatch])


    const precioCamps = allCampings.map(c => c.precio)


    var min = Math.min(...precioCamps)
    var max = Math.max(...precioCamps)

    const [precioLocal, setPrecioLocal] = React.useState<number[]>([0, 2500])


    useEffect(() => {
        if (!allCampings.length) return
        const precioCamps = allCampings.map(c => c.precio)

        var min = Math.min(...precioCamps)
        var max = Math.max(...precioCamps)

        setPrecioLocal([min, max])
        // dispatch(filtrosPrecios('precio', precioLocal))
    }, [allCampings])



    const handlePrecio = (e: Event, newValue: number | number[]) => {
        setPrecioLocal(newValue as number[]);
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
        setPrecioLocal([min, max])
        props.setCurrentPage(1)
        dispatch(diasReservadosBooking(0))

    }

    const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
        const split = (e.target.value).split(",")
        const tamaño = [Number(split[0]), Number(split[1])]
        dispatch(FilterParcela(tamaño))
    }

    const handleButtonPrecio = () => {
        dispatch(filtrosPrecios('precio', precioLocal))
        props.setCurrentPage(1)

    }


    return (

        <Box sx={{ borderRadius: 1, backgroundColor: "white", height: "100%", pl: 3, mr: 4, pr: 4, pb: "2.5rem", boxShadow: "0 0 6px rgb(0 0 0 / 50%)" }}>
            < Typography variant="h6" sx={{ paddingTop: "1.5rem", fontSize: "800", mb: "0.5rem" }}> Filtros</Typography >
            <Button
                onClick={handleReset}
                variant="contained" color="success"
            >Reset Filtros</Button>

            <hr />
            <Typography >Precio por dia</Typography>


            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", columnGap: "3.3rem" }}>

                <Typography >${precioLocal[0]}- +${precioLocal[1]}</Typography>
                <Button onClick={handleButtonPrecio} sx={{ fontSize: "0.625rem", p: "0.313rem" }} variant="contained" color="success">Aplicar</Button>

            </Box>

            <Slider
                sx={{ ml: "0px", mt: "1rem", mb: "0.5rem", width: "90%" }}
                name="precio"
                value={precioLocal}
                onChange={(e, value) => handlePrecio(e, value)}
                valueLabelDisplay="off"
                color="secondary"
                min={min}
                max={max}
            />

            <hr />

            <Typography >Reviews</Typography>

            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>

                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="5" name="reviews" checked={filtrosBook.reviews.includes(5)} />}
                    label={
                        <Rating
                            name="text-feedback"
                            value={5}
                            readOnly
                            precision={1}
                            style={{ marginTop: "0.3rem" }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    }
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="4" name="reviews" checked={filtrosBook.reviews.includes(4)} />}
                    label={
                        <Rating
                            name="text-feedback"
                            value={4}
                            readOnly
                            precision={1}
                            style={{ marginTop: "0.3rem" }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    }

                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="3" name="reviews" checked={filtrosBook.reviews.includes(3)} />}
                    label={
                        <Rating
                            name="text-feedback"
                            value={3}
                            readOnly
                            precision={1}
                            style={{ marginTop: "0.3rem" }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    }

                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="2" name="reviews" checked={filtrosBook.reviews.includes(2)} />}
                    label={
                        <Rating
                            name="text-feedback"
                            value={2}
                            readOnly
                            precision={1}
                            style={{ marginTop: "0.3rem" }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    }

                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheck} color="secondary" value="1" name="reviews" checked={filtrosBook.reviews.includes(1)} />}
                    label={
                        <Rating
                            name="text-feedback"
                            value={1}
                            readOnly
                            precision={1}
                            style={{ marginTop: "0.3rem" }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    }

                />

            </FormGroup>




            <hr></hr>
            <Typography >Categoría</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>

                {
                    allCategorias.map(c => {
                        return (
                            <FormControlLabel key={c.id + 1}
                                control={<Checkbox onChange={handleCheck} value={c.id} color="secondary" name="id_categoria" checked={filtrosBook.id_categoria.includes(c.id)} />}
                                label={c.categoria}
                            />
                        )
                    })
                }


            </FormGroup>
            <hr></hr>
            <Typography>Tamaño de Parcela</Typography>

            <RadioGroup defaultValue={"0,550"} onChange={handleRadio} >
                <FormControlLabel value={"0,550"} control={<Radio color="secondary" />} label="Todos los tamaños" />
                <FormControlLabel value={"0,15"} control={<Radio color="secondary" />} label="0 a 15 metros" />
                <FormControlLabel value={"16,20"} control={<Radio color="secondary" />} label="16 a 20 metros" />
                <FormControlLabel value={"21,500"} control={<Radio color="secondary" />} label="21 o mas metros" />
            </RadioGroup>



            <hr></hr>
            <Typography>Comodidades de parcela</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>
                <FormControlLabel
                    control={<Checkbox onChange={handleBoolean} color="secondary" name="parcela_techada" checked={filtrosBook.parcela_techada ? true : false} />}
                    label="Techada"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleBoolean} color="secondary" name="parcela_agua_en_parcela" checked={filtrosBook.parcela_agua_en_parcela ? true : false} />}
                    label="Agua"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleBoolean} color="secondary" name="parcela_iluminacion_toma_corriente" checked={filtrosBook.parcela_iluminacion_toma_corriente ? true : false} />}
                    label="Electricidad"
                />
            </FormGroup>




            <hr />
            <Typography>Servicios:</Typography>
            <FormGroup sx={{ mt: "0.5rem", mb: "0.5rem" }}>
                <FormControlLabel
                    sx={{ marginTop: "1rem" }}
                    name="mascotas"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.mascotas ? true : false} />}
                    label="Mascotas"
                    labelPlacement="end" />
                <FormControlLabel
                    name="rodantes"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.rodantes ? true : false} />}
                    label="Rodantes"
                    labelPlacement="end" />
                <FormControlLabel
                    name="proveduria"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.proveduria ? true : false} />}
                    label="Proveeduria"
                    labelPlacement="end" />
                <FormControlLabel
                    name="restaurant"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.restaurant ? true : false} />}
                    label="Restaurant"
                    labelPlacement="end" />
                <FormControlLabel
                    name="pileta"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.pileta ? true : false} />}
                    label="Pileta"
                    labelPlacement="end" />
                <FormControlLabel
                    name="vigilancia"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.vigilancia ? true : false} />}
                    label="Vigilancia"
                    labelPlacement="end" />
                <FormControlLabel
                    name="maquinas_gimnasia"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.maquinas_gimnasia ? true : false} />}
                    label="Gimnasio"
                    labelPlacement="end" />
                <FormControlLabel
                    name="juegos_infantiles"
                    control={<Switch onChange={handleBoolean} color='secondary' checked={filtrosBook.juegos_infantiles ? true : false} />}
                    label="Juegos Infantiles"
                    labelPlacement="end" />
                <FormControlLabel
                    name="salon_sum"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.salon_sum ? true : false} />}
                    label="Salon SUM"
                    labelPlacement="end" />
                <FormControlLabel
                    name="wifi"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.wifi ? true : false} />}
                    label="Wifi"
                    labelPlacement="end" />
                <FormControlLabel
                    name="estacionamiento"
                    control={<Switch onChange={handleBoolean} color="secondary" checked={filtrosBook.estacionamiento ? true : false} />}
                    label="Estacionamiento"
                    labelPlacement="end" />
            </FormGroup>
        </Box >

    )
}












