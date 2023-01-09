import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from "react-redux";
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
import formatDate from '../../helpers/formatDate';
import s from './DetalleUsuario.module.css';


type Props = {
  open: boolean
  setopen: (value: React.SetStateAction<boolean>) => void
  id: number
  nombre: string
}

export default function Detalle_usuario(props: Props) {
  const dispatch: AppDispatch = useDispatch()
  const { token } = useSelector((state: RootState) => state.user)
  const { bookings, done } = useSelector((state: RootState) => state.userBookings)

  const handleClose = () => {
    props.setopen(false);
  };

  useEffect(() => {
    if (props.open) {
      dispatch(getUserBookings(props.id, token))
    };
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
                <TableCell className={s['table-head']}>Nombre Camping</TableCell>
                <TableCell className={s['table-head']}>Correo Propietario</TableCell>
                <TableCell className={s['table-head']}>Desde</TableCell>
                <TableCell className={s['table-head']}>Hasta</TableCell>
                <TableCell className={s['table-head']}>Total</TableCell>
                <TableCell className={s['table-head']} align="right">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings?.map((c: Bookings) => (
                <TableRow key={c.id}>
                  <TableCell className={s['table-row']}>{c.nombre_camping}</TableCell>
                  <TableCell className={s['table-row']}>{c.email}</TableCell>
                  <TableCell className={s['table-row']}>{formatDate(c.fecha_desde_reserva)}</TableCell>
                  <TableCell className={s['table-row']}>{formatDate(c.fecha_hasta_reserva)}</TableCell>
                  <TableCell className={s['table-row']}>$ {c.total}</TableCell>
                  <TableCell className={`${s['table-row']} ${s['ver-detalle']}`} align="right">{c.estado}</TableCell>
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