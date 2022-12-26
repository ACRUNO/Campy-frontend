import { Backdrop, Box, Button, Fade, Grid, Modal, Rating, TextField, Typography } from "@mui/material";
import { borderColor, width } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCampingReviews } from "../../actions/Reviews.action";
import { AppDispatch, RootState } from "../../store";



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export function Reviews() {

    const dispatch: AppDispatch = useDispatch()
    const params = useParams()
    const reviews = useSelector((state: RootState) => state.reviews);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        dispatch(getCampingReviews(params.id));
    }, [dispatch, params.id]);

    console.log(reviews);


    return (
        <div>
            <Button onClick={handleOpen} color='secondary' variant='contained'>Mostrar Reseñas</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box mt='1%' display='flex' sx={style}>
                        <Box display='flex' flexDirection='column' justifyContent='flex-start' p='2rem' sx={{ width: '100%' }}>
                            <Box pb='3rem' alignItems='center'>
                                <Typography
                                    variant="h2"
                                    sx={{ textDecorationLine: "underline" }}
                                    textAlign='center'
                                >
                                    Reseñas:
                                </Typography>
                            </Box>
                            <Box alignItems='left' sx={{ width: '100%' }}>
                                {reviews?.map((reviews: { id_camping: number, puntaje: number, username: string, fecha: string, comentario: string }) => {
                                    return (
                                        
                                        <Box >
                                            <Box display='flex' justifyContent='space-between'>
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
                                            <hr></hr>
                                        </Box>
                                        
                                    )
                                })}
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}