import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Grid, Paper, Button, Checkbox} from "@mui/material";
import Title from './Title';
import {Campings} from '../../../reducer/estados';
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from '../../../store/index';
import * as actions from "../../../actions";
import { useEffect, useState } from "react";
import TablePagination from '@mui/material/TablePagination';
import Detalle_camping from "./Detalle_camping"
import HabilitarAlert from "./Habilitar";
import SearchBar from './SearchBar';
import ListAltIcon from '@mui/icons-material/ListAlt';



export default function Camping() {
  const dispatch: AppDispatch = useDispatch()
  const campingsDash:{id:number, nombre_camping:string, habilitado:number, localidad:string, provincia:string, contacto_tel:string}[] = useSelector((state: RootState) => state.campingsDash)

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen]= React.useState(false);
  const [camping, setCamping]=React.useState(0);
  const [openHab, setOpenHab]= React.useState(false);
  const [nombre_camping, setNombre_camping]=React.useState("")
  const [estado, setEstado]=React.useState(0)
  


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (e:React.ChangeEvent<unknown>, id:number, nombre:string) => {
    e.preventDefault();
    setOpen(true);
    setCamping(id)
    setNombre_camping(nombre)
  };

  const HandleHabilitar = (e:React.ChangeEvent<unknown>, id:number, nombre:string, estado:number) => {
    e.preventDefault();
    setOpenHab(true);
    setCamping(id);
    setNombre_camping(nombre)
    setEstado(estado)
  };


  useEffect(()=>{
     dispatch(actions.getCampings_dash())
    //  return () => {
    //   dispatch(actions.cleanCampings_dash());
    // }; 
   },[dispatch, rowsPerPage, openHab, open])
  
  

  return (
    <React.Fragment>
        <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>   
        <Grid container sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", mb:5, alignItems:"center"}}>
        <Grid item sx={{ml:3}}><Title>Campings</Title></Grid>
        <Grid item sx={{mr:3}}><SearchBar type="Camping" setPage={setPage}></SearchBar></Grid>
      </Grid> 
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Localidad</TableCell>
            <TableCell>Provincia</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>   </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campingsDash.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((c) => (
            <TableRow key={c.id}>
              <TableCell onClick={(e)=>handleClick(e,c.id, c.nombre_camping)}><Button variant='text' color="inherit"><ListAltIcon fontSize="small" sx={{color:"#ACA8A6", pb:0.5}}/>{c.nombre_camping}</Button></TableCell>
              <Detalle_camping key={c.id} open={open} setopen={setOpen} id={camping} nombre={nombre_camping}></Detalle_camping>
              <TableCell>{c.contacto_tel}</TableCell>
              <TableCell>{c.localidad}</TableCell>
              <TableCell>{c.provincia}</TableCell>
              <TableCell >{c.habilitado===1 ? "Habilitado" : "Deshabilitado"}</TableCell>
              <TableCell>{c.habilitado===1? <Button onClick={(e)=>HandleHabilitar(e,c.id, c.nombre_camping, c.habilitado)} variant="contained" sx={{color:'#d50000'}}>Deshabilitar</Button>:<Button onClick={(e)=>HandleHabilitar(e,c.id, c.nombre_camping, c.habilitado)} variant="contained" sx={{color:'#00c853'}}>Habilitar</Button>}</TableCell>
              <HabilitarAlert open={openHab} setopen={setOpenHab} nombre={nombre_camping} id={camping} estado={estado} tipo="camping"/>
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