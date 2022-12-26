import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Grid, Paper, Button} from "@mui/material";
import Title from './Title';
import {Campings} from '../../../reducer/estados';
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from '../../../store/index';
import * as actions from "../../../actions";
import { useEffect, useState } from "react";
import TablePagination from '@mui/material/TablePagination';
import Tipo_usuarios from './Tipo_Usuarios';
import HabilitarAlert from "./Habilitar";
import Detalle_usuario from './DetalleUsuario';



export default function Usuarios() {
  const dispatch: AppDispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user);
  const UsuariosDash:{id: number, username: string,email: string,tipo: string,habilitado: number}[]= useSelector((state: RootState) => state.usuariosDash) 
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen]= React.useState(false);
  const [usuario, setUsuario]=React.useState(0);
  
  const [openHab, setOpenHab]= React.useState(false);
  const [nombre_usuario, setNombre_usuario]=React.useState("")
  const [estado, setEstado]=React.useState(0)
  const [tipo, setTipo]=React.useState("")

  const [openDet, setOpenDet]= React.useState(false);



  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const HandleHabilitar = (e:React.ChangeEvent<unknown>, id:number, nombre:string, estado:number) => {
    e.preventDefault();
    setOpenHab(true);
    setUsuario(id);
    setNombre_usuario(nombre)
    setEstado(estado)
  };

  const handleClick = (e:React.ChangeEvent<unknown>, id:number, tipo:string) => {
    e.preventDefault();
    setOpen(true);
    setUsuario(id)
    setTipo(tipo)
  };

  const handleDetalle = (e:React.ChangeEvent<unknown>, id:number) => {
    e.preventDefault();
    setOpenDet(true);
    setUsuario(id)
  };


  useEffect(()=>{
     dispatch(actions.getUsuarios_dash())
   },[dispatch, rowsPerPage, openHab, open])
  
  
  return (
    <React.Fragment>
        <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>    
      <Title>Usuarios</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre Completo</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell align="right">   </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {UsuariosDash.map((u) => (
            <TableRow key={u.id}>
              <TableCell onClick={(e)=>handleDetalle(e,u.id)}><Button variant='text' color="inherit">{u.username}</Button></TableCell>
              <Detalle_usuario open={openDet} setopen={setOpenDet} id={usuario}></Detalle_usuario>
              <TableCell>{u.email}</TableCell>
              <TableCell onClick={(e)=>handleClick(e,u.id, u.tipo)}><Button variant='text' color="inherit" >{u.tipo}</Button></TableCell>
              <Tipo_usuarios open={open} setopen={setOpen} id={usuario} username={nombre_usuario} tipo={u.tipo} ></Tipo_usuarios>
              <TableCell>{u.habilitado===1 ? "Habilitado" : "Deshabilitado"}</TableCell>
              <TableCell align="right">{u.habilitado===1? <Button onClick={(e)=>HandleHabilitar(e,u.id, u.username, u.habilitado)} variant="contained" sx={{color:'#d50000'}}>Deshabilitar</Button>:<Button onClick={(e)=>HandleHabilitar(e,u.id, u.username, u.habilitado)} variant="contained" sx={{color:'#00c853'}}>Habilitar</Button>}</TableCell>
              <HabilitarAlert  open={openHab} setopen={setOpenHab} nombre={nombre_usuario} id={usuario} estado={estado} tipo="usuario"/>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={UsuariosDash.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
              </Grid>
    </React.Fragment>
  );
}