import { useEffect, useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Dialog, Table, TableRow, TableHead, TableBody, TablePagination, TableCell, Button, Typography } from '@mui/material/';
import { Grid, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from '../../../../../store/index';
import { Bookings } from '../../../../../reducer/estados';
import { Cancel as CancelIcon } from '@mui/icons-material';
import s from './Reservas.module.css';
import axios from 'axios';
import { keyStateBooking, stateBooking } from '../../../../../auxiliar';
import { VERDE } from '../../../../helpers/colors';
import { CircularProgress } from '@mui/material';
import BasicMenu from '../../../../helpers/BasicMenu';
import { confirmReserva } from '../../../../../actions/Owner.action';
import DetalleReserva from './DetalleReserva/DetalleReserva';
import formatDate from '../../../../helpers/formatDate';

type Props = {
  setOpenReserves: Dispatch<SetStateAction<{ open: boolean, campingId: number }>>;
  open: boolean;
  campingId: number;
}

export default function Reservas({ open, campingId, setOpenReserves }: Props) {
  const { token }: { id: number, token: string } = useSelector((state: RootState) => state.user)
  const [ownerBookings, setOwnerBookings] =
    useState<{ bookings: Bookings[], done: boolean }>({ bookings: [], done: false });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDetalleReserva, setOpenDetalleReserva] =
    useState({ open: false, reservaId: 0 })

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getOwnerBookings = async () => {
    const { data }: { data: Bookings[] } = await axios.get(`/api/reservas/${campingId}`,
      {
        headers: { authorization: token }
      });

    setOwnerBookings({ bookings: data, done: true });
  };

  useEffect(() => {
    if (campingId) getOwnerBookings();

    return () => setOwnerBookings({ bookings: [], done: false })
  }, [campingId]);

  return (
    <Dialog open={open} className={s['reserve-container']} maxWidth={false}>
      <Grid item xs={12} >
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', minWidth: '200px', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ fontSize: '2rem', color: VERDE, mt: 2 }}>
            Reservas
          </Typography>
          {
            !ownerBookings.bookings.length && !ownerBookings.done
              ? <CircularProgress sx={{ color: VERDE, textAlign: 'center', mt: 2 }} />
              :
              <>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className={s['table-head']}>Nombre Camping</TableCell>
                      <TableCell className={s['table-head']}>Correo Viajero</TableCell>
                      <TableCell className={s['table-head']}>Desde</TableCell>
                      <TableCell className={s['table-head']}>Hasta</TableCell>
                      <TableCell className={s['table-head']}>Noches</TableCell>
                      <TableCell className={s['table-head']}>Total</TableCell>
                      <TableCell className={s['table-head']} align="right">Estado</TableCell>
                      <TableCell className={s['table-head']} align="right">Detalle</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      ownerBookings.bookings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((c: Bookings, i) => (
                        <TableRow key={i}>
                          <TableCell className={s['table-row']}>
                            {c.nombre_camping}</TableCell>
                          <TableCell className={s['table-row']}>{c.email}</TableCell>
                          <TableCell className={s['table-row']}>
                            {formatDate(c.fecha_desde_reserva)}
                          </TableCell>
                          <TableCell className={s['table-row']}>
                            {formatDate(c.fecha_hasta_reserva)}
                          </TableCell>
                          <TableCell className={s['table-row']}>{c.cant_noches}</TableCell>
                          <TableCell className={s['table-row']}>$ {c.total}</TableCell>
                          <TableCell
                            className={`${s['table-row']} ${s[keyStateBooking[c.id_estado]]}`}
                            align="right"
                          >
                            {
                              c.id_estado === stateBooking.PENDIENTE
                                ? <BasicMenu
                                  idButton='menu-reservas'
                                  menuItems={[
                                    { key: 'Realizar', value: stateBooking.REALIZADA as string },
                                    { key: 'Rechazar', value: stateBooking.RECHAZADA as string }
                                  ]}
                                  handleSelectItems={(data: any) => confirmReserva(c.id, data, token, getOwnerBookings)}
                                  button='Pendiente'
                                  s={s}
                                />
                                : keyStateBooking[c.id_estado]
                            }
                          </TableCell>
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
                  count={ownerBookings.bookings.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </>
          }
        </Paper>
        <CancelIcon
          onClick={() => setOpenReserves({ open: false, campingId: 0 })}
          className={s['close-button']}
        />
      </Grid>
      <DetalleReserva
        open={openDetalleReserva.open}
        reservaId={openDetalleReserva.reservaId}
        setOpenDetalleReserva={setOpenDetalleReserva}
      />
    </Dialog>
  );
}