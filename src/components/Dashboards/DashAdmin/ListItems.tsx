import * as React from 'react';
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

type Props = {
  setCampings: (value: React.SetStateAction<boolean>) => void,
  setMisdatos: (value: React.SetStateAction<boolean>) => void,
  setUsuarios: (value: React.SetStateAction<boolean>) => void
  setEstadisticas: (value: React.SetStateAction<boolean>) => void
}
export default function listItems(props:Props){

  const handleClickCamping=(e:React.ChangeEvent<unknown>)=>{
    props.setEstadisticas(false);
    props.setMisdatos(false);
    props.setUsuarios(false)
    props.setCampings(true)
  }

  const handleClickEstadisticas=(e:React.ChangeEvent<unknown>)=>{
    props.setMisdatos(false)
    props.setUsuarios(false)
    props.setCampings(false)
    props.setEstadisticas(true)
  }

  const handleClickMisdatos=(e:React.ChangeEvent<unknown>)=>{
    props.setUsuarios(false)
    props.setCampings(false)
    props.setEstadisticas(false)
    props.setMisdatos(true)
  }

  const handleClickUsuarios=(e:React.ChangeEvent<unknown>)=>{
    props.setCampings(false)
    props.setEstadisticas(false)
    props.setMisdatos(false)
    props.setUsuarios(true)
  }



  return(
    <React.Fragment>
    <List>
    <ListItemButton onClick={handleClickMisdatos}>
      <ListItemIcon>
        <AccountCircleIcon/>
      </ListItemIcon>
      <ListItemText primary="Mis Datos" />
    </ListItemButton>
    <ListItemButton onClick={handleClickCamping}>
      <ListItemIcon>
        <HolidayVillageIcon />
      </ListItemIcon>
      <ListItemText primary="Campings" />
    </ListItemButton>
    <ListItemButton onClick={handleClickUsuarios}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItemButton>
    <ListItemButton onClick={handleClickEstadisticas}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Estadisticas" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <PlaceIcon />
      </ListItemIcon>
      <ListItemText primary="Localidades" />
    </ListItemButton> */}
    </List>
  </React.Fragment>
)} ;

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );