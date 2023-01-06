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
import { loginUserWithToken } from "../../actions/Login.action";
import { AlertType } from "../../auxiliar";
import axios from "axios";
import Alert from "../helpers/Alert";


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


    setTimeout(() => {
        setEstrellasCamping(puntuacion_promedio);
    }, 100);

    const [input, setInput] = React.useState<Reviews>({
        usuario: null,
        camping: Number(params.id),
        puntaje: 0,
        comentario: ''
    })


    let disabled = !(input.puntaje !== 0 && input.comentario.length > 5)

    useEffect(() => {
        dispatch(getDetails(params.id));
        dispatch(loginUserWithToken(String(searchParams.get('xlr8'))))
        return () => {
            dispatch(cleanDetails())
        }
    }, [dispatch])

    useEffect(() => {
        setInput({
            ...input,
            usuario: user?.id
        })
    }, [user])

    const handlePuntuacion = (event: any, newValue: React.SetStateAction<number | null>) => {
        setEstrellasPuntadas(newValue);
        setInput({
            ...input,
            puntaje: event.target.value
        })
    }

    const handleChangeTexto = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            comentario: e.target.value
        })
        console.log(input);
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
        <Grid sx={{ height: "100vh", bgcolor: 'rgb(245, 245, 245)' }}>
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

            <Box className={Style.all}>
                <Box className={Style.portadacont}>
                    <Box
                        component="img"
                        className={Style.imagencita}
                        alt="Logo"
                        src={Portada}
                    />
                    <Box className={Style.text}>
                        <Typography variant="h1" color="primary">
                            {nombre_camping}
                        </Typography>
                        <Box className={Style.rankingcont}>
                            <Typography color="primary" component="legend">Ranking</Typography>
                            <Rating name="read-only" value={estrellasCamping} readOnly />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Typography align="center" variant='h2' fontWeight="bold" sx={{ pt: 5 }}>Deja tu Reseña...</Typography>
            <Grid container spacing={2} display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" sx={{ pt: 5 }} >
                <Box
                    alignContent="center"
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Typography variant="h2" textAlign="center" component="legend">Puntuacion: </Typography>
                    <Box alignItems="center" display="flex" sx={{ pl: 3 }}>
                        <Rating
                            name="simple-controlled"
                            size="large"
                            value={estrellasPuntadas}
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
                <Grid item xs={6}>
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
                </Grid>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="center" alignContent="center" sx={{ pt: 8 }}>
                <Button size="large" disabled={disabled} color="secondary" variant='contained' id='Crear' sx={{ mt: 2 }} onClick={(e) => { handleSubmit(e) }} value="Crear Post">Crear Post</Button>
            </Grid>
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
        </Grid>
    )

}