import React from "react";
import Footer from "../Footer/Footer";
import Paginado from "../Paginado/Paginado";
import FiltrosLaterales from "../FiltrosBooking/FiltrosLaterales";
import FiltrosPrincipales from "../FiltrosBooking/FiltrosPrincipales";
import Alert_busqueda from "../AlertBusqueda/Alert_busqueda";
import CardCamping from "../CardCamping/CardCamping";
import SkeletonCardCamping from '../CardCamping/SkeletonCardCamping'
import { Box, Grid } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { getAllCampings, filterProvincia, getCampingsProvincias, getCampingsLocalidades } from "../../actions/index"
import { useEffect, useState } from "react";
import * as actions from "../../actions";
import { AppDispatch, RootState } from '../../store/index';
import { Campings } from '../../reducer/estados';





const filterVacios = {
    id_provincia: "",
    id_localidad: "",
    abierto_fecha_desde: "",
    abierto_fecha_hasta: "",
    precio: [],
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
    estacionamient: 0
}






export default function Booking() {




    const dispatch: AppDispatch = useDispatch()
    const allCampings: Campings[] = useSelector((state: RootState) => state.allCampings)
    const campings: Campings[] = useSelector((state: RootState) => state.campings)
    const [open, setOpen] = React.useState(false);
    const filtrosBook: any = useSelector((state: RootState) => state.filtrosBooking)



    useEffect(() => {
        dispatch(actions.getFiltersCamping(filtrosBook))
        setTimeout(() => {
            if (!campings.length) {
                setOpen(true)
            }
        }, 2000)
    }, [dispatch, filtrosBook]
    )


    const provincia: number = useSelector((state: RootState) => state.provincia)
    const localidad: number = useSelector((state: RootState) => state.localidad)


    const [currentPage, setCurrentPage] = useState(1);
    const [campingsxPage, setCampingsxPage] = useState(6);
    const indexLastCamping: number = currentPage * campingsxPage;
    const indexFirstCamping: number = indexLastCamping - campingsxPage;

    const currentCampings: Campings[] = campings.slice(indexFirstCamping, indexLastCamping)


    return (

        <Box sx={{bgcolor: 'rgb(245, 245, 245)' }}>

            <FiltrosPrincipales
                setCurrentPage={setCurrentPage}
            />

            <Grid container direction="row">
                <Grid item justifyContent="left" xs={0} sm={4} md={2}>

                    <FiltrosLaterales
                        setCurrentPage={setCurrentPage}
                    />

                </Grid>
                <Grid item justifyContent="right" xs={12} sm={8} md={10}>




                    {
                        currentCampings.length > 0 ? currentCampings.map((c: Campings) => (


                            <CardCamping key={c.id} id={c.id} nombre={c.nombre_camping} descripcion={c.descripcion_camping}
                                localidad={c.localidad} provincia={c.provincia}
                                categoria={c.categoria} imagenes={c.imagenes} reviews={c.puntuacion_promedio} precio={c.precio}></CardCamping>

                        )) : campings.length === 0 &&
                        <>
                            {
                                new Array(5).fill(1).map(p =>
                                    <SkeletonCardCamping />
                                )
                            }

                            <Alert_busqueda estadoopen={open} setestadoopen={setOpen} />
                        </>
                    }

                </Grid>
            </Grid>
            <Paginado
                campingsxPage={campingsxPage}
                allCampings={campings.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <script src="https://apps.elfsight.com/p/platform.js" defer></script>
            <div className="elfsight-app-d17e10b2-0548-4182-bee0-0eccaa8d4ba2"></div>
            <Footer />
        </Box >

    )
}


















