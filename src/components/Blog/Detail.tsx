import { Button, Typography, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CrearComentario from "./CrearComentario";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/index';
import { useParams } from "react-router-dom";
import { deleteComentario, deletePost, modificarComentario, modificarPost } from "../../actions/Blog.action";
import { userTypes } from "../../auxiliar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, TextField } from '@mui/material'
import Cloudinary from "./Cloudinary";
import formatDate from "../helpers/formatDate";

interface PostDetail {
    reload: number,
    setReload: React.Dispatch<React.SetStateAction<number>>
}

let img: Array<string> = ["1", "2", "3"]

export default function Detail(props: PostDetail) {

    const navigate = useNavigate()
    const params = useParams();
    const dispatch: AppDispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user);
    const [comentarioEditado, setComentarioEditado] = useState('')
    const [postEditado, setPostEditado] = useState('')
    const [postImagenesEditado, setPostImagenesEditado] = useState([''])
    const [editar, setEditar] = useState(false)
    const [editarPost, setEditarPost] = useState(false)
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


    const [comentarioEditar, setComentarioEditar] = useState({ id: 0, username: "", foto: "", comentario: "", createdAt: "" })


    const [input, setInput] = useState<{ imagenes: string[] }>({
        imagenes: []
    })

    const handleDeleteComentario = (e: React.ChangeEvent<unknown>, id: number) => {
        e.preventDefault();
        dispatch(deleteComentario(id, user.token));
        props.setReload(props.reload + 1)
    }

    const handleDeletePost = (e: React.ChangeEvent<unknown>) => {
        e.preventDefault();
        dispatch(deletePost(params.id, user.token));
        navigate("/blog")
    }

    const handleClickOpenDialogoPost = (e: React.ChangeEvent<unknown>) => {
        e.preventDefault();
        setEditarPost(true)
    }

    const handleClickOpenDialogoComentario = (e: React.ChangeEvent<unknown>, comentario: any) => {
        e.preventDefault();
        setComentarioEditar({
            ...comentarioEditar,
            id: comentario.id,
            username: comentario.username,
            foto: comentario.foto,
            comentario: comentario.comentario,
            createdAt: comentario.createdAt
        })
        setEditar(true)
    }


    const handleEditComentario = (e: React.ChangeEvent<unknown>, comentario: any) => {
        e.preventDefault();
        dispatch(modificarComentario(comentario.id, user.token, comentarioEditado))
        setEditar(false)
        props.setReload(props.reload + 1)
    }

    const handleModificacionComentario = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setComentarioEditado(e.target.value)
    }

    const handleModificacionPost = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setPostEditado(e.target.value)
        setPostImagenesEditado([...postImagenesEditado, e.target.value])
    }

    const handleEditPost = (e: React.ChangeEvent<unknown>, id: number) => {
        e.preventDefault();
        console.log(id)
        dispatch(modificarPost(id, user.token, postEditado, input, () => { props.setReload(props.reload + 1); setInput({ imagenes: [] }) }))

        setEditarPost(false)

    }

    return (
        <Grid item xs={12} md={6} width={750}>
            <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1, width: 600 }}>
                    <Grid sx={{ display: 'flex', justifyContent: "space-between" }}>
                        <Typography component="h2" variant="h4" pb={3}>{post.titulo}</Typography>
                        <Grid sx={{ display: 'flex' }} pb={3}>

                            {user && user.username === post.username &&
                                <Button onClick={e => handleClickOpenDialogoPost(e)} size="small" variant="outlined" color="secondary" id="Editar">Editar</Button>}

                            {user && user.tipo === userTypes.ADMIN &&
                                <IconButton onClick={e => { handleDeletePost(e) }} aria-label="delete" size="large" color="error">
                                    <DeleteIcon fontSize="inherit" />
                                </IconButton>}
                        </Grid>
                    </Grid>
                    <Grid display="flex" alignItems="center" rowSpacing={3} justifyContent="space-between" pb={3}>
                        <Grid display="flex" alignItems="center">
                            <Avatar src={post.foto} />
                            <Typography variant="h6" fontWeight="bolder" color="text.secondary" pl={1}>{post.username}</Typography>
                        </Grid>
                        <Typography variant="subtitle1" color="text.secondary">{formatDate(post.fecha)}</Typography>
                    </Grid>

                    <Typography variant="h6" pb={2} fontSize={18}>{post.texto}</Typography>
                    {post.imagenes?.map(e => (
                        <Box sx={{ width: '100%' }} pt={1} component="img" src={e}></Box>
                    ))}
                </CardContent>
            </Card>
            <Card sx={{ display: 'flex', mt: '10px' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h5" pb={2}>Comentarios</Typography>
                    {post.comentarios?.map((e, i) => (
                        <Grid>
                            <List>
                                <Grid display="flex" justifyContent="space-between" alignItems="center">
                                    <Grid display="flex" alignItems="center" rowSpacing={3}>
                                        <Avatar src={e.foto} />
                                        <Typography pl={1}><strong>{e.username}</strong></Typography>
                                    </Grid>
                                    <Typography variant="subtitle1" color="text.secondary" textAlign="right">{new Date(e.createdAt).toLocaleDateString()}</Typography>
                                </Grid>
                                <Typography pt={2}>{e.comentario}</Typography>
                                <Grid display="flex" justifyContent="flex-end">

                                    {user && user.username === e.username &&
                                        <Button onClick={event => handleClickOpenDialogoComentario(event, e)} size="small" variant="outlined" color="secondary" id="Editar">Editar</Button>}

                                    {user && user.tipo === userTypes.ADMIN && <IconButton aria-label="delete" size="small" color="error">
                                        <DeleteIcon onClick={(error) => handleDeleteComentario(error, e.id)} fontSize="small" />
                                    </IconButton>}
                                </Grid>
                                <ListItem divider></ListItem>
                            </List>
                        </Grid>
                    ))}
                    {/* DIALOGO DE EDITAR COMENTARIO */}
                    {editar && <Dialog
                        onClose={() => setEditar(false)}
                        fullWidth
                        maxWidth="md"
                        open={editar}>
                        <DialogTitle align='center'>Editar Comentario</DialogTitle>
                        <DialogContent >
                            <Grid container spacing={2} display="flex" flexDirection="column" alignItems="stretch" sx={{ mt: 1, pr: 2 }} >
                                <Grid item xs={12}>
                                    <TextField
                                        color="secondary"
                                        required
                                        fullWidth
                                        id="Comentario"
                                        label="Comentar"
                                        name="Comentario"
                                        multiline
                                        minRows={5}
                                        onChange={handleModificacionComentario}
                                        defaultValue={comentarioEditar.comentario}
                                    />
                                </Grid>
                                <Grid display="flex" justifyContent="flex-end" sx={{ mt: 1 }}>
                                    <Button onClick={(error) => handleEditComentario(error, comentarioEditar)} color="success" variant='contained' id='Editar' sx={{ mt: 1 }} value="Editar comentario">Enviar</Button>
                                </Grid>
                            </Grid>
                        </DialogContent>
                    </Dialog>}
                    {/* DIALOGO DE EDITAR POST */}
                    {editarPost && <Dialog
                        onClose={() => setEditarPost(false)}
                        fullWidth
                        maxWidth="md"
                        open={editarPost}>
                        <DialogTitle align='center'>Editar Post</DialogTitle>
                        <DialogContent >
                            <Grid container spacing={2} display="flex" flexDirection="column" alignItems="stretch" sx={{ mt: 1, pr: 2 }} >
                                <Grid item xs={12}>
                                    <TextField
                                        color="secondary"
                                        required
                                        fullWidth
                                        id="Post"
                                        label="Post"
                                        name="Post"
                                        multiline
                                        minRows={6}
                                        onChange={handleModificacionPost}
                                        defaultValue={post.texto}
                                    />
                                    <Grid container columnSpacing={2} justifyContent="center" sx={{ mt: 4, ml: 0 }}>
                                        {img.map(m => (
                                            <Grid item key={m}>
                                                <Box
                                                    id={m}
                                                    component="img"
                                                    sx={{
                                                        ml: "1%",
                                                        bgcolor: "white",
                                                        height: 200,
                                                        width: 200
                                                    }}
                                                    alt="Logo"
                                                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png"}
                                                /* defaultValue= */
                                                />
                                            </Grid>
                                        ))}
                                        <Cloudinary setInput={setInput}></Cloudinary>
                                    </Grid>
                                    <Grid display="flex" justifyContent="flex-end" sx={{ mt: 1 }}>
                                        <Button onClick={(error) => handleEditPost(error, post.id)} color="success" variant='contained' id='Editar' sx={{ mt: 1 }} value="Editar comentario">Enviar</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </DialogContent>
                    </Dialog>}
                    <CrearComentario id={Number(params.id)} reload={props.reload} setReload={props.setReload} />
                </CardContent>
            </Card>
        </Grid>
    )
}