import { Box, Card, CardContent, CardMedia, Divider, Grid, ListItem, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import s from '../CardCamping/CardCamping.module.css'


export default function Carrousel() {
    const datos_graftop: { id: number, nombre_camping: string; cant_reservas: number, localidad: string, provincia: string, images: string }[] = useSelector((state: RootState) => state.datos_graftop?.slice(0, 5));


    return (

        <Grid container display="flex" flexDirection="column" alignContent="space-around" sx={{ backgroundColor: "#E3E1E1", borderRadius: 1.5, overflowX: "hidden" }}>
            <Typography component="h4" variant="h4" sx={{ pl: 4, pt: 2, fontWeight: "bolder", color: "#242424" }}>Campings más reservados</Typography>
            <Box className={s.contenedorCardChica} id={"Scroll"} width="100%" display="flex" flexDirection="row" alignContent="center" sx={{ pb: 4, pl: 1, pr: 1, overflowX: "auto", scrollBehavior: "smooth" }} >
                {datos_graftop?.map((p) =>
                    <Link to={`/booking/camping/${p.id}`} style={{ textDecoration: 'none' }}>
                        <Grid className={s.GridCardChica} item>
                            <Card className={s.cardChica1} sx={{ bgcolor: 'd7d7d7' }}>
                                <Paper sx={{
                                    width: "22rem",
                                    height: "14rem",
                                    position: 'relative',
                                    backgroundColor: 'grey.800',
                                    color: '#fff',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundImage: `url(${p.images})`,

                                }}>
                                    <CardContent>

                                    </CardContent>
                                </Paper>
                                <CardContent sx={{ height: "4rem" }}>
                                    <Typography className={s.titulo} gutterBottom align="left" variant="h5" >{p.nombre_camping}</Typography>
                                    <Typography gutterBottom align="right" variant="subtitle1">{p.localidad},{p.provincia}</Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                    </Link>
                )}

            </Box>

            <ListItem divider></ListItem>
        </Grid >


    )
}