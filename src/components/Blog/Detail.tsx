import { TextField, Typography, Avatar } from "@mui/material";
import { Box, Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CrearComentario from "./CrearComentario";


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

    return (
        <Grid item xs={12} md={9}>
            <Card sx={{ display: 'flex'}}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h4" pb={4} /* fontSize={30} */>{props.titulo}</Typography>

                    <Grid display="flex" alignItems="center" rowSpacing={3} justifyContent="space-between" pb={3}>
                    <Grid display="flex" alignItems="center">
                    <Avatar src={props.foto}/>
                    <Typography variant="h6" fontWeight="bolder" color="text.secondary" pl={1}>{props.username}</Typography>
                    </Grid>
                    <Typography variant="subtitle1" color="text.secondary">{props.fecha}</Typography>
                    </Grid>

                    <Typography variant="h6" pb={2} fontSize={18}>{props.texto}</Typography>
                    {props.imagenes?.map(e => (
                        <Box sx={{width: '100%'}} pt={1} component="img" src={e}></Box>
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
                            <Avatar src={e.foto}/>
                            <Typography pl={1}><strong>{e.username}</strong></Typography>
                            </Grid>
                            <Typography variant="subtitle1" color="text.secondary" textAlign="right">{new Date(e.createdAt).toLocaleDateString()}</Typography>
                            </Grid>
                            <Typography pt={2}>{e.comentario}</Typography>
                            <ListItem divider></ListItem>
                            </List>
                        </Grid>
                    ))}
                    <CrearComentario id={props.id} reload={props.reload} setReload={props.setReload}/>
                </CardContent>
            </Card>
        </Grid>
    )
}