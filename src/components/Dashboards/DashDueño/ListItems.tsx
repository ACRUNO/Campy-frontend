import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaceIcon from '@mui/icons-material/Place';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import { Link, Navigate } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import {Collapse} from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {useState} from "react";
import ListAltIcon from '@mui/icons-material/ListAlt';
import EditIcon from '@mui/icons-material/Edit';
import BungalowIcon from '@mui/icons-material/Bungalow';

type Props = {
  setModificar: (value: React.SetStateAction<boolean>) => void,
  setMisdatos: (value: React.SetStateAction<boolean>) => void,
  setReservas: (value: React.SetStateAction<boolean>) => void
}
export default function ListItems(props:Props){

  const handleClickModificar=(e:React.ChangeEvent<unknown>)=>{
    props.setReservas(false);
    props.setMisdatos(false);
    props.setModificar(true)
  }

  const handleClickReservas=(e:React.ChangeEvent<unknown>)=>{
    props.setMisdatos(false)
    props.setModificar(false)
    props.setReservas(true)
  }

  const handleClickMisdatos=(e:React.ChangeEvent<unknown>)=>{
    props.setReservas(false)
    props.setModificar(false)
    props.setMisdatos(true)
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return(
  <React.Fragment>
    <List>
    <ListItemButton onClick={handleClickMisdatos}>
      <ListItemIcon>
        <AccountCircleIcon/>
      </ListItemIcon>
      <ListItemText primary="Mis Datos" />
    </ListItemButton>

     <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <BungalowIcon/>
        </ListItemIcon>
        <ListItemText primary="Mi Camping" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleClickModificar}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Modificar" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={handleClickReservas}>
            <ListItemIcon>
              <ListAltIcon/>
            </ListItemIcon>
            <ListItemText primary="Reservas" />
          </ListItemButton>
          
        </List>
      </Collapse>
    </List>
    </React.Fragment>
    )};