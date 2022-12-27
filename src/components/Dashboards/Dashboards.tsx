import DashboardUsuario from "./DashUsuario/DashUsuario"
import DashboardPropietario from "./DashDueño/DashDueño"
import DashboardAdmin from "./DashAdmin/DashAdmin"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { User } from "../../reducer/estados"
import { userTypes } from "../../auxiliar"

export default function Dashboards() {
  const user: User = useSelector((state: RootState) => state.user);

  if(!user) return <div>Iniciá Sesión</div>

  return user.tipo === userTypes.ADMIN 
          ? <DashboardAdmin /> 
          : user.tipo === userTypes.PROPIETARIO
          ? <DashboardPropietario />
          : <DashboardUsuario /> 
}