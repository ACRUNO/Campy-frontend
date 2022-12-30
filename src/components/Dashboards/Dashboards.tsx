import DashboardUsuario from "./DashUsuario/DashUsuario"
import DashboardPropietario from "./DashDueño/DashDueño"
import DashboardAdmin from "./DashAdmin/DashAdmin"
import { Box, Typography} from "@mui/material";
import { InsertEmoticon } from '@mui/icons-material';
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { User } from "../../reducer/estados"
import { userTypes } from "../../auxiliar"
import { VERDE } from "../helpers/colors";
import s from './Dashboards.module.css';

export default function Dashboards() {
  const user: User = useSelector((state: RootState) => state.user);

  if(!user) return (
    <Box
      className={s['iniciar-sesion-container']}
      >
      <Typography 
        variant='h4' 
        fontWeight='bolder'
        sx={{color: VERDE}}
        className={s['iniciar-sesion']}
      >Iniciá Sesión</Typography>
      <InsertEmoticon className={s['emoticon']} sx={{color: VERDE}} />
    </Box>
  )

  return user.tipo === userTypes.ADMIN 
          ? <DashboardAdmin /> 
          : user.tipo === userTypes.PROPIETARIO
          ? <DashboardPropietario />
          : <DashboardUsuario /> 
}