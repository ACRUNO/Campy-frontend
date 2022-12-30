import React from "react";
import {Box, Card, Grid, Typography, CardContent, CardMedia, Skeleton } from '@mui/material'
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Style from "../Camping/Camping.module.css"



export default function SkeletonCardCamping(){
    return (
    
    
    <Card className={Style.card} sx={{ display: 'flex', mt:1, mb:2,  mr:5, height:200 , width:0.90, p:1,boxShadow: 3, justifyContent:"space-around",alignItems:"center"}}>

        <CardMedia > <Skeleton  sx={{width:"15rem",height:"30rem"}}/> </CardMedia>
       
        
      <Box >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', width:500, p:0, m:0}}>
          <Typography component="div" variant="h4" sx={{mb:1}}>
          <Skeleton/>
          </Typography>
          <Typography variant="h6">
          <Skeleton/>
          </Typography>
          <Typography variant="h6">
          <Skeleton/>
          </Typography>
          <Typography variant="subtitle1">
          <Skeleton/>
          </Typography>
          <Typography variant="subtitle1">
          <Skeleton/>
          </Typography>
          <Typography variant="subtitle1">
          <Skeleton/>
          </Typography>
        </CardContent>
      </Box>

      <Box flexDirection="column" display="flex" component="div" justifyContent="space-between" alignItems="flex-end">
      <Box className={Style.rankingcont} display="flex" alignContent="flex-end">
            
            <Typography variant="h5"> <Skeleton sx={{width:"15rem"}}/></Typography>
      </Box>
      
      <Box display="flex" flexDirection="column"  justifyContent="flex-end" component="div" >
      <Typography variant="subtitle1" color="text.secondary" component="div" align="right"><Skeleton sx={{width:"12rem"}}/></Typography>
      <Typography variant="h4"  component="div" align="right">
        <Skeleton></Skeleton>
      </Typography>
      <Typography variant="body2" color="text.secondary" component="div" align="right"> <Skeleton/> </Typography>
      </Box>
      </Box>
      
    </Card>
  
    
    )}
