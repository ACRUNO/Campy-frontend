import React from "react"
import { Link, useParams} from "react-router-dom";
import { Box } from '@mui/material';
import fotito from "./salir.png"
import fotito2 from "./comilona.webp"
import Style from "./Salidas.module.css"
import { LinkMap } from "../../actions";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";

export default function Salidas() {




  let saliditas = [
    {
      name: "Donde comer",
      imagen: fotito,
      imagen2: fotito2
    }
  ]

const params = useParams()
const dispatch: AppDispatch = useDispatch()

const handleMap = () => {
  dispatch(LinkMap(params.id))
}





  return (
    <Box  className={Style.total}>

      <Link onClick={handleMap} to={`/map`} style={{ textDecoration: 'none' }}>
        <Box className={Style.divimagen}>
          <div> Donde Salir? </div>
          <Box className={Style.cont}
            component="img"

            // className={Style.imagencita}
            alt="Logo"
            src={saliditas[0].imagen}
          />
        </Box>
      </Link>

      <Link onClick={handleMap} to={`/map`} style={{ textDecoration: 'none' }}>
        <Box  className={Style.divimagen}>
          <div> Donde Comer? </div>
          <Box className={Style.cont}
            component="img"

            // className={Style.imagencita}
            alt="Logo"
            src={saliditas[0].imagen2}
          />
        </Box>
      </Link>

    </Box>
  )
}


