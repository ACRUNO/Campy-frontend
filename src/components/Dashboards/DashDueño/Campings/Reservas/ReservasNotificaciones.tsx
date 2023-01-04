import { useState, useEffect } from 'react';
import { Box, Typography, Badge } from '@mui/material';
import { Mail as MailIcon } from "@mui/icons-material";
import s from './ReservasNotificaciones.module.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';

export default function ReservasNotificaciones(props: any) {
  const [reservas, setReservas] = 
    useState<{id: number, nombre_camping: string}[]>([]);
  const [open, setOpen] = useState(false);
  const { id, token } = useSelector((state: RootState) => state.user);

  const getAllReservas = async () => {
    
    try {
      const { data } = await axios.get(`/api/reservas/propietarios/${id}`, {
        headers: { authorization: token }
      });
      
      setReservas(data);
    } catch(e: any) {
      console.log('ERROR', e)
    }
  }

  useEffect(() => {
    getAllReservas();
  }, []);

  return (
    <Box className={s['notificicaciones-reservas']}>
      <Badge      
        badgeContent={reservas.length} 
        color='success'
        onClick={() => setOpen(prev => !prev)}
        sx={{cursor: 'pointer'}}
        >
        <MailIcon color="action" />
      </Badge>
      {
        open && 
        <Box className={s['mensajes-de-notificaciones']}>
          {
            reservas.map((r: any, i) => (
              <Box key={i}>
                <Typography className={s['descripcion-notificacion']} fontWeight='bolder'>
                  De: <i>{r.nombre_camping}</i>
                </Typography>
              </Box>
            ))
          }
        </Box>
      }
    </Box>
  );
}