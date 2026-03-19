import React from 'react'
import Header from './component/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/landing-page/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
   <Routes>
        <Route path="/hom3" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
  )
}

export default App
