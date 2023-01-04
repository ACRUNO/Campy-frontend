import { Card, CardMedia, Typography } from '@mui/material';
import s from '../Cards/Cards.module.css'

type Props = {
    name: string,
    img: string,
    id: number,
}

export default function Cards(props: Props) {

    return (
        <Card className={s.card} sx={{ bgcolor: 'd7d7d7' }} >

            <CardMedia key={props.id} className={s.image} component="img" alt="Provincia" image={props.img}></CardMedia>

            <Typography className={s.typography} gutterBottom align="center" variant="h4">{props.name}</Typography>

        </Card>
    );
}