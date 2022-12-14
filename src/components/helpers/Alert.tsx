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
import {
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import { ROJO, VERDE_CLARO } from './colors';
import { useNavigate } from 'react-router-dom';
import { AlertType } from '../../auxiliar';


interface PropsAlert extends AlertType {
  open: boolean,
  setStateOpen: Dispatch<SetStateAction<AlertType>>
}

export default function Alert({
  setStateOpen,
  open,
  title,
  description,
  confirm,
  type,
  navigateTo
}: PropsAlert) {

  const navigate = useNavigate();

  const handlerClose = () => {
    setStateOpen((state: AlertType) => ({ ...state, open: false }))

    typeof navigateTo === "string" && navigate(navigateTo);
    typeof navigateTo === "function" && navigateTo();
  };

  const icons = {
    success: <CheckCircleIcon sx={{ fontSize: 100, width: '100%', mt: 3, fill: VERDE_CLARO }} />,
    error: <ErrorIcon sx={{ fontSize: 100, width: '100%', mt: 3, fill: ROJO }} />,
    person: <PersonIcon sx={{ fontSize: 100, width: '100%', mt: 3, fill: VERDE_CLARO }} />
  }

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
      >
        <DialogTitle sx={{ fontSize: '2rem' }} align="center">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: '1.2rem' }} align="center">
            {description}
          </DialogContentText>
          <Box>
            {icons[type]}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlerClose} variant="contained" color="secondary">{confirm}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}