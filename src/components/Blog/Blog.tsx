import Footer from "../Footer/Footer";
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Container from '@mui/material/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../store/index';
import { useEffect, useState } from "react";
import * as actions from "../../actions/Blog.action"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import PaginadoBlog from "./Paginado";
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import Card_chica from "./Card_chica";
import { allPosts } from "../../reducer/estados";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { sign } from "crypto";





export default function Blog() {

  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.user);
  const allPosts: allPosts[] = useSelector((state: RootState) => state.postbuscados)
  const postsVistos: allPosts[] = useSelector((state: RootState) => state.postsvistos)
  const postsComent: allPosts[] = useSelector((state: RootState) => state.postscomentados)

  const [avisoComentario, setAvisoComentario] = useState(false)
  let userPosts = user ? allPosts.filter(a => a.UsuarioId === user.id) : []
  let userPosts_nc = userPosts.filter(a => a.cant_comentarios !== a.comentarios_vistos)



  const [alertForm, setAlertForm] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsxPage, setPostsxPage] = useState(4);
  const indexLastPost: number = currentPage * postsxPage;
  const indexFirstPost: number = indexLastPost - postsxPage;
  const currentPosts: allPosts[] = allPosts.slice(indexFirstPost, indexLastPost)
  


  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    e.preventDefault();
    setCurrentPage(1)
    dispatch(actions.getPosts_byname(e.target.value))
  }

  const handleSesion = (e: React.MouseEvent<HTMLTextAreaElement | HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/login")
  }


  const handleClick = () => {
    if (user !== null) {
      navigate("/blog/crearpost")
    }
    else {
      setAlertForm(true)
    }
  }

  useEffect(() => {
    dispatch(actions.getAll_posts())
  }, [dispatch])

  return (
    <React.Fragment>
      <Container maxWidth={false} sx={{ bgcolor: 'rgb(245, 245, 245)' }}>
        <main>
          <MainFeaturedPost avisoComentario={avisoComentario} setAvisoComentario={setAvisoComentario} posts={userPosts_nc} />
          <Grid container display="flex" flexDirection="column" alignContent="space-around" sx={{ mb: 1, backgroundColor: '#D8E3C5', borderStyle: "double", borderColor: "#273115", borderRadius: 1.5 }}>
            <Typography component="h2" variant="h5" sx={{ mb: 1, pl: 3, pt: 1, textShadow: "5px 2px 36px #070707" }}><strong>Lo más comentado</strong></Typography>
            <Grid container spacing={2} display="flex" flexDirection="row" alignContent="center" justifyContent="center" sx={{ pb: 2, pl: 1, pr: 1 }} >
              {user && postsComent?.map((p) => (
                <Card_chica key={p.titulo} id={p.id} title={p.titulo} description={p.texto} date={p.fecha} username={p.username} foto={p.foto} comentarios={p.cant_comentarios} vistas={p.cant_visualizaciones} userId={p.UsuarioId} userNow={user.id} />
              ))}
              {user === null && postsComent?.map((p) => (
                <Card_chica key={p.titulo} id={p.id} title={p.titulo} description={p.texto} date={p.fecha} username={p.username} foto={p.foto} comentarios={p.cant_comentarios} vistas={p.cant_visualizaciones} userId={p.UsuarioId} userNow={0} />
              ))}
            </Grid>
          </Grid>

          <Grid container display="flex" flexDirection="column" alignContent="space-around" sx={{ mb: 1, backgroundColor: '#D8E3C5', borderStyle: "double", borderColor: "#273115", borderRadius: 1.5 }}>
            <Typography component="h2" variant="h5" sx={{ mb: 1, pl: 3, pt: 1, textShadow: "5px 2px 36px #070707" }}><strong>Lo más visto</strong></Typography>
            <Grid container spacing={2} display="flex" flexDirection="row" alignContent="center" justifyContent="center" sx={{ pb: 2, pl: 1, pr: 1 }} >
              {user && postsVistos?.map((p) => (
                <Card_chica key={p.titulo} id={p.id} title={p.titulo} description={p.texto} date={p.fecha} username={p.username} foto={p.foto} comentarios={p.cant_comentarios} vistas={p.cant_visualizaciones} userId={p.UsuarioId} userNow={user.id} />
              ))}
              {user === null && postsVistos?.map((p) => (
                <Card_chica key={p.titulo} id={p.id} title={p.titulo} description={p.texto} date={p.fecha} username={p.username} foto={p.foto} comentarios={p.cant_comentarios} vistas={p.cant_visualizaciones} userId={p.UsuarioId} userNow={0} />
              ))}
            </Grid>
          </Grid>


          <Grid container columnSpacing={4} display="flex" justifyContent="center" sx={{ pb: 4, pt: 2 }} >

            <Grid item xs={6} md={8.3} >
              <TextField color="success" id="outlined-basic" label="Buscar..." variant="outlined" fullWidth size="small" onChange={(e) => handleChange(e)} />
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={handleClick}>Crear nuevo POST</Button>
            </Grid>
          </Grid>
          <Grid container spacing={4} md={false} display="flex" flexDirection="column" alignContent="center" sx={{ pb: 8 }} >
            {user && currentPosts.map((p) => (
              <FeaturedPost key={p.titulo} id={p.id} title={p.titulo} description={p.texto} date={p.fecha} username={p.username} foto={p.foto} comentarios={p.cant_comentarios} vistas={p.cant_visualizaciones} userId={p.UsuarioId} userNow={user.id} tipo={p.tipo} imagenes={p.imagenes} />
            ))}
            {user === null && currentPosts.map((p) => (
              <FeaturedPost key={p.titulo} id={p.id} title={p.titulo} description={p.texto} date={p.fecha} username={p.username} foto={p.foto} comentarios={p.cant_comentarios} vistas={p.cant_visualizaciones} userId={p.UsuarioId} userNow={0} tipo={p.tipo} imagenes={p.imagenes} />
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
      <Footer />
      <Dialog
        fullWidth
        maxWidth="md"
        open={alertForm}
      >
        <DialogTitle align='center'>Es necesario iniciar sesión en CAMPY para crear un post</DialogTitle>
        <DialogContent sx={{ display: 'flex', justifyContent: "center" }}>
          <Button variant="contained" color="secondary" onClick={(e) => handleSesion(e)}>Iniciar sesión</Button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
















