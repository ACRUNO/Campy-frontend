import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import LogIn from './components/LogIn/LogIn';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider } from '@mui/material/styles'
import theme from './themeConfig'
import Map from './components/Map/Map';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" />
          <Route path="/booking/camping/:id" />
          <Route path="/login" element={<LogIn />} />
          <Route path="/map" element={<Map/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/create" />
          <Route path="/about" />
        </Routes>
      </ThemeProvider>
    </React.Fragment>



  );
}

export default App;
