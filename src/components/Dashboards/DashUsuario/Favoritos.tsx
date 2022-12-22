import {Box, Grid, Paper, Card, CardMedia, Typography} from "@mui/material";
import Title from './Title';
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from '../../../store/index';
import { useEffect, useState } from "react";
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

  const { token, id }: { token: string, id: number } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if(!favorites.length && !done) dispatch(getUserFavoriteCampings(id, token));
  }, [favorites])
  
  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Title>Mis Campings Favoritos</Title>
          <Box className={s['cards-container']}>
            {
              favorites.map((camping, i) => (
                <Card className={s['card-container']} key={i}>
                  <CardMedia className={s['card-image']} component="img" alt="Provincia" image={camping.imagen}/>
                  <Typography 
                    onClick={() => navigate(`/booking/camping/${camping.id}`)} 
                    className={s['card-title']} 
                    align="center" 
                    variant="h4"
                  >{camping.nombre}</Typography>
                  <ClearIcon 
                    className={s['card-remove-icon']} 
                    onClick={() => dispatch(removeFavoriteCamping(camping.id, token))}
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