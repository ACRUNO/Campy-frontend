import { Box, Grid, Rating, TextField, Typography } from "@mui/material";
import { borderColor, width } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCampingReviews } from "../../actions/Reviews.action";
import { AppDispatch, RootState } from "../../store";






export function Reviews() {

    const dispatch: AppDispatch = useDispatch()
    const params = useParams()
    const reviews = useSelector((state: RootState) => state.reviews);

    useEffect(() => {
        dispatch(getCampingReviews(params.id));
    }, [dispatch, params.id]);

    console.log(reviews);


    return (
        <Box mt='1%' display='flex' sx={{ width: '100%' }}>
            <Box display='flex' flexDirection='column' justifyContent='flex-start' p='3rem' sx={{ width: '100%' }}>
                <Box pb='1rem'>
                    <Typography
                        variant="h2"
                        sx={{ textDecorationLine:"underline"}}
                    >
                        Reseñas:
                    </Typography>
                </Box>
                <Box alignItems='left' sx={{ width: '70%' }}>
                    {reviews?.map((reviews: { id_camping: number, puntaje: number, username: string, fecha: string, comentario: string }) => {
                        return (
                            <Box display='flex' justifyContent='space-between'>
                                <Box >
                                    <Typography variant="h4">
                                        {reviews.username}
                                    </Typography>
                                    <Box>
                                        {/* <Typography component="legend">Read only</Typography> */}
                                        <Rating name="read-only" value={reviews.puntaje} readOnly />
                                    </Box>
                                </Box>
                                <Box display='flex' alignItems='center'>
                                    <Typography variant="body1">
                                        {reviews.comentario}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}