import React from 'react';
import Box from '@mui/material/Box';
import {Button, FormControl, Select, InputLabel,MenuItem} from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from "react";
import * as actions from "../../../actions";
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from '../../../store/index';
import { SelectChangeEvent } from '@mui/material/Select';



type Props = {
    open:boolean
    setopen:(value: React.SetStateAction<boolean>) => void
    id:number
    username: string
    tipo:string
    } 

export default function Tipo_usuarios(props:Props) {

  const dispatch: AppDispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user);
  const [tipo, setTipo] = React.useState(props.tipo);
  
  const handleClose = () => {
    props.setopen(false);
  };

  const cambiarTipo = (e:SelectChangeEvent<string>) =>{
    setTipo(e.target.value)
  }

  const handleChange = (e:React.ChangeEvent<unknown>, id:number, tipo:string) => {
    e.preventDefault();
    let data:{token:string, userType:string} ={token:user.token, userType:tipo}
    dispatch(actions.tipo_usuario(id,data))
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
        <DialogTitle>Cambiar tipo de usuario para {props.username}</DialogTitle>
        <DialogContent>
        <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel id="demo-select-small" htmlFor="max-width" color="secondary">Tipo</InputLabel>
              <Select color="secondary"
              labelId="demo-select-small"
              id="demo-select-small"
              label="Tipo"
              onChange={cambiarTipo}
              >
                <MenuItem value={process.env.REACT_APP_TIPO_PROPIETARIO}>Propietario</MenuItem>
                <MenuItem value={process.env.REACT_APP_TIPO_USUARIO}>Usuario</MenuItem>
                <MenuItem value={process.env.REACT_APP_TIPO_ADMIN}>Administrador</MenuItem>
              </Select>
            </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e)=>handleChange(e,props.id, tipo)} variant="contained" color="secondary">Confirmar cambio</Button>
          <Button onClick={handleClose} variant="contained" color="secondary">Cerrar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}