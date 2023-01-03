import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../store/index';
import { useEffect } from "react";
import { getPostById } from "../../actions/Blog.action";
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

    const post: {
        id: number,
        foto: string,
        username: string,
        fecha: string,
        titulo: string,
        texto: string,
        imagenes: Array<string>,
        comentarios: { username: string, foto: string, comentario: string, createdAt: string }[]
    } = useSelector((state: RootState) => state.post)

    useEffect(() => {
        dispatch(getPostById(params.id))
    }, [dispatch, params.id])
    console.log(post);

    return (
        <Box>
        <Container maxWidth="lg">
        <Grid>
            <MainFeaturedPost/>
            <Grid container columnSpacing={4} display="flex"  justifyContent="space-between" sx={{mb:4}}>
          </Grid>
          <Grid container spacing={4} display="flex" flexDirection="column" alignContent="center" sx={{mb:4}} >
          <Detail key={post.titulo} id={post.id} foto={post.foto} fecha={new Date (post?.fecha).toLocaleDateString()} username={post.username} titulo={post.titulo} texto={post.texto} imagenes={post.imagenes} comentarios={post.comentarios}/>
          </Grid>
        </Grid>
        </Container>
        <Footer/>
        </Box>
    )
};