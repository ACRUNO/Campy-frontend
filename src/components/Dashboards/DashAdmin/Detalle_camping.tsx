import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from '../../../store/index';


type Props = {
    open:boolean
    setopen:(value: React.SetStateAction<boolean>) => void
    id:number
    nombre:string
    } 

export default function Detalle_camping(props:Props) {
  const dispatch: AppDispatch = useDispatch()


  useEffect(() => {
  //   if(props.open){  
  //   dispatch(getUserBookings(props.id))};
  //   return () => {
  //    dispatch(cleanUsuarios_dash())
  //  };
 }, [props.open])
  
  const handleClose = () => {
    props.setopen(false);
  };


  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="md"
        open={props.open}
        onClose={handleClose}
      >
        <DialogTitle>Detalle del camping {props.id}</DialogTitle>
        <DialogContent>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">Cerrar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}