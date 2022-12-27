import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from '../../../store/index';
import { getUserBookings } from '../../../actions/User.action';
import { Bookings } from '../../../reducer/estados';
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Title from './Title';
import { cleanUsuarios_dash } from '../../../actions/Dash.admin.action';


type Props = {
    open:boolean
    setopen:(value: React.SetStateAction<boolean>) => void
    id:number
    nombre: string
    } 

export default function Detalle_usuario(props:Props) {
  const dispatch: AppDispatch = useDispatch()
  const { bookings, done } = useSelector((state: RootState) => state.userBookings)
 
  const handleClose = () => {
    props.setopen(false);
  };

  useEffect(() => {
     if(props.open){  
     dispatch(getUserBookings(props.id))};
     return () => {
      dispatch(cleanUsuarios_dash())
    };
  }, [props.open])


  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="md"
        open={props.open}
        onClose={handleClose}
      >
        <DialogTitle>{props.nombre}</DialogTitle>
        <DialogContent>
        <Title>Reservas del usuario</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre Camping</TableCell>
            <TableCell>Correo Propietario</TableCell>
            <TableCell>Desde</TableCell>
            <TableCell>Hasta</TableCell>
            <TableCell>Total</TableCell>
            <TableCell align="right">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings?.map((c: Bookings) => (
            <TableRow key={c.id}>
              <TableCell>{c.nombre_camping}</TableCell>
              <TableCell>{c.correo_prop}</TableCell>
              <TableCell>{new Date(c.fecha_desde_reserva).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(c.fecha_hasta_reserva).toLocaleDateString()}</TableCell>
              <TableCell>$ {c.total}</TableCell>
              <TableCell align="right">{c.descrip_estado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">Cerrar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}