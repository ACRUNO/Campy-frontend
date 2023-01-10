import { Box, Card, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import s from '../CardCamping/CardCamping.module.css'


export default function Carrousel() {
    const datos_graftop: { id: number, nombre_camping: string; cant_reservas: number, localidad: string, provincia: string, images: string }[] = useSelector((state: RootState) => state.datos_graftop?.slice(0, 5));

    return (
        <Grid container display="flex" flexDirection="column" alignContent="space-around" sx={{ backgroundColor: '#D8E3C5', borderStyle: "double", borderColor: "#273115", borderRadius: 1.5 }}>
            <Typography component="h2" variant="h4" sx={{ mb: 2, pl: 1, pt: 2, textShadow: "5px 2px 36px #070707" }}>Campings más reservados</Typography>
            <Grid container justifyContent="space-around" display="flex" flexDirection="row" alignContent="center" sx={{ pb: 4, pl: 1, pr: 1 }} >
                {datos_graftop?.map((p) =>
                    <Link to={`/booking/camping/${p.id}`} style={{ textDecoration: 'none' }}>
                        <Grid item>
                            <Card className={s.cardChica} sx={{ bgcolor: 'd7d7d7' }}>
                                <Paper sx={{
                                    width: "16rem",
                                    position: 'relative',
                                    backgroundColor: 'grey.800',
                                    color: '#fff',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundImage: `url(${p.images})`,

                                }}>
                                    <CardContent sx={{ height: "7rem" }}>

                                    </CardContent>
                                </Paper>
                                <CardContent sx={{ height: "3rem" }}>
                                    <Typography className={s.titulo} gutterBottom align="left" variant="h6" >{p.nombre_camping}</Typography>
                                    <Typography gutterBottom align="right" variant="subtitle1">{p.localidad},{p.provincia}</Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                    </Link>
                )}

            </Grid>
        </Grid>

    )
}