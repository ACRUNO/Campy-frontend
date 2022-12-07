import * as React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';


type Props = {
    name: string,
    img: string
}



export default function Cards(props: Props) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt="green iguana" height="345" image={props.img}>
            </CardMedia>
            <h2>{props.name}</h2>
        </Card >
    );
}