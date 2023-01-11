import { Dispatch, SetStateAction, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Typography, TextField, Grid, Paper, Avatar, Box, Button } from '@mui/material';
import { Cancel as CancelIcon } from '@mui/icons-material';
import Title from './DashUsuario/Title';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import ConfirmAlert from '../helpers/ConfirmAlert';
import { AlertConfirmType } from '../../auxiliar';
import { updateUser } from '../../actions/Login.action';
import CloudinaryPerfilImage from './CloudinaryPerfilImage';
import s from './Misdatos.module.css';

export default function Misdatos() {

  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [inputs, setInputs] = useState(
    {
      username: user.username,
      clave: '',
      numero_celular: user.numero_celular,
      direccion: user.direccion,
      dni: user.dni,
      foto: user.foto
    });
  const [errors, setErrors] = useState(
    {
      username: { active: false, text: '' },
      clave: { active: false, text: '' },
      numero_celular: { active: false, text: '' },
      direccion: { active: false, text: '' },
      dni: { active: false, text: '' }
    });
  const [stateOpen, setStateOpen]:
    [stateOpen: AlertConfirmType, setStateOpen: Dispatch<SetStateAction<AlertConfirmType>>] =
    useState<AlertConfirmType>({
      open: false,
      title: '¡ATENCIÓN! Estás por modificar información sensible sin posibilidad de revertirlo',
      description: 'IMPORTANTE: si estás modificando la contraseña e iniciás sesión por Google, deberás loguearte a partir de ahora con el método tradicional, introduciendo tu correo y contraseña nueva.',
      confirm: () => { },
      denegate: () => { }
    });
  const [openPerfilImage, setOpenPerfilImage] = useState(false);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));

    setErrors(() => {
      let newErros = {
        username: { active: false, text: '' },
        clave: { active: false, text: '' },
        numero_celular: { active: false, text: '' },
        direccion: { active: false, text: '' },
        dni: { active: false, text: '' }
      };

      const value = e.target.value;

      switch (e.target.name) {
        case 'username':
          if (value && !/^[a-zA-Z]{4}/.test(value))
            newErros.username = { active: true, text: 'El nombre debe empezar con 4 letras.' };

          if (value && (!(value.length >= 5) || !(value.length <= 20)))
            newErros.username = { active: true, text: 'El nombre debe tener al menos 5 caracteres y no debe superar los 20.' };
          break;
        case 'clave':
          if (value && !(value.length >= 8))
            newErros.clave = { active: true, text: 'La clave debe tener al menos 8 caracteres.' };

          if (value && (value.length > 200))
            newErros.clave = { active: true, text: 'La clave es demasiado extensa.' };
          break;
        case 'numero_celular':
          if (value && !/^[\+\d-\s]+$/.test(value))
            newErros.numero_celular = { active: true, text: 'Introduce un formato válido.' };
          break;
        case 'direccion':
          if (value && value.length > 200)
            newErros.direccion = { active: true, text: 'Dirección demasiado extensa.' };
          break;
        case 'dni':
          if (value && !/^\d{2}\.?\d{3}\.?\d{3}$/.test(value))
            newErros.dni = { active: true, text: 'Introduce un formato válido.' };
          break;
      }

      return newErros;
    });
  }

  const handleClickProfileImage = (e: any) => {
    if (!e.target.closest('svg#cancel-profile-image')) setOpenPerfilImage(true)
    else setOpenPerfilImage(false)
  }

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const errorsInputs: { active: boolean, text: string }[] = Object.values(errors);

    for (let error of errorsInputs)
      if (error.active) return;


    let query: string[] = [];

    type keyInput = "username" | "clave" | "dni" | "direccion" | "numero_celular" | "foto"

    for (let key in inputs)
      query.push(`${key}=${inputs[key as keyInput]}`);

    const structuredQuery: string = query.join('&');

    if (!structuredQuery) return;

    setStateOpen(state => (
      {
        ...state, open: true,
        confirm: () => dispatch(updateUser(structuredQuery, user.id, user.token))
      }));
  }

  const sendImageUrl = (photoUrl: string) =>
    dispatch(updateUser(`foto=${photoUrl}`, user.id, user.token, true));


  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Title>Mis Datos</Title>
          {
            user.foto
              ? <div
                className={`${s['perfil-image']} ${openPerfilImage ? s['expand-perfil-image'] : ''}`.trim()}
                onClick={(e) => handleClickProfileImage(e)}
              >
                <img src={user.foto} className={s['image']} alt='perfil-image-datos' />
                {openPerfilImage &&
                  <>
                    <CancelIcon
                      id='cancel-profile-image'
                      className={s['cancel-icon']}
                    />
                    <CloudinaryPerfilImage sendImageUrl={sendImageUrl} />
                  </>
                }
              </div>
              : <div
                className={`${s['perfil-image']} ${openPerfilImage ? s['expand-perfil-image'] : ''}`.trim()}
                onClick={(e) => handleClickProfileImage(e)}
              >
                {user.username[0].toUpperCase()}
                {openPerfilImage && <>
                  <CancelIcon id='cancel-profile-image'
                    className={s['cancel-icon']} />
                  <CloudinaryPerfilImage sendImageUrl={sendImageUrl} />
                </>}
              </div>
          }
          <Typography className={s['dato']} sx={{ textAlign: 'center', m: '10px 0' }} variant='h5' fontWeight='bolder'>{user.username.toUpperCase()}</Typography>
          <Typography className={s['dato']} sx={{ textAlign: 'center', m: '10px 0' }} variant='h6'>Email: {user.email}</Typography>
          <Typography className={s['dato']} sx={{ textAlign: 'center', m: '10px 0' }} variant='h6'>Número: {user.numero_celular || 'Sin definir'}</Typography>
          <Typography className={s['dato']} sx={{ textAlign: 'center', m: '10px 0' }} variant='h6'>Dirección: {user.direccion || 'Sin definir'}</Typography>
          <Typography className={s['dato']} sx={{ textAlign: 'center', m: '10px 0', mb: 6 }} variant='h6'>Dni: {user.dni || 'Sin definir'}</Typography>
          <Title>Modificar Datos</Title>
          <Box onSubmit={handleSubmitForm} component="form" id='form-datos' sx={{ width: '100%' }}>
            <TextField
              margin="normal"
              fullWidth
              name="username"
              label="Nombre de Usuario"
              type="text"
              id="username"
              color='success'
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
              color='success'
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
              color='success'
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
              color='success'
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
              color='success'
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
              color='success'
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
