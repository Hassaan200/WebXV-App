import './App.css'
import React from 'react';
import logo from './assets/Images/logonav.png';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SideNav from './Components/SideNav';
import Footer from './Components/Footer';

function App() {
  

  return (
    <>
    <Navbar/>
    <SideNav/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
