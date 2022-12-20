import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { VERDE_CLARO, VERDE_OSCURO } from '../../helpers/colors';

type Props = {
  setFavoritos: (value: React.SetStateAction<boolean>) => void,
  setMisdatos: (value: React.SetStateAction<boolean>) => void,
  setReservas: (value: React.SetStateAction<boolean>) => void
}
export default function ListItems(props:Props){

  const handleClickFavoritos=(e:React.ChangeEvent<unknown>)=>{
    props.setReservas(false);
    props.setMisdatos(false);
    props.setFavoritos(true)
  }

  const handleClickReservas=(e:React.ChangeEvent<unknown>)=>{
    props.setMisdatos(false)
    props.setFavoritos(false)
    props.setReservas(true)
  }

  const handleClickMisdatos=(e:React.ChangeEvent<unknown>)=>{
    props.setReservas(false)
    props.setFavoritos(false)
    props.setMisdatos(true)
  }


  return(
  <React.Fragment>
    <List>
    <ListItemButton onClick={handleClickMisdatos}>
      <ListItemIcon>
        <AccountCircleIcon sx={{fill: VERDE_CLARO }} />
      </ListItemIcon>
      <ListItemText primary="Mis Datos" />
    </ListItemButton>
    <ListItemButton onClick={handleClickFavoritos}>
      <ListItemIcon>
        <FavoriteIcon  sx={{fill: VERDE_CLARO }} />
      </ListItemIcon>
      <ListItemText primary="Mis Favoritos" />
    </ListItemButton>
    <ListItemButton onClick={handleClickReservas}>
      <ListItemIcon>
        <ListAltIcon  sx={{fill: VERDE_CLARO }} />
      </ListItemIcon>
      <ListItemText primary="Mis Reservas" />
    </ListItemButton>
    </List>
    </React.Fragment>
    )};