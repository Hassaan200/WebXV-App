import './App.css'
import React from 'react';
import logo from './assets/Images/logonav.png';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SideNav from './Components/SideNav';
import Footer from './Components/Footer';
import Projects from './Components/All Projects';
import { Routes, Route } from 'react-router';

function App() {
  

  return (
    <>
    <Navbar/>
    <SideNav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
