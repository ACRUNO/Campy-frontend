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

interface Props {
   
   detalles : {baño : boolean ,baño2 : boolean ,baño3 : boolean ,baño4: boolean ,baño5: boolean , baño6 : string}
  }

const Details: React.FC<Props> = ({ detalles }) => {
let sisi = detalles
console.log(sisi)


    return (
        <Box className={Style.cont}>

            <Box>
            <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem sx={{minWidth : 300 }}>
        <ListItemAvatar>
          <Avatar>
          <BathtubIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño ? "si papa" : "No papa" } primary="Baños" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HotTubIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño2 ? "si papa" : "No papa" } primary="Agua Caliente 24hs" />
      </ListItem>
      <Divider variant="inset" component="li"  />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WifiIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño3 ? "si papa" : "No papa" } primary="Wi-Fi Libre" />
      </ListItem>
      <Divider variant="inset" component="li"  />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            < PetsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño6 } primary="Mascotas" />
      </ListItem>
     
    </List>
     </Box>

     <Box>
     <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem sx={{minWidth : 300 }}>
        <ListItemAvatar>
          <Avatar>
          <BathtubIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño ? "si papa" : "No papa" } primary="Baños" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HotTubIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño2 ? "si papa" : "No papa" } primary="Agua Caliente 24hs" />
      </ListItem>
      <Divider variant="inset" component="li"  />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WifiIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño3 ? "si papa" : "No papa" } primary="Wi-Fi Libre" />
      </ListItem>
      <Divider variant="inset" component="li"  />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            < PetsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño3 ? "si papa" : "No papa" } primary="Mascotas" />
      </ListItem>
     
    </List>
     </Box>

     <Box>
     <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem sx={{minWidth : 300 }}>
        <ListItemAvatar>
          <Avatar>
          <BathtubIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño ? "si papa" : "No papa" } primary="Baños" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HotTubIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño2 ? "si papa" : "No papa" } primary="Agua Caliente 24hs" />
      </ListItem>
      <Divider variant="inset" component="li"  />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WifiIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño3 ? "si papa" : "No papa" } primary="Wi-Fi Libre" />
      </ListItem>
      <Divider variant="inset" component="li"  />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            < PetsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño3 ? "si papa" : "No papa" } primary="Mascotas" />
      </ListItem>
     
    </List>
     </Box>

     <Box>
     <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem sx={{minWidth : 300 }}>
        <ListItemAvatar>
          <Avatar>
          <BathtubIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño ? "si papa" : "No papa" } primary="Baños" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HotTubIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño2 ? "si papa" : "No papa" } primary="Agua Caliente 24hs" />
      </ListItem>
      <Divider variant="inset" component="li"  />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WifiIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño3 ? "si papa" : "No papa" } primary="Wi-Fi Libre" />
      </ListItem>
      <Divider variant="inset" component="li"  />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            < PetsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={detalles.baño3 ? "si papa" : "No papa" } primary="Mascotas" />
      </ListItem>
     
    </List>
     </Box>

        </Box>


    )}

  

export default Details








