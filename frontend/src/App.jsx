import React from 'react'
import Header from './component/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/landing-page/Home';
import Register from './Pages/Auth/Register';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  )
}

export default App
