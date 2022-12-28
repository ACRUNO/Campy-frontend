import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { datosMenu } from "../../auxiliar";

export default function BasicMenu({ button, idButton, menuItems, handleSelectItems, s }: datosMenu) {

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
          className={s && s['menu-button']}
        >
          {button}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{zIndex: 9999999}}
        >
          {
            menuItems?.map((item, i) => <MenuItem className={s && s['menu-item']} onClick={handleOptionItem} data-my-value={item.value} key={i}>{item.key}</MenuItem>)
          }
        </Menu>
    </>
  );
}