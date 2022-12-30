import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { VERDE_CLARO, VERDE_OSCURO } from '../../helpers/colors';

type Props = {
  setMisdatos: (value: React.SetStateAction<boolean>) => void,
  setCampings: (value: React.SetStateAction<boolean>) => void
}
export default function ListItems(props:Props){

  const handleClickCampings=(e:React.ChangeEvent<unknown>)=>{
    props.setMisdatos(false)
    props.setCampings(true)
  }

  const handleClickMisdatos=(e:React.ChangeEvent<unknown>)=>{
    props.setCampings(false)
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
        <ListItemButton onClick={handleClickCampings}>
          <ListItemIcon>
            <ListAltIcon  sx={{fill: VERDE_CLARO }} />
          </ListItemIcon>
          <ListItemText primary="Mis Campings" />
        </ListItemButton>
      </List>
    </React.Fragment>
    )};