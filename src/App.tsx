import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Camping from './components/Camping/Camping'


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" />
        <Route path="/booking/camping/:id" element={<Camping/>} />
        <Route path="/login" />
        <Route path="/map" />
        <Route path="/blog" />
        <Route path="/create" />
        <Route path="/about" />
      </Routes>
    </React.Fragment>
    


  );
}

export default App;
