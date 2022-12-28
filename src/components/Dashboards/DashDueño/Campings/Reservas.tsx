import { useEffect, useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Dialog, Table, TableRow, TableHead, TableBody, TablePagination, TableCell, Button, Typography } from '@mui/material/';
import {Grid, Paper} from "@mui/material";
import Title from './../Title';
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from '../../../../store/index';
import { Bookings } from '../../../../reducer/estados';
import { Cancel as CancelIcon } from '@mui/icons-material';
import s from './Reservas.module.css';
import axios from 'axios';
import { keyStateBooking, stateBooking } from '../../../../auxiliar';
import { VERDE } from '../../../helpers/colors';
import BasicMenu from '../../../helpers/BasicMenu';

type Props = { 
  setOpenReserves: Dispatch<SetStateAction<{open: boolean, campingId: number}>>;
  open: boolean;
  campingId: number;
}

export default function Reservas({open, campingId, setOpenReserves}: Props) {
  const dispatch: AppDispatch = useDispatch()
  const { token }: { id: number, token: string } = useSelector((state: RootState) => state.user)  
  const [ownerBookings, setOwnerBookings] = useState<Bookings[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getOwnerBookings = async () => {
    const { data }: { data: Bookings[] } = await axios.get(`/api/reservas/${campingId}`, 
    {
      headers: { authorization: token }
    });

    setOwnerBookings(data);
  }; 

  useEffect(() => {
    if(campingId) getOwnerBookings();

    return () => setOwnerBookings([])
  }, [campingId]);

  return (
    <Dialog open={open} className={s['reserve-container']} maxWidth={false}>
        <Grid item xs={12} >
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5' sx={{fontSize: '2rem', color: VERDE}}>
            Reservas
          </Typography>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {ownerBookings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((c: Bookings, i) => (
                <TableRow key={i}>
                  <TableCell className={s['table-row']}>{c.nombre_camping}</TableCell>
                  <TableCell className={s['table-row']}>{c.email}</TableCell>
                  <TableCell className={s['table-row']}>
                    {new Date(c.fecha_desde_reserva).toLocaleDateString()}
                  </TableCell>
                  <TableCell className={s['table-row']}>
                    {new Date(c.fecha_hasta_reserva).toLocaleDateString()}
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
                              {key: 'Realizar', value: stateBooking.REALIZADA as string},
                              {key: 'Rechazar', value: stateBooking.RECHAZADA as string}
                          ]}
                          handleSelectItems={(data: any) => {console.log(data)}}
                          button='Pendiente'
                          s={s}
                        />
                      : keyStateBooking[c.id_estado]
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={ownerBookings.length}
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