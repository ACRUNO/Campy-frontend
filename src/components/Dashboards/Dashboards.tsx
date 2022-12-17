import DashboardUsuario from "./DashUsuario/DashUsuario"
import DashboardPropietario from "./DashDueño/DashDueño"
import DashboardAdmin from "./DashAdmin/DashAdmin"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { User } from "../../reducer/estados"

export default function Dashboards() {
  const user: User = useSelector((state: RootState) => state.user);
  const ADMIN: string = String(process.env.REACT_APP_TIPO_ADMIN);
  const PROPIETARIO: string = String(process.env.REACT_APP_TIPO_PROPIETARIO);

  if(!user) return <div>Iniciá Sesión</div>

  return user.tipo === ADMIN 
          ? <DashboardAdmin /> 
          : user.tipo === PROPIETARIO
          ? <DashboardPropietario />
          : <DashboardUsuario /> 
}