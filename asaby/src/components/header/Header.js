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
      <MenuIcon />
      <BlackLogo />
      <WhiteLogo /> 

      <div>
        <DarkMode onClick={toggleDarkMode} />
        <LightMode onClick={toggleDarkMode}/>
      </div>
    </header>
  );
};

export default Header;