import { Table, TableRow, TableHead, TableBody, TablePagination, TableCell, Button } from '@mui/material/';
import {Grid, Paper, Typography} from "@mui/material";
import Title from '../Title';
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from '../../../../store/index';
import { useEffect, useState } from "react";
import { getCampingByOwner } from '../../../../actions/User.action';
import Reservas from './Reservas';
import s from './Campings.module.css';


export default function Campings() {
  const dispatch: AppDispatch = useDispatch()
  const { campings, done } = useSelector((state: RootState) => state.ownerCampings);
  const { id, token } = useSelector((state: RootState) => state.user);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openReserves, setOpenReserves] = useState({open: false, campingId: 0});

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if(!campings.length && !done) dispatch(getCampingByOwner(id, token));
  }, [campings])

  return (
    <>
        <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  
                
      <Title>Campings</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Habilitado</TableCell>
            <TableCell>Reservas</TableCell>
            <TableCell align="right">Actualizar</TableCell>
            <TableCell align="right">Borrar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((c: any) => (
            <TableRow key={c.id}>
              <TableCell>{c.nombre_camping}</TableCell>
              <TableCell>{c.habilitado ? 'Sí' : 'No'}</TableCell>
              <TableCell>
                <Typography 
                  onClick={() => setOpenReserves({open: true, campingId: c.id})} 
                  sx={{textDecoration: 'underline', cursor: 'pointer'}}
                >Ver</Typography>
              </TableCell>
              <TableCell align="right">
                <Button variant='contained' className={s['edit-button']}>EDITAR</Button>
              </TableCell>
              <TableCell align="right">
                <Button variant='contained' className={s['delete-button']}>ELIMINAR</Button>
              </TableCell>           
            </TableRow>
          ))}
        </TableBody>
        {openReserves && 
          <Reservas 
            open={openReserves.open}
            campingId={openReserves.campingId}
            setOpenReserves={setOpenReserves}
          />
        }
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={campings.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
              </Grid>
    </>
  );
}