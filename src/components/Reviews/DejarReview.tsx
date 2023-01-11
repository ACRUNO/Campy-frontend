import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, Rating, TextField, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Style from "../Camping/Camping.module.css"
import Portada from "../Camping/banner1.webp"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Params, useParams, useSearchParams } from "react-router-dom";
import { cleanDetails, getDetails } from "../../actions";
import StarIcon from '@mui/icons-material/Star';
import { Reviews } from "../../reducer/estados";
import { MouseEvent } from 'react';
import { AlertType } from "../../auxiliar";
import axios from "axios";
import Alert from "../helpers/Alert";
import Carousel from "../Camping/Carousel";


const labels: { [index: string]: string } = {
    1: 'Pesimo',
    2: 'Malo',
    3: 'Regular',
    4: 'Bueno',
    5: 'Excelente',
};

function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}



export function DejarReviews() {

    const { nombre_camping, puntuacion_promedio } = useSelector((state: RootState) => state.detailCamping)
    const user = useSelector((state: RootState) => state.user)
    const dispatch: AppDispatch = useDispatch()
    const params: Readonly<Params<string>> = useParams()
    const [openLoader, setOpenLoader] = React.useState(false)
    const [estrellasPuntadas, setEstrellasPuntadas] = React.useState<number | null>(0);
    const [estrellasCamping, setEstrellasCamping] = React.useState<number | null>(0)
    const [hover, setHover] = React.useState(-1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [stateOpen, setStateOpen]: [stateOpen: AlertType, setStateOpen: Dispatch<SetStateAction<AlertType>>] = useState<AlertType>({
        open: false,
        title: '',
        description: '',
        confirm: '',
        type: 'success',
        navigateTo: null
    });

    const [input, setInput] = React.useState<Reviews>({
        usuario: searchParams.get('ultraT'),
        camping: Number(params.id),
        puntaje: 0,
        comentario: '',
        email: searchParams.get('xlr8')
    })

    const logInPhotos: string[] = ["https://res.cloudinary.com/pfcampy/image/upload/v1670536275/Fotos/Jujuy.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536434/Fotos/LaPampa.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536537/Fotos/Corrientes.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536684/Fotos/SanJuan.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670535617/Fotos/Tierradelfuego.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536350/Fotos/SantaCruz.jpg"]
    const [randomPhoto, SetRandomPhoto] = React.useState(logInPhotos[Math.floor(Math.random() * logInPhotos.length)])

    let disabled = !(input.puntaje !== 0 && input.comentario.length > 5)

    useEffect(() => {
        dispatch(getDetails(params.id));
        return () => {
            dispatch(cleanDetails())
        }
    }, [dispatch])

    useEffect(() => {
        setEstrellasCamping(puntuacion_promedio);
    }, [puntuacion_promedio])

    const handlePuntuacion = (event: any, newValue: React.SetStateAction<number | null>) => {
        setEstrellasPuntadas(newValue);
        setInput({
            ...input,
            puntaje: Number(newValue),
        })
    }

    const handleChangeTexto = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            comentario: e.target.value
        })
    }

    const handleSubmit = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setOpenLoader(true)
        axios.post("/api/reviews",
            input
        ).then(() => setStateOpen(() => ({
            open: true,
            title: 'REVIEW ENVIADA CON EXITO!',
            description: 'Muchas gracias por aportar a esta hermosa comunidad.',
            confirm: 'OK',
            type: 'success',
            navigateTo: "/"
        }))).catch(({ response }) => setStateOpen(() => ({
            open: true,
            title: `ERROR: ${response.data.error}`,
            description: response.data.message,
            confirm: 'ok...',
            type: 'error',
            navigateTo: null
        }))).finally(() => setOpenLoader(false));
    }



    return (
        <Grid sx={{ height: "100%", bgcolor: 'rgb(245, 245, 245)', pb: "20rem" }}>
            <Dialog
                fullWidth
                maxWidth="md"
                open={openLoader}>
                <DialogTitle align='center'>Subiendo Review...</DialogTitle>
                <DialogContent >
                    <Box
                        component="img"
                        alt="imagen"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    />
                </DialogContent>
            </Dialog>

            <Box className={Style.portadacont}>
                <Box
                    component="img"
                    className={Style.imagencita}
                    alt="Logo"
                    src={randomPhoto}
                />
                <Box className={Style.textoBanner}>
                    <Typography variant="h2" color="primary" className={Style.texto}>
                        {nombre_camping}
                    </Typography>
                    <Box className={Style.rankingcont}>
                        <Typography color="primary" component="legend">Puntuación  </Typography>
                        <Rating name="read-only" value={estrellasCamping} readOnly />
                    </Box>
                </Box>
            </Box>


            <Grid container spacing={0} display="flex" flexDirection="row" justifyContent="space-around" alignItems="flex-start" sx={{ pt: 5 }} >
                <Box
                    alignContent="center"
                    sx={{
                        '& > legend': { mt: 2 },
                    }}>
                    <Carousel />

                </Box>

                <Box
                    alignContent="flex-start"
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Typography textAlign="center" variant='h2' fontWeight="bold" >Deja tu Reseña...</Typography>
                    <Box display='flex' flexDirection="column" sx={{ pt: 5 }}>
                        <Typography alignItems="center" variant="h3" textAlign="center" component="legend">Puntuacion: </Typography>
                        <Box alignItems="center" display="flex" sx={{ pl: 12 }}>
                            <Rating
                                name="simple-controlled"
                                size="large"
                                defaultValue={0}
                                value={estrellasPuntadas ? estrellasPuntadas : 0}
                                getLabelText={getLabelText}
                                onChange={handlePuntuacion}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            {estrellasPuntadas !== null && (
                                <Box sx={{ pl: 4, fontSize: 25, fontStyle: "italic" }}>{labels[hover !== -1 ? hover : estrellasPuntadas]}</Box>
                            )}
                        </Box>
                    </Box>
                    <Grid container item xs={12} sx={{ pt: 3 }} display="flex" direction="column" justifyContent="center">
                        <TextField
                            color="secondary"
                            required
                            fullWidth
                            id="Texto"
                            label="Texto"
                            name="Texto"
                            multiline
                            minRows={5}
                            onChange={(e) => { handleChangeTexto(e) }}
                        />
                        <Button size="large" disabled={disabled} color="secondary" variant='contained' id='Crear' sx={{ mt: 4 }} onClick={(e) => { handleSubmit(e) }} value="Crear Post">Crear Review</Button>
                    </Grid>
                </Box>
            </Grid>
            {/* <Grid item xs={6} display="flex" justifyContent="center" alignContent="center" sx={{ pt: 8 }}>
            </Grid> */}

            {
                stateOpen.open &&
                <Alert
                    setStateOpen={setStateOpen}
                    open={stateOpen.open}
                    description={stateOpen.description}
                    title={stateOpen.title}
                    confirm={stateOpen.confirm}
                    type={stateOpen.type}
                    navigateTo={stateOpen.navigateTo}
                />
            }
        </Grid >
    )

}