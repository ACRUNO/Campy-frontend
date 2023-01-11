import { Box, Skeleton } from "@mui/material"
import s from './CreateOrUpdateMap.module.css';

export default () =>
  <Box width="100%" minHeight="calc(100vh - 70px)"
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      bgcolor: "#16161F"
    }}
  >
    <Box sx={{ bgcolor: 'rgb(250, 250,250)', m: "5.5rem 0" }} className={s.container}>
      <Skeleton width="90%" height="180px" sx={{ m: '20px auto 0' }} />
      <Box display="flex" justifyContent="space-evenly" flex="1 1">
        <Skeleton width="100%" height="100px" sx={{ m: '20px' }} />
        <Skeleton width="100%" height="100px" sx={{ m: '20px' }} />
      </Box>
      <Skeleton width="90%" height="80px" sx={{ m: '5px auto' }} />
      <Skeleton width="90%" height="80px" sx={{ m: '5px auto' }} />
      <Skeleton width="95%" height="300px" sx={{ m: '5px auto' }} />
      <Box sx={{ pb: '15px' }}>
        <Skeleton width="150px" height="100px" sx={{ float: 'right', mr: '15px' }} />
      </Box>
    </Box>
  </Box>
