import { Box, Grid, Paper, Card, CardMedia, Typography, Link } from "@mui/material";
import Title from './Title';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../../store/index';
import { useEffect, useState, ChangeEvent, MouseEvent } from "react";
import { getUserFavoriteCampings, removeFavoriteCamping } from '../../../actions/User.action';
import { Clear as ClearIcon } from "@mui/icons-material";
import s from './Favoritos.module.css';
import { useNavigate } from "react-router-dom";



export default function Favoritos() {

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { done, favorites }:
    { done: boolean, favorites: { id: number, nombre: string, imagen: string }[] } =
    useSelector((state: RootState) => state.favoritesCampings);

  const { token }: { token: string, id: number } = useSelector((state: RootState) => state.user);

  const handleClick = (e: any, campingId: number) =>
    !(e.target.closest('svg'))
      ? navigate(`/booking/camping/${campingId}`)
      : dispatch(removeFavoriteCamping(campingId, token))


  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
          <Title>Mis Campings Favoritos</Title>
          <Box className={s['cards-container']}>
            {
              favorites.map((camping, i) => (
                <Card className={s['card-container']} key={i}
                  onClick={(e: MouseEvent<EventTarget>) => handleClick(e, camping.id)}>
                  <CardMedia className={s['card-image']} component="img" alt="Provincia" image={camping.imagen} />
                  <Typography
                    className={s['card-title']}
                    align="center"
                    variant="h4"
                  >{camping.nombre}</Typography>
                  <ClearIcon
                    className={s['card-remove-icon']}
                  />
                </Card>
              ))
            }
          </Box>
        </Paper>
      </Grid>
    </>
  );
}