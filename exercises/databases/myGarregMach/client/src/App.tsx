import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const gId = localStorage.getItem('gId');
  localStorage.setItem('gId', 'slay');
  localStorage.clear();
  return (
    <Routes>
      <Route path="/" element={ gId ? <Navigate replace to={"/home"}></Navigate> : <Login/> }></Route>
      <Route path="/home" element={ !gId ? <Navigate replace to={"/"}/> : <Home/> }></Route>
    </Routes>
  );
}

export default App
