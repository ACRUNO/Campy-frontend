import * as React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import s from '../Cards/Cards.module.css'

type Props = {
    name: string,
    img: string
}



export default function Cards(props: Props) {

    return (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt="Bariloche" height="345" image={props.img}>
                </CardMedia>
                <h2>{props.name}</h2>
            </Card>
    );
}