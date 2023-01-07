import React from "react"
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import BathtubIcon from '@mui/icons-material/Bathtub';
import HotTubIcon from '@mui/icons-material/HotTub';
import WifiIcon from '@mui/icons-material/Wifi';
import PetsIcon from '@mui/icons-material/Pets';
import Style from './Details.module.css'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import StraightenIcon from '@mui/icons-material/Straighten';
import RoofingIcon from '@mui/icons-material/Roofing';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import StarRateIcon from '@mui/icons-material/StarRate';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PoolIcon from '@mui/icons-material/Pool';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SecurityIcon from '@mui/icons-material/Security';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FestivalIcon from '@mui/icons-material/Festival';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DryIcon from '@mui/icons-material/Dry';
import ShowerIcon from '@mui/icons-material/Shower';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { useSelector } from "react-redux";

// interface Props {
//    {...Campings}
//   }

export default function Details() {

  let camp = useSelector((state: any) => state.detailCamping)


  return (


    /*  <Box className={Style.contenedorResponsive}>
       <List>
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               <ThumbUpIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.categoria === 1 ? "Si" : camp?.categoria === 0 ? "No" : camp?.categoria} primary="Categoria" />
           <Divider variant="inset" component="li" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               <DryIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.baños === 1 ? "Si" : camp?.baños === 0 ? "No" : camp?.baños} primary="Baños" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               <ShowerIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.duchas === 1 ? "Si" : camp?.duchas === 0 ? "No" : camp?.duchas} primary="Duchas" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               < PetsIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.mascotas === 1 ? "Si" : camp?.mascotas === 0 ? "No" : camp?.mascotas} primary="Mascotas" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               < LocalGroceryStoreIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.proveduria === 1 ? "Si" : camp?.proveduria === 0 ? "No" : camp?.proveduria} primary="Proveduria" />
         </ListItem>
         <ListItem >
           <ListItemAvatar>
             <Avatar>
               <LocalShippingIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.rodantes === 1 ? "Si" : camp?.rodantes === 0 ? "No" : camp?.rodantes} primary="Trailers" />
           <Divider variant="inset" component="li" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               <FestivalIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.salon_sum === 1 ? "Si" : camp?.salon_sum === 0 ? "No" : camp?.salon_sum} primary="Salón Sum" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               <RestaurantIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.restaurant === 1 ? "Si" : camp?.restaurant === 0 ? "No" : camp?.restaurant} primary="Restaurante" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               < SecurityIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.vigilancia === 1 ? "Si" : camp?.vigilancia === 0 ? "No" : camp?.vigilancia} primary="Vigilancia" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               < ContactPhoneIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.telefono === 1 ? "Si" : camp?.telefono === 0 ? "No" : camp?.telefono} primary="Telefonos de contacto" />
         </ListItem>
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               <PoolIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.pileta === 1 ? "Si" : camp?.pileta === 0 ? "No" : camp?.pileta} primary="Pileta" />
           <Divider variant="inset" component="li" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               <DirectionsCarIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.estacionamiento === 1 ? "Si" : camp?.estacionamiento === 0 ? "No" : camp?.estacionamiento} primary="estacionamiento" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               <VideogameAssetIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.juegos_infantiles === 1 ? "Si" : camp?.juegos_infantiles === 0 ? "No" : camp?.juegos_infantiles} primary="Juegos Infantiles" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               < StarRateIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.cantidad_estrellas === 1 ? "Si" : camp?.cantidad_estrellas === 0 ? "No" : camp?.cantidad_estrellas} primary="Estrellas" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               < ElectricBoltIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.parcela_iluminacion_toma_corriente === 1 ? "Si" : camp?.parcela_iluminacion_toma_corriente === 0 ? "No" : camp?.parcela_iluminacion_toma_corriente} primary="Toma corriente disponible" />
         </ListItem>
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               <FitnessCenterIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.maquinas_gimnasia === 1 ? "Si" : camp?.maquinas_gimnasia === 0 ? "No" : camp?.maquinas_gimnasia} primary="Gimnasio" />
           <Divider variant="inset" component="li" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               <WifiIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.wifi === 1 ? "Si" : camp?.wifi === 0 ? "No" : camp?.wifi} primary="Wi-Fi" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               <RoofingIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.parcela_techada === 1 ? "Si" : camp?.parcela_techada === 0 ? "No" : camp?.parcela_techada} primary="Parcelas techadas" />
         </ListItem>
         <Divider variant="inset" component="li" />
         <ListItem>
           <ListItemAvatar>
             <Avatar>
               < StraightenIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText secondary={camp?.parcela_superficie === 1 ? "Si" : camp?.parcela_superficie === 0 ? "No" : (camp?.parcela_superficie + " Metros cuadrados")} primary="Tamaño de parcela" />
         </ListItem>
       </List>
 
     </Box> */


    <Box className={Style.cont}>

      <Box>
        <List>
          <ListItem sx={{ minWidth: 300 }}>
            <ListItemAvatar>
              <Avatar>
                <ThumbUpIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.categoria === 1 ? "Si" : camp?.categoria === 0 ? "No" : camp?.categoria} primary="Categoria" />
            <Divider variant="inset" component="li" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <DryIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.baños === 1 ? "Si" : camp?.baños === 0 ? "No" : camp?.baños} primary="Baños" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ShowerIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.duchas === 1 ? "Si" : camp?.duchas === 0 ? "No" : camp?.duchas} primary="Duchas" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                < PetsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.mascotas === 1 ? "Si" : camp?.mascotas === 0 ? "No" : camp?.mascotas} primary="Mascotas" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                < LocalGroceryStoreIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.proveduria === 1 ? "Si" : camp?.proveduria === 0 ? "No" : camp?.proveduria} primary="Proveduria" />
          </ListItem>
        </List>
      </Box>

      <Box>
        <List>
          <ListItem sx={{ minWidth: 300 }}>
            <ListItemAvatar>
              <Avatar>
                <LocalShippingIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.rodantes === 1 ? "Si" : camp?.rodantes === 0 ? "No" : camp?.rodantes} primary="Trailers" />
            <Divider variant="inset" component="li" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FestivalIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.salon_sum === 1 ? "Si" : camp?.salon_sum === 0 ? "No" : camp?.salon_sum} primary="Salón Sum" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <RestaurantIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.restaurant === 1 ? "Si" : camp?.restaurant === 0 ? "No" : camp?.restaurant} primary="Restaurante" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                < SecurityIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.vigilancia === 1 ? "Si" : camp?.vigilancia === 0 ? "No" : camp?.vigilancia} primary="Vigilancia" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                < ContactPhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.telefono === 1 ? "Si" : camp?.telefono === 0 ? "No" : camp?.telefono} primary="Telefonos de contacto" />
          </ListItem>
        </List>
      </Box>

      <Box>
        <List>
          <ListItem sx={{ minWidth: 300 }}>
            <ListItemAvatar>
              <Avatar>
                <PoolIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.pileta === 1 ? "Si" : camp?.pileta === 0 ? "No" : camp?.pileta} primary="Pileta" />
            <Divider variant="inset" component="li" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <DirectionsCarIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.estacionamiento === 1 ? "Si" : camp?.estacionamiento === 0 ? "No" : camp?.estacionamiento} primary="estacionamiento" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <VideogameAssetIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.juegos_infantiles === 1 ? "Si" : camp?.juegos_infantiles === 0 ? "No" : camp?.juegos_infantiles} primary="Juegos Infantiles" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                < StarRateIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.cantidad_estrellas === 1 ? "Si" : camp?.cantidad_estrellas === 0 ? "No" : camp?.cantidad_estrellas} primary="Estrellas" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                < ElectricBoltIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.parcela_iluminacion_toma_corriente === 1 ? "Si" : camp?.parcela_iluminacion_toma_corriente === 0 ? "No" : camp?.parcela_iluminacion_toma_corriente} primary="Toma corriente disponible" />
          </ListItem>

        </List>
      </Box>

      <Box>
        <List>
          <ListItem sx={{ minWidth: 300 }}>
            <ListItemAvatar>
              <Avatar>
                <FitnessCenterIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.maquinas_gimnasia === 1 ? "Si" : camp?.maquinas_gimnasia === 0 ? "No" : camp?.maquinas_gimnasia} primary="Gimnasio" />
            <Divider variant="inset" component="li" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WifiIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.wifi === 1 ? "Si" : camp?.wifi === 0 ? "No" : camp?.wifi} primary="Wi-Fi" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <RoofingIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.parcela_techada === 1 ? "Si" : camp?.parcela_techada === 0 ? "No" : camp?.parcela_techada} primary="Parcelas techadas" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                < StraightenIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={camp?.parcela_superficie === 1 ? "Si" : camp?.parcela_superficie === 0 ? "No" : (camp?.parcela_superficie + " Metros cuadrados")} primary="Tamaño de parcela" />
          </ListItem>

        </List>
      </Box>



    </Box>

  )
}












