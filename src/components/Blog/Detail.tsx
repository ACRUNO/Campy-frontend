import { TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

interface PostDetail {
    id: number,
    username: string,
    fecha: string,
    titulo: string,
    texto: string,
    imagenes: Array<string>,
    comentarios: { username: string, comentario: string, createdAt: string }[]
}

export default function Detail(props: PostDetail) {

    return (
        <Grid item xs={12} md={10} rowSpacing={2}>
            <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h3">{props.titulo}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">{props.fecha} - {props.username}</Typography>
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
                            <Typography>{new Date(e.createdAt).toLocaleDateString()}</Typography>
                            <Typography><strong>{e.username}</strong>: {e.comentario}</Typography>
                        </Grid>
                    ))}
                </CardContent>
            </Card>
        </Grid>
    )
}