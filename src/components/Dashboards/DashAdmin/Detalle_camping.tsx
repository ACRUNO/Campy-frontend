import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../../store/index';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Bookings } from '../../../reducer/estados';
import { getReservas_Camping, cleanReservas_Camping } from '../../../actions/Dash.admin.action';
import { keyStateBooking } from '../../../auxiliar';
import formatDate from '../../helpers/formatDate';


type Props = {
  open: boolean
  setopen: (value: React.SetStateAction<boolean>) => void
  id: number
  nombre: string
}

export default function Detalle_camping(props: Props) {
  const dispatch: AppDispatch = useDispatch()
  const booking = useSelector((state: RootState) => state.campingBooking)

  const handleClose = () => {
    props.setopen(false);
  };

  useEffect(() => {
    if (props.open) {
      dispatch(getReservas_Camping(props.id))
    };
    return () => {
      dispatch(cleanReservas_Camping())
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
          <Title>Reservas del camping</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Correo Viajeros</TableCell>
                <TableCell>Noches</TableCell>
                <TableCell>Desde</TableCell>
                <TableCell>Hasta</TableCell>
                <TableCell>Total</TableCell>
                <TableCell align="right">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {booking?.map((c: Bookings, i: number) => (
                <TableRow key={i}>
                  <TableCell>{c.email}</TableCell>
                  <TableCell>{c.cant_noches}</TableCell>
                  <TableCell>{formatDate(c.fecha_desde_reserva)}</TableCell>
                  <TableCell>{formatDate(c.fecha_hasta_reserva)}</TableCell>
                  <TableCell>$ {c.total}</TableCell>
                  <TableCell align="right">{keyStateBooking[c.id_estado]}</TableCell>
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