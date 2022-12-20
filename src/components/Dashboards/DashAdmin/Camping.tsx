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
import Detalle_camping from "./Detalle_camping"

let json={"id_provincia" : "","id_localidad": "","abierto_fecha_desde":"","abierto_fecha_hasta":"","precio":[],"id_categoria":[],"parcela_superficie":[],"parcela_techada": 0,"parcela_agua_en_parcela":0,"parcela_iluminacion_toma_corriente":0,"mascotas": 0,"rodantes": 0,"proveduria": 0,"restaurant":0,"pileta":0,"vigilancia":0,"maquinas_gimnasia":0,"juegos_infantiles": 0,"salon_sum":0,"wifi": 0,"estacionamiento": 0 }
export default function Camping() {
  const dispatch: AppDispatch = useDispatch()
  // const allCampings:Campings[] = useSelector((state: RootState) => state.allCampings) 
  const campingsDash:{id:number, nombre_camping:string, habilitado:number}[] = useSelector((state: RootState) => state.campingsDash)
  const user = useSelector((state: RootState) => state.user);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen]= React.useState(false);
  const [camping, setCamping]=React.useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (e:React.ChangeEvent<unknown>, id:number) => {
    e.preventDefault();
    setOpen(true);
    setCamping(id)
  };

  const Deshabilitar=(e:React.ChangeEvent<unknown>, id:number)=>{
    e.preventDefault();
    let data={token:user.token}
    dispatch(actions.habilitacion_camping(id,0,data))
  }

  const Habilitar=(e:React.ChangeEvent<unknown>, id:number)=>{
    e.preventDefault();
    let data={token:user.token}
    dispatch(actions.habilitacion_camping(id,1,data))
  }


  useEffect(()=>{
    //  if(!allCampings.length)
     { 
     dispatch(actions.getCampings_dash())}
   },[dispatch,rowsPerPage, Deshabilitar, Habilitar])
  
  

  return (
    <React.Fragment>
        <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>   
      <Title>Campings</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Localidad</TableCell>
            <TableCell>Provincia</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>   </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campingsDash.map((c) => (
            <TableRow key={c.id}>
              <TableCell onClick={(e)=>handleClick(e,c.id)}><Button variant='text' color="inherit">{c.nombre_camping}</Button></TableCell>
              <Detalle_camping key={c.id} open={open} setopen={setOpen} id={camping}></Detalle_camping>
              <TableCell>Localidad</TableCell>
              <TableCell>Provincia</TableCell>
              <TableCell >{c.habilitado===1 ? "Habilitado" : "Deshabilitado"}</TableCell>
              <TableCell>{c.habilitado===1? <Button onClick={(e)=>Deshabilitar(e,c.id)} variant="contained" sx={{color:'#d50000'}}>Deshabilitar</Button>:<Button onClick={(e)=>Habilitar(e,c.id)} variant="contained" sx={{color:'#00c853'}}>Habilitar</Button>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={campingsDash.length}
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