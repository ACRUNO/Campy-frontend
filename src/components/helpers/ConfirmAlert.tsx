import { SetStateAction, Dispatch } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { ROJO, ROJO_FUERTE, VERDE, VERDE_OSCURO } from './colors';
import { AlertConfirmType } from '../../auxiliar';


interface PropsAlert extends AlertConfirmType {
  open: boolean,
  setStateOpen: Dispatch<SetStateAction<AlertConfirmType>>
}

export default function Alert({
  setStateOpen,
  open,
  title,
  description,
  confirm,
  denegate
}: PropsAlert) {

  const handlerClose = (value: string) => {
    setStateOpen((state: AlertConfirmType) => ({ ...state, open: false }))

    value === 'confirm' ? confirm() : denegate();
  };

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
      >
        <DialogTitle sx={{ fontSize: '2rem', color: ROJO }} align="center">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: '1.2rem' }} align="center">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handlerClose('denegate')} variant='contained' sx={{ bgcolor: ROJO, color: 'white', '&:hover': { bgcolor: ROJO_FUERTE } }}>Denegar</Button>
          <Button onClick={() => handlerClose('confirm')} variant='contained' sx={{ bgcolor: VERDE, color: 'white', '&:hover': { bgcolor: VERDE_OSCURO } }}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}