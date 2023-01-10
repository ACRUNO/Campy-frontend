import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../store/index';
import { useEffect, useState } from "react";
import { getPostById, limpiarDetalle } from "../../actions/Blog.action";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Box, Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import MainFeaturedPost from "./MainFeaturedPost";
import Detail from "./Detail";



export default function Detalle() {


    const params = useParams();
    const dispatch: AppDispatch = useDispatch();
    const [reload, setReload] = useState(0)

    const [avisoComentario, setAvisoComentario] = useState(true)


    useEffect(() => {
        dispatch(getPostById(params.id));
        return () => {
            dispatch(limpiarDetalle())
        }
    }, [dispatch, params.id, reload])


    return (
        <Box>
            <Container maxWidth={false} sx={{ bgcolor: 'rgb(245, 245, 245)' }}>
                <Grid>
                    <MainFeaturedPost avisoComentario={avisoComentario} setAvisoComentario={setAvisoComentario} posts={[]} />
                    <Grid container columnSpacing={4} display="flex" justifyContent="space-between" sx={{ mb: 4 }}>
                    </Grid>
                    <Grid container spacing={4} display="flex" flexDirection="column" alignContent="center" sx={{ mb: 4 }} >
                        <Detail reload={reload} setReload={setReload} />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    )
};