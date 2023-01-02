import * as React from 'react';
import { Box } from '@mui/material';
import Style from "./Camping.module.css"
import { Typography , TextField } from '@mui/material';
import { useSelector } from 'react-redux';


export default function Resume () {

let camp = useSelector((state : any) => state.detailCamping)

let lugar = {
    localidad : "Villa Patito",
    provincia : "Mendoza"
}
let info = {
    localidad : "Conocido en la localidad como el baúl de los recuerdos, el Museo Regional Maracó tuvo su origen en noviembre de 1967, pero recién en 1991 conseguiría su propio espacio físico, actualmente situado en dependencias del Centro Cultural. Una de sus grandes impulsoras fue Rosa Elba La Gioiosa, quien además ejerció la dirección de este atractivo recinto histórico- cultural conformado por más de 700 piezas en exhibición.",
    provincia : "Este paseo se extiende junto a las vías del ferrocarril a lo largo de 8 cuadras, presenta hermosos jardines, bancos, juegos infantiles y hasta un anfiteatro donde se llevan a cabo importantes eventos culturales. Es un homenaje a todos los inmigrantes que llegaron a la provincia y pusieron a su servicio el trabajo y el empeño que los caracterizó."
}


    return (
        <Box sx={{maxWidth : 750}}>
            <Typography variant="h3" > Queres conocer mas de {camp?.localidad}  y {camp?.provincia} ? </Typography>
            <Box sx={{maxWidth : 600}}> 
            <Typography sx={{ marginTop : 1}} variant="body1"> {info.localidad} </Typography>
            <Typography sx={{ marginTop : 1 }} variant="body1"> {info.provincia} </Typography>
            </Box>
        </Box>
    )
}