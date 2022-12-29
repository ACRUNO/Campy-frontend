import React from "react"
import { Link, useParams} from "react-router-dom";
import { Box } from '@mui/material';
import fotito from "./salir.png"
import fotito2 from "./comilona.webp"
import Style from "./Salidas.module.css"
import { LinkMap, popUpCard, setCardInfo } from "../../actions";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


interface InfoCards {
  nombre_camping: string;
  imagenes: string; 
  descripcion_camping: string;
}

export default function Salidas({nombre_camping, imagenes, descripcion_camping} : InfoCards) {


  const navigate = useNavigate();

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
  dispatch(popUpCard(true))
  dispatch(setCardInfo(Number(params.id), nombre_camping, imagenes, descripcion_camping))
  setTimeout(() => {
    navigate("/map")
  }, 100);
  
}





  return (
    <Box  className={Style.total}>
        <Box onClick={() => handleMap()} className={Style.divimagen}>
          <div> Donde Salir? </div>
          <Box className={Style.cont}
            component="img"
            alt="Logo"
            src={saliditas[0].imagen}
          />
        </Box>
        <Box  onClick={() => handleMap()} className={Style.divimagen}>
          <div> Donde Comer? </div>
          <Box className={Style.cont}
            component="img"
            alt="Logo"
            src={saliditas[0].imagen2}
          />
        </Box>
    </Box>
  )
}


