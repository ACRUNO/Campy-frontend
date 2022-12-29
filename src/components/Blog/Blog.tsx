import Footer from "../Footer/Footer";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import { flexbox } from "@mui/system";
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from '../../store/index';
import { useEffect } from "react";
import * as actions from "../../actions/Blog.action"
import Paper from '@mui/material/Paper';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";




export default function Blog() {

const dispatch: AppDispatch = useDispatch()
const allPosts:{titulo:string,username: string, fecha: string,texto:string,}[] = useSelector((state: RootState) => state.allPosts)

useEffect(()=>{
    dispatch(actions.getAll_posts())
  },[dispatch])
  
return (
    <React.Fragment>
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost/>
          <Grid container columnSpacing={2} display="flex" alignItems="center" justifyContent="center" sx={{mb:4}}>
          <Grid item md={10} sx={{pr:10}}>
          <TextField id="outlined-basic" label="Buscar..." variant="outlined" fullWidth size="small" />
          </Grid>
          <Grid item>
          {/* hay que chequear que este logueado!!!!!!!! */}
          <Button variant="contained" color="secondary">Crear nuevo POST</Button> 
          </Grid>
          </Grid>
          <Grid container spacing={4} display="flex" flexDirection="column" alignContent="center" >
            {allPosts.map((p) => (
            <FeaturedPost key={p.titulo} title={p.titulo} description={p.texto} date={p.fecha} username={p.username}/>
            ))}
          </Grid>
        </main>
      </Container>
      <Footer/>
      </React.Fragment>
  );
}
















//BLOG EN CONSTRUCCION
// export default function Blog() {
//     return (
//         <Box>
//             <Box 
//             sx={{ 
//                 height: '60vh', 
//                 display: "flex",
//                 justifyContent: "center"
//                 }}>
//                 <Box 
//                     component="img"
//                     alt="Componente en progreso..."
//                     src="https://res.cloudinary.com/pfcampy/image/upload/v1670853348/campy/Funcionalidad_en_desarrollo_y7cqm6.jpg"
//                     sx={{ backgroundPosition: 'center',mt:'5%',mb:'3%' }}
//                 />
//             </Box>
//             <Footer />
//         </Box>
//     )
// }