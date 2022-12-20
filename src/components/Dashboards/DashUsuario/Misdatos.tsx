import * as React from 'react';
import {Typography, TextField, Grid, Paper, Avatar, Box, Button} from '@mui/material';
import Title from './Title';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { VERDE } from '../../helpers/colors';

export default function Misdatos() {

  const user = useSelector((state: RootState) => state.user);
  console.log(user)
  return (
    <React.Fragment>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>  
            <Title>Mis Datos</Title>
            {
              user.foto 
              ? <Avatar src={user.foto} sx={{height: '150px', width: '150px', m: '20px auto'}} /> 
              : <Avatar sx={{height: '150px', width: '150px', fontSize: '3.5rem', m: '20px auto'}} >
                {user.username[0]}
                </Avatar>
            }
            <Typography sx={{textAlign: 'center', m: '10px 0'}} variant='h5' fontWeight='bolder'>{user.username.toUpperCase()}</Typography>
            <Typography sx={{textAlign: 'center', m: '10px 0'}} variant='h6'>Email: {user.email}</Typography> 
            <Typography sx={{textAlign: 'center', m: '10px 0'}} variant='h6'>Número: {user.numero_celular || 'Sin definir'}</Typography> 
            <Typography sx={{textAlign: 'center', m: '10px 0'}} variant='h6'>Dirección: {user.direccion || 'Sin definir'}</Typography> 
            <Typography sx={{textAlign: 'center', m: '10px 0', mb: 6}} variant='h6'>Dni: {user.dni || 'Sin definir'}</Typography> 
            <Title>Modificar Datos</Title>
            <Box component="form" id='form-datos' sx={{ width: '100%' }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="username"
                  label="Nombre de Usuario"
                  type="text"
                  id="username"
                  color='primary'
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Clave"
                  type="password"
                  id="password"
                  color='primary'
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="numero_celular"
                  label="Número Celular"
                  type="text"
                  id="numero_celular"
                  color='primary'
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="direccion"
                  label="Direccion"
                  type="text"
                  id="direccion"
                  color='primary'
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="dni"
                  label="Dni"
                  type="text"
                  id="dni"
                  color='primary'
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color='primary'
                >
                  Guardar Cambios
                </Button>
            </Box>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
