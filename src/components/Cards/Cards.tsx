import * as React from 'react';
import { useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import s from '../Cards/Cards.module.css'
import { hover } from '@testing-library/user-event/dist/hover';
import { filterProvincia, getCampingsProvincias, getAllCampings } from '../../actions/index'
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from '../../store/index';
import { MouseEvent } from 'react';

type Props = {
    name: string,
    img: string,
    id: number,
    loading?: boolean
}








export default function Cards(props: Props) {

    const { loading = false } = props;

    const dispatch: AppDispatch = useDispatch()







    return (
        <Card className={s.card} sx={{ bgcolor: 'd7d7d7' }} >

            {loading ? (
                <Skeleton className={s.image} animation="wave" variant="rectangular" />
            ) :

                <CardMedia key={props.id} className={s.image} component="img" alt="Provincia" image={props.img}></CardMedia>
            }

            {loading ? (
                <React.Fragment>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
            ) :

                <Typography className={s.typography} gutterBottom align="center" variant="h4">{props.name}</Typography>
            }
        </Card>
    );
}