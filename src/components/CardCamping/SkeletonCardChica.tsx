import { Card, CardMedia, Typography, Skeleton, Rating } from '@mui/material';
import s from '../Cards/Cards.module.css'

export default function Cards() {


    return (
        <Card>
            <CardMedia> <Skeleton animation="wave" variant="rectangular" sx={{ height: "16rem", width: "25rem" }}></Skeleton> </CardMedia>
            <Typography className={s.typography} gutterBottom align="center" variant="h4"> <Skeleton sx={{ ml: "5rem", mr: "5rem" }} /></Typography>
            <Typography gutterBottom align="left" variant="subtitle1" sx={{ ml: "5rem", mr: "5rem" }}> <Skeleton></Skeleton></Typography>
            <Typography gutterBottom align="left" variant="subtitle1"> <Skeleton sx={{ ml: "5rem", mr: "5rem" }}></Skeleton></Typography>


        </Card>
    );
}