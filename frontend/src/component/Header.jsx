import React from 'react'

function Header() {
  return (
   <header id="dash-header">
 
    {/* Software Name */}
    <h2 className="logo">Willow</h2>

    {/* Navigation Links */}
    <nav className="nav">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#features">Features</a></li>
      </ul>
     </nav>
              
 
</header>
  )
}

export default Header
