import { Table, TableRow, TableHead, TableBody, TablePagination, TableCell, Button } from '@mui/material/';
import {Grid, Paper, Typography} from "@mui/material";
import Title from '../Title';
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from '../../../../store/index';
import { useEffect, useState } from "react";
import { getCampingByOwner } from '../../../../actions/User.action';
import Reservas from './Reservas/Reservas';
import s from './Campings.module.css';
import { disableOwnerCamping } from '../../../../actions/Owner.action';
import ConfirmAlert from '../../../helpers/ConfirmAlert';
import Alert from '../../../helpers/Alert';
import { AlertConfirmType, AlertType } from '../../../../auxiliar';
import ReservasNotificaciones from './Reservas/ReservasNotificaciones';
import { useNavigate } from 'react-router-dom';


export default function Campings() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { campings, done } = useSelector((state: RootState) => state.ownerCampings);
  const { id, token } = useSelector((state: RootState) => state.user);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openReserves, setOpenReserves] = useState({open: false, campingId: 0});
  const [stateAlertConfirm, setStateAlertConfirm] = useState<AlertConfirmType>(
    {
      open: false,
      title: 'Dar de Baja un Camping',
      description: '¿Seguro que desea dar de baja este camping? No se podrá volver a tener disponibilidad sobre el mismo...',
      confirm: () => {},
      denegate: () => {},
    }
  );
  const [stateAlert, setStateAlert] = useState<AlertType>(
    {
      open: false,
      title: 'Dar de Baja un Camping',
      description: '¿Seguro que desea dar de baja este camping? No se podrá volver a tener disponibilidad sobre el mismo...',
      confirm: 'ok',
      type: 'success',
      navigateTo: null
    }
  );

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
        <Grid item xs={12} sx={{position: 'relative'}}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  
                
      <Title>Campings</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={s['table-head']}>Nombre</TableCell>
            <TableCell className={s['table-head']}>Habilitado</TableCell>
            <TableCell className={s['table-head']}>Reservas</TableCell>
            <TableCell className={s['table-head']}  align="right">Actualizar</TableCell>
            <TableCell  className={s['table-head']} align="right">Dar de Baja</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((c: any) => (
            <TableRow key={c.id}>
              <TableCell 
                className={s['table-row']}
              >{c.nombre_camping}</TableCell>
              <TableCell className={`${s['table-row']} ${c.habilitado ? s.habilitado : s.deshabilitado}`}>
                {c.habilitado ? 'SI' : 'NO'}
              </TableCell>
              <TableCell className={s['table-row']}>
                <Typography 
                  onClick={() => setOpenReserves({open: true, campingId: c.id})} 
                  sx={{textDecoration: 'underline', cursor: 'pointer'}}
                >Ver</Typography>
              </TableCell>
              <TableCell className={s['table-row']} align="right">
                <Button 
                  variant='text' 
                  className={s['edit-button']} 
                  disabled={!c.habilitado}
                >EDITAR</Button>
              </TableCell>
              <TableCell className={s['table-row']} align="right">
                <Button
                  variant='text'
                  className={s['delete-button']}
                  disabled={!c.habilitado}
                  onClick={() => setStateAlertConfirm(prev => ({...prev, open: true, confirm: () => {
                    dispatch(disableOwnerCamping(c.id, token, setStateAlert))
                  }}))}
                >DESHABILITAR</Button>
              </TableCell>
              <ConfirmAlert
                open={stateAlertConfirm.open}
                confirm={stateAlertConfirm.confirm}
                denegate={stateAlertConfirm.denegate}
                title={stateAlertConfirm.title}
                description={stateAlertConfirm.description}
                setStateOpen={setStateAlertConfirm}
              />   
              <Alert
                open={stateAlert.open}
                confirm={stateAlert.confirm}
                title={stateAlert.title}
                type={stateAlert.type}
                description={stateAlert.description}
                setStateOpen={setStateAlert}
                navigateTo={null}
              />      
            </TableRow>
          ))}
        </TableBody>
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
        {openReserves && 
          <Reservas 
            open={openReserves.open}
            campingId={openReserves.campingId}
            setOpenReserves={setOpenReserves}
          />
        }
        <ReservasNotificaciones />
      </Grid>
    </>
  );
}