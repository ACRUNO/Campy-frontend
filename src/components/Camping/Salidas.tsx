import Style from "./Salidas.module.css"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { LocationOn as LocationOnIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../store';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Salidas(camp : any) {
  const detailReserv = useSelector((state: RootState) => state.detailReserv);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state,'bottom': open });
      console.log(detailReserv.idRes)
    };
    
  return (
    <div>
           <React.Fragment key={'bottom'}>
            
           <Button sx={{ minWidth: 250, minHeight: 70, fontSize: 25 ,}}  onClick={toggleDrawer('bottom', true)} variant="contained" color="secondary">
                        
                        $  RESERVA YA! 
                           
                           </Button>
         
          <Drawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)} >
             <Box className={Style.container}
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer('bottom', false)}
      onKeyDown={toggleDrawer('bottom', false)}
    >
  
<Box sx={{width : 650}}>
<TableContainer  component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell  sx={{fontSize : 20 , fontWeight : "bold"}} align="center" colSpan={4}>
                         Datos de la reserva con descuentos
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell  sx={{fontSize : 17}}>Fecha de inicio</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell sx={{fontSize : 17}} align="right">12 - 5 - 22 </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>          
            <TableRow key={"row.desc"}>
              <TableCell sx={{fontSize : 17}}>Fecha de finalización</TableCell>
              <TableCell align="right"> </TableCell>
              <TableCell sx={{fontSize : 17}} align="right">12 - 6 - 22</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
                    <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">$100000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight : "bold"}}>Descuento</TableCell>
            <TableCell sx={{ fontWeight : "bold"}} align="right">10%</TableCell>
            <TableCell sx={{ fontWeight : "bold"}} align="right">$10000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{fontSize : 17}} colSpan={2}>Precio Final</TableCell>
            <TableCell sx={{ fontWeight : "bold" , fontSize : 17}} align="right">$ 90000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
</Box>
<Box className={Style.boxizq}> 
<List>
  <Typography  sx={{marginTop : 1}} variant="subtitle1" color="black"> <LocationOnIcon /> Camping El Algarrobal - Córdoba  </Typography>  
  <Box className={Style.tresbox}> 
  <ListItem sx={{minWidth : 300 , marginTop : 1 }}>
  <ListItemAvatar>
    <Avatar>
    <PersonAddAlt1Icon/>
    </Avatar>
  </ListItemAvatar>
  <ListItemText secondary="5" primary="Personas mayores" />
<Divider variant="inset" component="li" />
  </ListItem> 
  <Divider variant="inset" component="li"  />
  <ListItem sx={{minWidth : 300  , marginTop : 1}}>
  <ListItemAvatar>
    <Avatar>
    <ChildCareIcon/>
    </Avatar>
  </ListItemAvatar>
  <ListItemText secondary="3" primary="Niños" />
<Divider variant="inset" component="li" />
  </ListItem> 
  <Divider variant="inset" component="li"  />
  <ListItem sx={{minWidth : 300 , marginTop : 1 }}>
  <ListItemAvatar>
    <Avatar>
    <LocalShippingIcon/>
    </Avatar>
  </ListItemAvatar>
  <ListItemText secondary="NO" primary="Extra por Trailer" />
<Divider variant="inset" component="li" />
  </ListItem> 
</Box>
</List>
  </Box>
  <Box>
<Button sx={{ maxWidth: 90, minHeight: 70, fontSize: 18 }}  variant="contained" color="success">
                                    $ 90000 RESERVA YA! 
                             </Button>
                             </Box>
    </Box> 
          </Drawer>
        </React.Fragment>     
    </div>
  );
}















