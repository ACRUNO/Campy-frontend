import { Backdrop, Box, Button, Fade, Grid, Modal, Rating, TextField, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { borderColor, width } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCampingReviews } from "../../actions/Reviews.action";
import { AppDispatch, RootState } from "../../store";
import StarRateIcon from '@mui/icons-material/StarRate';
import Style from "../Camping/Camping.module.css"
import {
    ComposedChart,

    Bar,
    XAxis,
    YAxis,


} from "recharts";




const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export function Reviews() {

    const dispatch: AppDispatch = useDispatch()
    const params = useParams()
    const [grafic, setGrafic] = React.useState([
        {
            name: "1 Estrella",
            pv: 1,
        },
        {
            name: "2 Estrellas",
            pv: 1,
        },
        {
            name: "3 Estrellas",
            pv: 1,
        },
        {
            name: "4 Estrellas",
            pv: 1,
        },
        {
            name: "5 Estrellas",
            pv: 1,
        },

    ]


    );
    const reviews = useSelector((state: RootState) => state.reviews);
    const raiting = useSelector((state: RootState) => state.detailCamping.puntuacion_promedio);
    const nombre = useSelector((state: RootState) => state.detailCamping.nombre_camping);
    const [puntuacion, setPuntuacion] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true); console.log(reviews); console.log(uno) }
    const handleClose = () => setOpen(false);

    var uno: any = []
    var dos: any = []
    var tres: any = []
    var cuatro: any = []
    var cinco: any = []

    reviews?.map((rev: any) => {
        if (rev.puntaje == 1) uno.push(1)
        if (rev.puntaje == 2) dos.push(1)
        if (rev.puntaje == 3) tres.push(1)
        if (rev.puntaje == 4) cuatro.push(1)
        if (rev.puntaje == 5) cinco.push(1)

    })

    useEffect(() => {
        dispatch(getCampingReviews(params.id));
    }, [dispatch, params.id, puntuacion]);

    setTimeout(() => {
        setPuntuacion(raiting)
    }, 500);

    setTimeout(() => {
        setGrafic([
            {
                name: "1 Estrellas",
                pv: uno.length,
            },
            {
                name: "2 Estrellas",
                pv: dos.length,
            },
            {
                name: "3 Estrellas",
                pv: tres.length,
            },
            {
                name: "4 Estrellas",
                pv: cuatro.length,
            },
            {
                name: "5 Estrellas",
                pv: cinco.length,
            },

        ]
        )
    }, 700);





    return (
        <Box display='flex' sx={{ justifyContent: "center" }}>
            <Box display='flex' sx={{ flexDirection: "row" }}>
                <Box display='flex' p='1%' alignItems='center' sx={{ flexDirection: "column" }}>
                    <Box display='table-row' textAlign='center'>
                        <Typography variant="h3">Reviews </Typography>
                        {/* <Typography> {puntuacion > 1 ? `${puntuacion} estrellas de 5 posibles` : `${puntuacion} estrella de 5 posibles`} </Typography> */}
                        <Rating name="read-only" value={puntuacion} readOnly />
                        <Box display='flex' flexDirection='column' alignItems='center' p='2%' >
                            <Typography variant="h2">{puntuacion}.0</Typography>
                            <Button sx={{ mb: '15%' }} onClick={handleOpen} color='secondary' variant='contained'>Mostrar Reseñas</Button>

                        </Box>
                    </Box>
                </Box>
                <Box>
                    <ComposedChart
                        layout="vertical"
                        width={300}
                        height={250}
                        data={grafic}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20
                        }}
                    >
                        {/* <CartesianGrid stroke="#f5f5f5" /> */}
                        <XAxis display="none" type="number" />
                        <YAxis dataKey="name"
                            type="category" width={80}
                        />
                        {/* <Tooltip /> */}
                        {/* <Legend /> */}
                        {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                        <Bar dataKey="pv" barSize={10} fill="#285430" color="#285430" />
                        {/* <Line dataKey="uv" stroke="#ff7300" /> */}
                    </ComposedChart>
                </Box>
            </Box>
            <Modal

                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box mt='1%' display='flex' sx={style}>
                        <Box display='flex' flexDirection='column' justifyContent='flex-start' p='2rem' sx={{ width: '100%' }}>
                            <Box pb='3rem' alignItems='center'>
                                <Typography
                                    variant="h2"
                                    // sx={{ textDecorationLine: "underline" }}
                                    textAlign='center'
                                >
                                    {nombre}
                                </Typography>
                            </Box>
                            <Box alignItems='left' sx={{ width: '100%', display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                {reviews?.map((reviews: { id_camping: number, puntaje: number, username: string, fecha: string, comentario: string }) => {
                                    return (



                                        <Card className={Style.card} sx={{ display: 'flex', mt: 2, mb: 2, mr: 5, height: "fit-content", width: "100%", p: 1, boxShadow: 3, justifyContent: "center" }}>

                                            <Box >
                                                <CardContent sx={{ display: 'flex', flexDirection: 'column', width: 500, p: 0, m: 0 }}>
                                                    <Typography component="div" variant="h4" sx={{ mb: 1 }}>
                                                        {reviews.username}
                                                    </Typography>
                                                    <Typography variant="h6" color="text.secondary" component="div">
                                                        <strong>Opinión: </strong> {reviews.comentario}
                                                    </Typography>

                                                </CardContent>
                                            </Box>
                                            <Box flexDirection="column" display="flex" component="div" alignItems="flex-end" justifyContent="center" >
                                                <Box className={Style.rankingcont} display="flex" alignContent="flex-end">
                                                    <Typography color="secondary" component="legend">Reviews</Typography>
                                                    <Rating name="read-only" value={reviews.puntaje} readOnly />
                                                </Box>

                                            </Box>

                                        </Card>

                                    )
                                })}
                            </Box>
                        </Box>

                    </Box>

                </Fade>

            </Modal>
        </Box>
    )
}








