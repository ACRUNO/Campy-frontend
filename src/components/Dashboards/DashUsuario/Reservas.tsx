import { useEffect, useState, ChangeEvent } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid, Paper } from "@mui/material";
import Title from './Title';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../../store/index';
import TablePagination from '@mui/material/TablePagination';
import { getUserBookings } from '../../../actions/User.action';
import { Bookings } from '../../../reducer/estados';
import { keyStateBooking } from '../../../auxiliar';


export default function Reservas() {
  const dispatch: AppDispatch = useDispatch()
  const { bookings, done } = useSelector((state: RootState) => state.userBookings)
  const { id, token }: { id: number, token: string } = useSelector((state: RootState) => state.user)

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if (!bookings.length && !done) dispatch(getUserBookings(id, token));
  }, [bookings])

  return (
    <>
      <Grid item xs={12}>
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
                  <TableCell>{c.email}</TableCell>
                  <TableCell>{new Date(c.fecha_desde_reserva).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(c.fecha_hasta_reserva).toLocaleDateString()}</TableCell>
                  <TableCell>$ {c.total}</TableCell>
                  <TableCell align="right">{keyStateBooking[c.id_estado]}</TableCell>
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
      </Grid>
    </>
  );
}