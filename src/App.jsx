import './App.css'
import React from 'react';
import logo from './assets/Images/logonav.png';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SideNav from './Components/SideNav';
import Footer from './Components/Footer';
import Projects from './Components/All Projects';
import { Routes, Route } from 'react-router';
import AboutPage from './Components/AboutPage';
import CommunityPage from './Components/CommunityPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase'; // adjust path
import { useEffect, useState } from 'react';


function App() {
  const [user, setUser] = useState(null);
  const [justRegistered, setJustRegistered] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser) setJustRegistered(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
    <Navbar user={user} justRegistered={justRegistered} setJustRegistered={setJustRegistered}/>
    <SideNav user={user} justRegistered={justRegistered} setJustRegistered={setJustRegistered}/>
    <Routes>
      <Route path="/" element={<Home setJustRegistered={setJustRegistered}/>} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Community" element={<CommunityPage />} />
    </Routes>
    <ToastContainer />
    <Footer/>
    </>
  )
}

export default App
