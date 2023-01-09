import { useEffect, useState, ChangeEvent } from 'react';
import Table from '@mui/material/Table';
import { Replay as ReplayIcon } from '@mui/icons-material';
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
import formatDate from '../../helpers/formatDate';
import s from './Reservas.module.css';
import DetalleReserva from '../DetalleReserva/DetalleReserva';
import { VERDE, VERDE_CLARO, VERDE_OSCURO } from '../../helpers/colors';


export default function Reservas() {
  const dispatch: AppDispatch = useDispatch()
  const { bookings, done } = useSelector((state: RootState) => state.userBookings)
  const { id, token }: { id: number, token: string } = useSelector((state: RootState) => state.user)

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDetalleReserva, setOpenDetalleReserva] =
    useState({ open: false, reservaId: 0 })

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
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', position: 'relative' }}>


          <Title>Reservas</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell className={s['table-head']}>Creado</TableCell>
                <TableCell className={s['table-head']}>Nombre Camping</TableCell>
                <TableCell className={s['table-head']}>Correo Propietario</TableCell>
                <TableCell className={s['table-head']}>Desde</TableCell>
                <TableCell className={s['table-head']}>Hasta</TableCell>
                <TableCell className={s['table-head']}>Total</TableCell>
                <TableCell className={s['table-head']} align="right">Estado</TableCell>
                <TableCell className={s['table-head']} align="right">Detalle</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((c: Bookings) => (
                <TableRow key={c.id}>
                  <TableCell className={s['table-row']}>{formatDate(c.fecha)}</TableCell>
                  <TableCell className={s['table-row']}>{c.nombre_camping}</TableCell>
                  <TableCell className={s['table-row']}>{c.email}</TableCell>
                  <TableCell className={s['table-row']}>{formatDate(c.fecha_desde_reserva)}</TableCell>
                  <TableCell className={s['table-row']}>{formatDate(c.fecha_hasta_reserva)}</TableCell>
                  <TableCell className={s['table-row']}>$ {c.total}</TableCell>
                  <TableCell className={`${s['table-row']} ${s[c.estado]}`} align="right">{c.estado}</TableCell>
                  <TableCell
                    className={`${s['table-row']} ${s['ver-detalle']}`}
                    onClick={() => setOpenDetalleReserva({ open: true, reservaId: c.id })}
                  >Ver</TableCell>
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
          <ReplayIcon
            sx={{
              position: 'absolute',
              top: 15,
              right: 15,
              cursor: 'pointer',
              fontSize: "2rem",
              fill: VERDE,
              "&:hover": { fill: VERDE_OSCURO }
            }}

            onClick={() => dispatch(getUserBookings(id, token))}
          />
        </Paper>
      </Grid>
      <DetalleReserva
        open={openDetalleReserva.open}
        reservaId={openDetalleReserva.reservaId}
        setOpenDetalleReserva={setOpenDetalleReserva}
      />
    </>
  );
}