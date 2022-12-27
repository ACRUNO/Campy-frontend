import { useEffect, useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Dialog, Table, TableRow, TableHead, TableBody, TablePagination, TableCell, Button } from '@mui/material/';
import {Grid, Paper} from "@mui/material";
import Title from './../Title';
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from '../../../../store/index';
import { getOwnerBookings } from '../../../../actions/User.action';
import { Bookings } from '../../../../reducer/estados';
import { Cancel as CancelIcon } from '@mui/icons-material';
import s from './Reservas.module.css';

type Props = { 
  setOpenReserves: Dispatch<SetStateAction<{open: boolean, campingId: number}>>;
  open: boolean;
  campingId: number;
}

export default function Reservas({open, campingId, setOpenReserves}: Props) {
  const dispatch: AppDispatch = useDispatch()
  const { bookings, done } = useSelector((state: RootState) => state.userBookings)
  const { token }: { id: number, token: string } = useSelector((state: RootState) => state.user)  

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    dispatch(getOwnerBookings(campingId, token))
  }, [])
  
  return (
    <Dialog open={open} className={s['reserve-container']}>
        <Grid item xs={12} >
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  
                
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
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={bookings.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
        <CancelIcon 
          onClick={() => setOpenReserves({open: false, campingId: 0})} 
          className={s['close-button']} 
        />
      </Grid>
    </Dialog>
  );
}