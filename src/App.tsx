import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Camping from './components/Camping/Camping'
import Booking from "./components/Booking"
import LogIn from './components/LogIn/LogIn';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider } from '@mui/material/styles'
import theme from './themeConfig'
import Mapa from './components/Map/Map';
import Blog from './components/Blog/Blog';
import CreateCamping from './components/CreateCamping/CreateCamping';
import DashUsuario from './components/Dashboards/DashUsuario/DashUsuario';
import DashDueño from './components/Dashboards/DashDueño/DashDueño';
import Dashboard from './components/Dashboards/DashAdmin/DashAdmin';
import { AppDispatch, RootState } from './store';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserWithToken } from './actions';




function App() {

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) dispatch(loginUserWithToken({token}));
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
          <Route path="/dashusuario" element={<DashUsuario/>} />
          <Route path="/dashdueño" element={<DashDueño/>} />
          <Route path="/dashadmin" element={<Dashboard/>} />
        </Routes>
      </ThemeProvider>
    </React.Fragment>



  );
}

export default App;
