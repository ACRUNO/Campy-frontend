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
import { Margin } from '@mui/icons-material';

type Props = {
    name: string,
    img: string,
    id: number,
}








export default function Cards(props: Props) {



    const dispatch: AppDispatch = useDispatch()







    return (



        <Card>
        
             <CardMedia> <Skeleton animation="wave" variant="rectangular" sx={{height:"16rem", width:"25rem"}}></Skeleton> </CardMedia>
        
            <Typography className={s.typography} gutterBottom align="center" variant="h4"> <Skeleton sx={{ml:"1rem", mr:"1rem"}}/></Typography>
            
        </Card>
            
        
    );
}