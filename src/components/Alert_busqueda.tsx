import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from "react";


type Props = {
    estadoopen:boolean
    setestadoopen:(value: React.SetStateAction<boolean>) => void
    } 

export default function MaxWidthDialog(props:Props) {
  const [open, setOpen] = React.useState(props.estadoopen);

  useEffect(()=>{
        setOpen(props.estadoopen)
  }
)
  

  const handleClose = () => {
    setOpen(false);
    props.setestadoopen(false)
  };


  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Lo sentimos...</DialogTitle>
        <DialogContent>
          <DialogContentText align="center">
            No tenemos campings que se ajusten a tu búsqueda por el momento
          </DialogContentText>
          <Box
            component="img"
            src="https://res.cloudinary.com/pfcampy/image/upload/v1670848679/Raskrasil.com-Coloring-Pages-Camping-21_grudhm.jpg"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mr: 25,
              ml:29,
              mt:2,
              width: 350,
            }}
          >
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">Seguir Buscando</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}