import React from "react";
import { Pagination, Stack, Box } from "@mui/material";
import { WindowSharp } from "@mui/icons-material";

type Props = {
  postsxPage: number,
  allPosts: number,
  currentPage: number,
  setCurrentPage: (value: React.SetStateAction<number>) => void
}

export default function PaginadoBlog(props: Props) {

  const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
    props.setCurrentPage(page)
    window.scroll({ top: 690 })


  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center", pb: 6, mt: 1 }}>
      <Stack spacing={2}>
        <Pagination page={props.currentPage} count={Math.ceil(props.allPosts / props.postsxPage)} color="secondary" onChange={handleChange} />
      </Stack>
    </Box>
  )
}