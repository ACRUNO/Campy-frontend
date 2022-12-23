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
import * as actions from "../../../actions";


type Props = {
    open:boolean
    setopen:(value: React.SetStateAction<boolean>) => void
    id:number
    estado: number
    nombre: string
    tipo: string
    } 

export default function HabilitarAlert(props:Props) {

  const dispatch: AppDispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user);
  
  const handleClose = () => {
    props.setopen(false);
  };

  const handleChange = (e:React.ChangeEvent<unknown>, id:number, estado:number, tipo:string) => {
    e.preventDefault();
    let data={token:user.token}
    if (tipo === "camping"){
      if(estado === 0){
        dispatch(actions.habilitacion_camping(id,1,data))
      }else{
        dispatch(actions.habilitacion_camping(id,0,data))
      }
    }
    else{
      if(estado === 0){
        dispatch(actions.habilitacion_usuario(id,1,data))
      }else{
        dispatch(actions.habilitacion_usuario(id,0,data))
      }}
    props.setopen(false);
    }
    

  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="md"
        open={props.open}
        onClose={handleClose}
      >
        <DialogTitle> ¿Está seguro que desea {props.estado === 1? "deshabilitar":"habilitar"} a {props.nombre}?
        </DialogTitle>
        <DialogActions>
          <Button onClick={(e)=>handleChange(e,props.id ,props.estado, props.tipo)} variant="contained" color="secondary">Confirmar cambio</Button>
          <Button onClick={handleClose} variant="contained" color="secondary">Cerrar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}