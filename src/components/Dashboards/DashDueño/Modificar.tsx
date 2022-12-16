import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Grid, Paper} from "@mui/material";
import Title from './Title';
import {Campings} from '../../../reducer/estados';
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from '../../../store/index';
import * as actions from "../../../actions";
import { useEffect, useState } from "react";
import TablePagination from '@mui/material/TablePagination';


export default function Modificar() {
  const dispatch: AppDispatch = useDispatch()
  const allCampings:Campings[] = useSelector((state: RootState) => state.allCampings) 

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  useEffect(()=>{
    if(!allCampings.length){ 
    dispatch(actions.getAllCampings())}
  },[dispatch,rowsPerPage]
)
  
  return (
    <React.Fragment>
        <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  
                
      <Title>Modificar datos camping</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre Completo</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell align="right">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allCampings.map((c) => (
            <TableRow key={c.id}>
              <TableCell>{c.nombre_camping}</TableCell>
              <TableCell>{c.localidad}</TableCell>
              <TableCell align="right">Habilitado**</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={allCampings.length}
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