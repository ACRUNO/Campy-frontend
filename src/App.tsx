import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Camping from './components/Camping/Camping'
import Booking from "./components/Booking/Booking"
import LogIn from './components/LogIn/LogIn';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider } from '@mui/material/styles'
import theme from './themeConfig'
import Mapa from './components/Map/Map';
import Blog from './components/Blog/Blog';
import CreateCamping from './components/CreateCamping/CreateCamping';
import Dashboard from './components/Dashboards/Dashboards';
import { AppDispatch, RootState } from './store';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserWithToken } from './actions/Login.action';
import Detalle from './components/Blog/Detalle_post';
import CrearPost from './components/Blog/CrearPost';
import { getUserFavoriteCampings } from './actions/User.action';
import AboutUs from './components/AboutUs/AboutUs'




function App() {

  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user) dispatch(getUserFavoriteCampings(user.id, user.token));
  }, [user]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) dispatch(loginUserWithToken(token));
  }, [])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/booking" element={ <Booking/> }/>
          <Route path="/booking/camping/:id" element={<Camping/>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/map" element={<Mapa/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/create" element={<CreateCamping/>} />
          <Route path="/about"  />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog/:id" element={<Detalle />} />
          <Route path="/blog/crearpost" element={<CrearPost/>} />
          <Route path="/aboutus" element={<AboutUs/>} />

        </Routes>
      </ThemeProvider>
    </React.Fragment>



  );
}

export default App;
