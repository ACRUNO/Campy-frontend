import Footer from "../Footer/Footer";
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Container from '@mui/material/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from '../../store/index';
import { useEffect, useState} from "react";
import * as actions from "../../actions/Blog.action"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import PaginadoBlog from "./Paginado";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";





export default function Blog() {

const dispatch: AppDispatch = useDispatch()
const navigate = useNavigate()

const user = useSelector((state: RootState) => state.user);
const allPosts:{id:number,foto:string, titulo:string,username: string, fecha: string,texto:string,}[] = useSelector((state: RootState) => state.postbuscados)
const [alertForm, setAlertForm] = useState(false);


const [currentPage, setCurrentPage] = useState(1);
const [postsxPage] = useState(6);
const indexLastPost: number = currentPage * postsxPage;
const indexFirstPost: number = indexLastPost - postsxPage;

const currentPosts: {id:number, foto: string, titulo:string,username: string, fecha: string,texto:string,}[] = allPosts.slice(indexFirstPost, indexLastPost)

const handleChange=(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
    e.preventDefault();
    setCurrentPage(1)
    dispatch(actions.getPosts_byname(e.target.value))  
}

const handleSesion=(e: React.MouseEvent<HTMLTextAreaElement | HTMLButtonElement>)=>{
  e.preventDefault();
  navigate("/login")
}


const handleClick=() =>{
  if(user !== null){
    navigate("/blog/crearpost")}
  else{
    setAlertForm(true)
  }
}

useEffect(()=>{
    dispatch(actions.getAll_posts())
  },[dispatch])
  
return (
    <React.Fragment>
      <Container maxWidth={false} sx={{bgcolor: 'rgb(245, 245, 245)'}}>
        <main>
          <MainFeaturedPost/>
          <Grid container columnSpacing={4} display="flex"  justifyContent="space-between" sx={{pb:4}} >
          <Grid item xs={6} md={9} >
          <TextField id="outlined-basic" label="Buscar..." variant="outlined" fullWidth size="small"  onChange={(e)=>handleChange(e)} />
          </Grid>
          <Grid item>
          <Button variant="contained" color="secondary" onClick={handleClick}>Crear nuevo POST</Button> 
          </Grid>
          </Grid>
          <Grid container spacing={4} md={false} display="flex" flexDirection="column" alignContent="center" sx={{pb:8}} >
            {currentPosts.map((p) => (
            <FeaturedPost key={p.titulo} id={p.id} title={p.titulo} description={p.texto} date={p.fecha} username={p.username} foto={p.foto}/>
            ))}
          </Grid>
        </main>
        <PaginadoBlog
                postsxPage={postsxPage}
                allPosts={allPosts.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                />
      </Container>
      
         {/* <script src="https://apps.elfsight.com/p/platform.js" defer></script>
            <div className="elfsight-app-d17e10b2-0548-4182-bee0-0eccaa8d4ba2"></div> */}
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div className="elfsight-app-4b3e1e5e-fea2-4450-887b-8e3a7b32e3e5"></div>
      <Footer/>
      <Dialog
        fullWidth
        maxWidth="md"
        open={alertForm}
        >
        <DialogTitle align='center'>Es necesario iniciar sesión en CAMPY para crear un post</DialogTitle>
        <DialogContent sx={{display: 'flex', justifyContent:"center"}}>
        <Button variant="contained" color="secondary" onClick={(e)=>handleSesion(e)}>Iniciar sesión</Button>
        </DialogContent>
        </Dialog>
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