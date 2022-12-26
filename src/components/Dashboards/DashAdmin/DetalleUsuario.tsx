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


type Props = {
    open:boolean
    setopen:(value: React.SetStateAction<boolean>) => void
    id:number
    } 

export default function Detalle_usuario(props:Props) {
  const dispatch: AppDispatch = useDispatch()
  const { bookings, done } = useSelector((state: RootState) => state.userBookings)


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    console.log(newPage)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
 
  const handleClose = () => {
    props.setopen(false);
  };

  useEffect(() => {
     dispatch(getUserBookings(props.id));
    //  return () => {
    //   dispatch(actions.cleanCampings_dash())
    //   console.log("cleancampings")
    // };
  }, [])

 console.log(bookings)
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="md"
        open={props.open}
        onClose={handleClose}
      >
        <DialogTitle>Detalle del usuario {props.id}</DialogTitle>
        <DialogContent>
        <Title>Reservas</Title>
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
          {bookings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((c: Bookings) => (
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
      {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={bookings.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">Cerrar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}