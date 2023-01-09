import { useEffect, useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Dialog, Box, Typography } from '@mui/material/';
import { Cancel as CancelIcon } from '@mui/icons-material';
import s from './DetalleReserva.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store';
import { DetalleReserva as DetalleReservaType } from '../../../../../../auxiliar';

type Props = {
  setOpenDetalleReserva: Dispatch<SetStateAction<{ open: boolean, reservaId: number }>>;
  open: boolean;
  reservaId: number;
}

export default function DetalleReserva({ open, reservaId, setOpenDetalleReserva }: Props) {
  const { token } = useSelector((state: RootState) => state.user);
  const [reservas, setReservas] = useState<DetalleReservaType[]>([]);

  const getDetalleReservaById = async () => {
    try {
      const { data }: { data: DetalleReservaType[] } = await axios.get(
        `/api/reservas/detalle/${reservaId}`,
        { headers: { authorization: token } }
      );

      setReservas(data);

    } catch (e: any) {
      console.log('ERROR', e)
    }
  }

  useEffect(() => {
    if (reservaId) getDetalleReservaById();

    return () => setReservas([]);
  }, [open])

  return (
    <Dialog open={open} className={s['detalle-reserva-container']}>
      {
        reservas.map((r: DetalleReservaType, i: number) => (
          <Box key={i} className={s['reserva-container']}>
            <Typography
              variant='h5'
              fontWeight='bolder'
              className={s['title-reserva']}
            >{r.descrip_tarifa}</Typography>
            <Typography>Precio: <b>$ {r.precio}</b></Typography>
            <Typography>Cantidad: <b>{r.cantidad}</b></Typography>
            <Typography>Subtotal: <b>$ {r.subtotal}</b></Typography>
          </Box>
        ))
      }
      <CancelIcon
        onClick={() => setOpenDetalleReserva({ open: false, reservaId: 0 })}
        className={s['close-button']}
      />
    </Dialog>
  )
}