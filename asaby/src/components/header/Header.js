import React from "react";
import "./header.css";
import MenuIcon, { MenuLogo } from "../../assets/svgComponents/menuicon";
import BlackLogo from "../../assets/svgComponents/BlackLogo";
import WhiteLogo from "../../assets/svgComponents/WhiteLogo.jsx";
import DarkMode from "../../assets/svgComponents/DarkMode";
import LightMode from "../../assets/svgComponents/LightMode"; 
import { useState } from "react";
const darkmodeicon = document.getElementById("dark-icon");





const Header = () => {
  

  const [isDarkMode, setIsDarkMode] = useState(false);

const toggleDarkMode = () => {
  console.log("Dark mode toggled");
  setIsDarkMode(!isDarkMode);
  console.log("Dark mode state:", isDarkMode);
};

  return (
    <header className="header-container">
      <WhiteLogo /> 
      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#profile">Profile</a></li>
        </ul>
      </nav>
      <DarkMode onClick={toggleDarkMode} />
      </header>
  );
};

export default Header;