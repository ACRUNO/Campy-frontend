import React from "react";
import { Link } from "react-router-dom";
import {  useDispatch} from "react-redux";
import { useState} from "react";
import {Grid, Paper, Button, Box, TextField} from "@mui/material";
import * as actions from "../../../actions/Dash.admin.action"

type Props = {
    type:string}

export default function SearchBar (props:Props){

    let dispatch = useDispatch(); 
    const [input,setInput]=useState("")

    const handleChange=(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, tipo:string)=>{
        e.preventDefault();
        // setInput(e.target.value);
        if (tipo==="Usuario"){
        dispatch(actions.getUsuarios_byname(e.target.value))}
        if (tipo==="Camping"){
        dispatch(actions.getCampings_byname(e.target.value))
        }

        
    }

    return(
        <Box className="general">
                <TextField id="outlined-basic" label="Buscar..." variant="outlined" name="input" size="small" onChange={(e)=>handleChange(e,props.type)} />
        </Box>
    )
}