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
    const [editar, setEditar] = useState(false)
    const [editarPost, setEditarPost] = useState(false)
    const [reload, setReload] = useState(0)

    //
    const [avisoComentario, setAvisoComentario] = useState(true)

    const post: {
        id: number,
        foto: string,
        username: string,
        fecha: string,
        titulo: string,
        texto: string,
        imagenes: Array<string>,
        comentarios: { id: number, username: string, foto: string, comentario: string, createdAt: string }[]
    } = useSelector((state: RootState) => state.post)

    useEffect(() => {
        dispatch(getPostById(params.id));
        return () => {
            dispatch(limpiarDetalle())
        }
    }, [dispatch, params.id, reload, editar])


    return (
        <Box>
            <Container maxWidth={false} sx={{ bgcolor: 'rgb(245, 245, 245)' }}>
                <Grid>
                    <MainFeaturedPost avisoComentario={avisoComentario} setAvisoComentario={setAvisoComentario} posts={[]} />
                    <Grid container columnSpacing={4} display="flex" justifyContent="space-between" sx={{ mb: 4 }}>
                    </Grid>
                    <Grid container spacing={4} display="flex" flexDirection="column" alignContent="center" sx={{ mb: 4 }} >
                        <Detail key={post.titulo} id={post.id} foto={post.foto} fecha={new Date(post?.fecha).toLocaleDateString()} username={post.username} titulo={post.titulo} texto={post.texto} imagenes={post.imagenes} comentarios={post.comentarios} reload={reload} setReload={setReload} editar={editar} setEditar={setEditar} editarPost={editarPost} setEditarPost={setEditarPost} />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    )
};