import { Box, Dialog, DialogContent, DialogTitle, Grid, Rating, TextField, Typography } from "@mui/material";
import React from "react";
import Style from "../Camping/Camping.module.css"
import Portada from "../Camping/banner1.webp"

export function DejarReviews() {


    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState<number | null>(0);



    return (
        <Grid>
            <Dialog
                fullWidth
                maxWidth="md"
                open={open}>
                <DialogTitle align='center'>Subiendo Review...</DialogTitle>
                <DialogContent >
                    <Box
                        component="img"
                        alt="imagen"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    />
                </DialogContent>
            </Dialog>

            <Box className={Style.all}>
                <Box className={Style.portadacont}>
                    <Box
                        component="img"
                        className={Style.imagencita}
                        alt="Logo"
                        src={Portada}
                    />
                    <Box className={Style.text}>
                        <Typography variant="h1" color="primary">
                            {/* {camp.nombre_camping} */}
                        </Typography>
                        <Box className={Style.rankingcont}>
                            <Typography color="primary" component="legend">Ranking</Typography>
                            {/* <Rating name="read-only" value={value} readOnly /> */}
                        </Box>
                    </Box>
                    {/* {
                        user && user.tipo === userTypes.USER &&
                        <FavoriteIcon
                            onClick={!favorite ? () => {
                                if (params.id) dispatch(addFavoriteCamping(Number(params.id), user.token));
                                setFavorite(true)
                            } : undefined}
                            className={`${Style['add-fav']} ${favorite ? Style.heart : ''}`.trim()}
                        />
                    } */}
                </Box>
            </Box>
            <Typography align="center" variant='h3' sx={{ mt: 2 }}>Formulario</Typography>
            <Grid container spacing={2} display="flex" flexDirection="column" alignItems="stretch" sx={{ mt: 2, pr: 6, pl: 6 }} >
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Typography component="legend">Puntuacion: </Typography>
                    <Rating
                        name="simple-controlled"
                        size="large"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Box>
                <Grid item xs={12}>
                    <TextField
                        color="secondary"
                        required
                        fullWidth
                        id="Texto"
                        label="Texto"
                        name="Texto"
                        multiline
                        minRows={10}
                    // onChange={(e) => { handleChangeTexto(e) }}
                    />
                </Grid>

            </Grid>

        </Grid>
    )

}