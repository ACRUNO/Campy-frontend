import { TextField, Typography, Avatar } from "@mui/material";
import { Box, Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


interface PostDetail {
    id: number,
    foto: string,
    username: string,
    fecha: string,
    titulo: string,
    texto: string,
    imagenes: Array<string>,
    comentarios: { username: string, foto: string, comentario: string, createdAt: string }[]
}

export default function Detail(props: PostDetail) {

    return (
        <Grid item xs={12} md={10} rowSpacing={2}>
            <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h3">{props.titulo}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">{props.fecha} - {props.username} <Avatar src={props.foto}/></Typography>
                    <Typography variant="h6" pb={3}>{props.texto}</Typography>
                    {props.imagenes?.map(e => (
                        <Box sx={{width: '100%'}} pt={1} component="img" src={e}></Box>
                    ))}
                </CardContent>
            </Card>
            <Card sx={{ display: 'flex', mt: '10px' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">Comentarios</Typography>
                    {props.comentarios?.map((e) => (
                        <Grid>
                            <List>
                            <Typography variant="subtitle1" color="text.secondary">{new Date(e.createdAt).toLocaleDateString()}</Typography>
                            <Grid>
                            <Avatar src={e.foto}/>
                            <Typography><strong>{e.username}</strong>: {e.comentario}</Typography>
                            </Grid>
                            <ListItem divider></ListItem>
                            </List>
                        </Grid>
                    ))}
                </CardContent>
            </Card>
        </Grid>
    )
}