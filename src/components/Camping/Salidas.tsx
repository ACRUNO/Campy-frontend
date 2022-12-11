import React from "react"
import { Box } from '@mui/material';
import fotito from "./salir.png"
import fotito2 from "./comilona.webp"
import Style from "./Salidas.module.css"

   export default function Salidas() {
  let saliditas = [
 {name : "Donde comer",
  imagen : fotito,  
  imagen2 : fotito2
}
  ]

    return (
        <Box className={Style.total}>
              <Box className={Style.divimagen}> 
                    <div> Donde Salir? </div>
                 <Box className={Style.cont}
                            component="img"
                            
                            // className={Style.imagencita}
                            alt="Logo"
                            src={saliditas[0].imagen}
                            />
                            </Box>
                <Box className={Style.divimagen}> 
                    <div> Donde Comer? </div>
                 <Box className={Style.cont}
                            component="img"
                            
                            // className={Style.imagencita}
                            alt="Logo"
                            src={saliditas[0].imagen2}
                            />
                            </Box>


        </Box>
    )
   }
