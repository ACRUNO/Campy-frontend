import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { datosMenu } from "../../auxiliar";

export default function BasicMenu({ button, idButton, menuItems, handleSelectItems }: datosMenu) {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionItem = (event: { currentTarget: any }) => {
    handleSelectItems(event);
    handleClose();
  }

  return (
    <>
      <Button
          id={idButton}
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{color: 'black'}}
        >
          {button}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {
            menuItems?.map(item => <MenuItem onClick={handleOptionItem} data-my-value={item.value}>{item.key}</MenuItem>)
          }
        </Menu>
    </>
  );
}