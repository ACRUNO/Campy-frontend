import { Backdrop, CircularProgress } from "@mui/material"
import { SetStateAction } from "react"
import { VERDE_CLARO } from "./colors"

type LoaderTypes = {
  open: boolean
}

export default function Loader({open}: LoaderTypes) {
  return (
    <Backdrop
      sx={{ color: VERDE_CLARO, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
    <CircularProgress color="inherit" size='80px'/>
  </Backdrop>
  )
}