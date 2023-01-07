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
import { deletePost, deleteComentario, modificarComentario } from "../../actions/Blog.action";
import { userTypes } from "../../auxiliar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, TextField } from '@mui/material'

interface PostDetail {
    id: number,
    foto: string,
    username: string,
    fecha: string,
    titulo: string,
    texto: string,
    imagenes: Array<string>,
    comentarios: { id: number, username: string, foto: string, comentario: string, createdAt: string }[]
    reload: number,
    setReload: React.Dispatch<React.SetStateAction<number>>
}

export default function Detail(props: PostDetail) {

    const [editar, setEditar] = useState(false)

    const navigate = useNavigate()
    const params = useParams();
    const dispatch: AppDispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user);

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

    const handleClick = (e: React.ChangeEvent<unknown>) => {
        e.preventDefault();
        setEditar(true)
        console.log(editar);
        
    }

    return (
        <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Grid sx={{ display: 'flex', justifyContent: "space-between" }} >
                        <Typography component="h2" variant="h4" pb={3}>{props.titulo}</Typography>
                        <Grid sx={{ display: 'flex' }} pb={3}>
                            {user && user.username === props.username && <Button onClick={e => handleClick(e)} size="small" variant="outlined" color="secondary" id="Editar">Editar</Button>}
                            {user && user.tipo === userTypes.ADMIN && <IconButton onClick={e => { handleDeletePost(e) }} aria-label="delete" size="large" color="error">
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>}
                        </Grid>
                    </Grid>
                    <Grid display="flex" alignItems="center" rowSpacing={3} justifyContent="space-between" pb={3}>
                        <Grid display="flex" alignItems="center">
                            <Avatar src={props.foto} />
                            <Typography variant="h6" fontWeight="bolder" color="text.secondary" pl={1}>{props.username}</Typography>
                        </Grid>
                        <Typography variant="subtitle1" color="text.secondary">{props.fecha}</Typography>
                    </Grid>

                    <Typography variant="h6" pb={2} fontSize={18}>{props.texto}</Typography>
                    {props.imagenes?.map(e => (
                        <Box sx={{ width: '100%' }} pt={1} component="img" src={e}></Box>
                    ))}
                </CardContent>
            </Card>
            <Card sx={{ display: 'flex', mt: '10px' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h5" pb={2}>Comentarios</Typography>
                    {props.comentarios?.map((e) => (
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
                                        <Button size="small" variant="outlined" color="secondary" id="Editar">Editar</Button>}

                                    {user && user.tipo === userTypes.ADMIN && <IconButton aria-label="delete" size="small" color="error">
                                        <DeleteIcon onClick={(error) => handleDeleteComentario(error, e.id)} fontSize="small" />
                                    </IconButton>}

                                </Grid>
                                <ListItem divider></ListItem>
                            </List>
                        </Grid>
                    ))}
                    <CrearComentario id={props.id} reload={props.reload} setReload={props.setReload} />
                </CardContent>
            </Card>
            {editar && <Dialog
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
                            />
                        </Grid>
                        <Grid display="flex" justifyContent="flex-end" sx={{ mt: 1 }}>
                            <Button color="success" variant='contained' id='Crear' sx={{ mt: 1 }} value="Crear comentario">Enviar</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>}
        </Grid>
    )
}