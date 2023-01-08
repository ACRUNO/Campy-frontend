import React from "react";
import Footer from "../Footer/Footer";
import Paginado from "../Paginado/Paginado";
import FiltrosLaterales from "../FiltrosBooking/FiltrosLaterales";
import FiltrosPrincipales from "../FiltrosBooking/FiltrosPrincipales";
import Alert_busqueda from "../AlertBusqueda/Alert_busqueda";
import CardCamping from "../CardCamping/CardCamping";
import SkeletonCardCamping from '../CardCamping/SkeletonCardCamping'
import { Badge, Box, Grid } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { getAllCampings, filterProvincia, getCampingsProvincias, getCampingsLocalidades } from "../../actions/index"
import { useEffect, useState } from "react";
import * as actions from "../../actions";
import { AppDispatch, RootState } from '../../store/index';
import { Campings, filterCamps } from '../../reducer/estados';
import s from './Booking.module.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FiltersMap from "../Map/FiltersMap/FiltersMap";
import CardCampingChica from "../CardCamping/CardCampingChica";
import SkeletonCardChica from "../CardCamping/SkeletonCardChica";
import Typography from "@mui/material/Typography";




export default function Booking() {




    const dispatch: AppDispatch = useDispatch()
    const { result, done } = useSelector((state: RootState) => state.campings)
    const [open, setOpen] = React.useState(false);
    const filtrosBook: any = useSelector((state: RootState) => state.filtrosBooking)










    useEffect(() => {
        if (done && !result.length) setOpen(true)
    }, [done])

    useEffect(() => {
        dispatch(actions.resetFilterCamping());
        dispatch(actions.getFiltersCamping(filtrosBook));
    }, [dispatch, filtrosBook]
    )


    const [currentPage, setCurrentPage] = useState(1);
    const [campingsxPage, setCampingsxPage] = useState(6);
    const indexLastCamping: number = currentPage * campingsxPage;
    const indexFirstCamping: number = indexLastCamping - campingsxPage;


    const currentCampings: Campings[] = result.slice(indexFirstCamping, indexLastCamping)

    let num = 0

    if (filtrosBook.id_provincia > 0 || filtrosBook.id_localidad) num++
    if (filtrosBook.abierto_fecha_desde || filtrosBook.abierto_fecha_hasta) num++
    if (filtrosBook.precio.length > 0) num++
    if (filtrosBook.reviews.length > 0) num++
    if (filtrosBook.id_categoria.length > 0) num++
    if (filtrosBook.parcela_superficie.length > 0 && filtrosBook.parcela_superficie[1] < 510) num++
    if (filtrosBook.parcela_agua_en_parcela || filtrosBook.parcela_iluminacion_toma_corriente || filtrosBook.parcela_techada) num++
    if (filtrosBook.mascotas || filtrosBook.rodantes || filtrosBook.proveduria || filtrosBook.restaurant || filtrosBook.pileta || filtrosBook.vigilancia || filtrosBook.maquinas_gimnasia || filtrosBook.juegos_infantiles || filtrosBook.salon_sum || filtrosBook.wifi || filtrosBook.estacionamiento) num++




    const [popUpFilters, SetPopUpFilters] = useState<boolean>(false)
    const [filtersArrow, SetFiltersArrow] = useState<boolean>(false)

    const handleButton = () => {
        popUpFilters === false ? SetPopUpFilters(true) : SetPopUpFilters(false);
        filtersArrow === false ? SetFiltersArrow(true) : SetFiltersArrow(false)
    }



    return (

        <Box className={s.contenedor_gral} >

            <Box className={s.filtrosJuntos}>

                <button className={s.buttonFilters} onClick={handleButton}>
                    Filtros

                    <Box className={s.filtersArrow} >
                        {
                            filtersArrow === false ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />
                        }
                    </Box>
                    {
                        num > 0 ? <Badge badgeContent={num} color="secondary" sx={{ ml: "1rem", mr: "0.5rem" }}> <Typography></Typography> </Badge> : <Box />
                    }
                </button>

                {/*  /*  <button className={s.filterCounter} disabled >{num}</button> */}

            </Box>


            <Box className={s.filters}>
                {
                    popUpFilters === true ? <FiltersMap /> : <Box />
                }
            </Box>



            <Box className={s.FiltrosPrinc}>
                <FiltrosPrincipales
                    setCurrentPage={setCurrentPage}
                />
            </Box>

            {/* GRID CONTIENE FILROS LATERALES + CARD */}
            <Grid className={s.ContenedorFilCards} container>
                {/* MUESTRA FILTROS LATERALES */}
                <Grid className={s.FiltrosLaterales} item >

                    <FiltrosLaterales
                        setCurrentPage={setCurrentPage}
                    />

                </Grid>
                {/* MUESTRA CARDS */}
                <Grid className={s.Cards} item >
                    {
                        currentCampings.length > 0 ? currentCampings.map((c: Campings) => (


                            <CardCamping key={c.id + 1} id={c.id} nombre={c.nombre_camping} descripcion={c.descripcion_camping}
                                localidad={c.localidad} provincia={c.provincia}
                                categoria={c.categoria} imagenes={c.imagenes} reviews={c.puntuacion_promedio} precio={c.precio}></CardCamping>

                        )) :
                            result.length === 0 && !done ?
                                new Array(5).fill(1).map((p, i) =>
                                    <SkeletonCardCamping key={i} />
                                )
                                :
                                <Alert_busqueda estadoopen={open} setestadoopen={setOpen} />
                    }

                </Grid>


                <Grid className={s.CardsChicas} item>

                    {
                        currentCampings.length > 0 ? currentCampings.map((c: Campings) => (


                            <CardCampingChica key={c.id + 1} id={c.id} nombre={c.nombre_camping} descripcion={c.descripcion_camping}
                                localidad={c.localidad} provincia={c.provincia}
                                categoria={c.categoria} imagenes={c.imagenes} reviews={c.puntuacion_promedio} precio={c.precio}></CardCampingChica>

                        )) :
                            result.length === 0 && !done ?
                                new Array(5).fill(1).map((p, i) =>
                                    <SkeletonCardChica key={i} />
                                )
                                :
                                <Alert_busqueda estadoopen={open} setestadoopen={setOpen} />
                    }

                </Grid>







            </Grid>

            <Paginado
                campingsxPage={campingsxPage}
                allCampings={result.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Footer />
        </Box >

    )
}


















