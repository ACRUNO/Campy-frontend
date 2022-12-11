import React from "react";
import { Pagination , Stack, Box} from "@mui/material";

type Props = {
    campingsxPage:number,
    allCampings: number,
    currentPage: number,
    setCurrentPage: (value: React.SetStateAction<number>) => void
  }

export default function Paginado (props: Props){

    const handleChange=(e:React.ChangeEvent<unknown>,page:number)=>{
        props.setCurrentPage(page)
    }
return (
    <Box sx={{display:"flex", justifyContent:"center", mb:1, mt:1}}>
    <Stack  spacing={2}>
      <Pagination count={Math.ceil(props.allCampings/props.campingsxPage)} color="secondary" onChange={handleChange}/>
    </Stack>
    </Box>
)
}
