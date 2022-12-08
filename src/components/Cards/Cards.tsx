import * as React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import s from '../Cards/Cards.module.css'
import { hover } from '@testing-library/user-event/dist/hover';

type Props = {
    name: string,
    img: string,
}



export default function Cards(props: Props) {

    return (
            <Card className={s.card} >
                
                <CardMedia className={s.image} component="img" alt="Provincia" image={props.img}></CardMedia>
                
                <Typography  className={s.typography} gutterBottom align="center" variant="h4">{props.name}</Typography>  
                
                

            </Card>
    );
}