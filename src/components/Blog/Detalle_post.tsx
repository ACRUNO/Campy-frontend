import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../store/index';
import { useEffect } from "react";
import { getPostById } from "../../actions/Blog.action";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';



export default function Detalle() {

    const params = useParams();
    const dispatch: AppDispatch = useDispatch();

    const post: {
        id: number,
        username: string,
        fecha: string,
        titulo: string,
        texto: string,
        imagenes: Array<string>,
        comentarios: { username: string, comentario: string, createdAt: string }[]
    }[] = useSelector((state: RootState) => state.post)

    useEffect(() => {
        dispatch(getPostById(params.id))
    }, [dispatch, params.id])
    console.log(post);

    return (
            <Typography>Hola, soy el detalle del post {post[0]?.fecha}  </Typography>
    )
}