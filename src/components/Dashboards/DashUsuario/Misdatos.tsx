import { Dispatch, SetStateAction, useState, ChangeEvent, FormEvent } from 'react';
import {Typography, TextField, Grid, Paper, Avatar, Box, Button} from '@mui/material';
import Title from './Title';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import ConfirmAlert from '../../helpers/ConfirmAlert';
import { AlertConfirmType } from '../../../auxiliar';
import { updateUser } from '../../../actions';

export default function Misdatos() {

  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [inputs, setInputs] = useState(
      {
        username: '',
        clave: '',
        numero_celular: '',
        direccion: '',
        dni: ''
      });
  const [errors, setErrors] = useState(
      {
        username: {active: false, text: ''},
        clave: {active: false, text: ''},
        numero_celular: {active: false, text: ''},
        direccion: {active: false, text: ''},
        dni: {active: false, text: ''}
      });
  const [stateOpen, setStateOpen]: 
        [stateOpen: AlertConfirmType, setStateOpen: Dispatch<SetStateAction<AlertConfirmType>>] = 
        useState<AlertConfirmType>({
        open: false,
        title: '¡CUIDADO!',
        description: 'Estás a punto de cambiar datos de tu cuenta. Una vez que aceptes no se podrá volver hacia atrás.',
        confirm: () => {},
        denegate: () => {}
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));

      setErrors(() => {
        let newErros = {
        username: {active: false, text: ''},
        clave: {active: false, text: ''},
        numero_celular: {active: false, text: ''},
        direccion: {active: false, text: ''},
        dni: {active: false, text: ''}
        };

        const value = e.target.value;

        switch(e.target.name) {
          case 'username': 
            if(value && !/^[a-zA-Z]{4}/.test(value))
              newErros.username = {active: true, text: 'El nombre debe empezar con 4 letras.'};

            if(value && (!(value.length >= 5) || !(value.length <= 20)))
              newErros.username = {active: true, text: 'El nombre debe tener al menos 5 caracteres y no debe superar los 20.'};
            break;
          case 'clave': 
            if(value && !(value.length >= 8))
              newErros.clave = {active: true, text: 'La clave debe tener al menos 8 caracteres.'};

            if(value && (value.length > 200))
              newErros.clave = {active: true, text: 'La clave es demasiado extensa.'};
            break;
          case 'numero_celular': 
            if(value && !/^[\+\d-\s]+$/.test(value))
              newErros.numero_celular = {active: true, text: 'Introduce un formato válido.'};
            break;
          case 'direccion': 
            if(value && value.length > 200)
              newErros.direccion = {active: true, text: 'Dirección demasiado extensa.'};
            break;
          case 'dni': 
            if(value && !/^\d{2}\.?\d{3}\.?\d{3}$/.test(value))
              newErros.dni = {active: true, text: 'Introduce un formato válido.'};
            break;
        }

        return newErros;
      });
  }

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const errorsInputs: {active: boolean, text: string}[] = Object.values(errors);

    for(let error of errorsInputs)
      if(error.active) return;


    const inputsFromForm: NodeListOf<HTMLInputElement> = document.querySelectorAll('#form-datos input');
    let query: string[] = [];
    

    for(let input of inputsFromForm) 
      if(input.value) query.push(`${input.name}=${input.value}`);

    const structuredQuery: string = query.join('&');
    
    if(!structuredQuery) return;

    setStateOpen(state => (
      { ...state, open: true, 
        confirm: () => dispatch(updateUser(structuredQuery, {token: user.token, userId: user.id})) 
      }));
    
    setInputs(
      {
        username: '',
        clave: '',
        numero_celular: '',
        direccion: '',
        dni: ''
      });
  }

  console.log(user)
  return (
    <>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>  
            <Title>Mis Datos</Title>
            {
              user.foto 
              ? <Avatar src={user.foto} sx={{height: '150px', width: '150px', m: '20px auto'}} /> 
              : <Avatar sx={{height: '150px', width: '150px', fontSize: '3.5rem', m: '20px auto'}} >
                  {user.username[0].toUpperCase()}
                </Avatar>
            }
            <Typography sx={{textAlign: 'center', m: '10px 0'}} variant='h5' fontWeight='bolder'>{user.username.toUpperCase()}</Typography>
            <Typography sx={{textAlign: 'center', m: '10px 0'}} variant='h6'>Email: {user.email}</Typography> 
            <Typography sx={{textAlign: 'center', m: '10px 0'}} variant='h6'>Número: {user.numero_celular || 'Sin definir'}</Typography> 
            <Typography sx={{textAlign: 'center', m: '10px 0'}} variant='h6'>Dirección: {user.direccion || 'Sin definir'}</Typography> 
            <Typography sx={{textAlign: 'center', m: '10px 0', mb: 6}} variant='h6'>Dni: {user.dni || 'Sin definir'}</Typography> 
            <Title>Modificar Datos</Title>
            <Box onSubmit={handleSubmitForm} component="form" id='form-datos' sx={{ width: '100%' }}>
                <TextField
                  margin="normal"
                  fullWidth
                  name="username"
                  label="Nombre de Usuario"
                  type="text"
                  id="username"
                  color='primary'
                  value={inputs.username}
                  onChange={handleChangeInput}
                  error={errors.username.active}
                  helperText={errors.username.active && errors.username.text}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="clave"
                  label="Clave"
                  type="password"
                  id="password"
                  color='primary'
                  value={inputs.clave}
                  onChange={handleChangeInput}
                  error={errors.clave.active}
                  helperText={errors.clave.active && errors.clave.text}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="numero_celular"
                  label="Número Celular"
                  type="text"
                  id="numero_celular"
                  color='primary'
                  value={inputs.numero_celular}
                  onChange={handleChangeInput}
                  error={errors.numero_celular.active}
                  helperText={errors.numero_celular.active && errors.numero_celular.text}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="direccion"
                  label="Direccion"
                  type="text"
                  id="direccion"
                  color='primary'
                  value={inputs.direccion}
                  onChange={handleChangeInput}
                  error={errors.direccion.active}
                  helperText={errors.direccion.active && errors.direccion.text}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="dni"
                  label="Dni"
                  type="text"
                  id="dni"
                  color='primary'
                  value={inputs.dni}
                  onChange={handleChangeInput}
                  error={errors.dni.active}
                  helperText={errors.dni.active && errors.dni.text}
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
            {
              stateOpen.open && 
              <ConfirmAlert
                setStateOpen={setStateOpen} 
                open={stateOpen.open}
                description={stateOpen.description}
                title={stateOpen.title} 
                confirm={stateOpen.confirm}
                denegate={stateOpen.denegate}
              />
            }
        </Paper>
      </Grid>
    </>
  );
}
