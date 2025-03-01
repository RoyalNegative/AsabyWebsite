import React, { useState } from "react";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.style.setProperty("--primary-color", darkMode ? "white" : "black");
    document.documentElement.style.setProperty("--secondary-color", darkMode ? "black" : "white");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className={`header-container ${darkMode ? "dark-mode" : ""}`}>
        <svg className="menu-icon icon" onClick={toggleMenu}>
          <use href="./images/symbol-defs.svg#icon-menu"></use>
        </svg>
        <svg className="Asaby-icon">
          <use href="./images/symbol-defs.svg#icon-blacklogo"></use>
        </svg>
        <div className="hidden md:flex gap-5">
          <svg className="dark-icon icon" onClick={toggleDarkMode}>
            <use href="./images/symbol-defs.svg#icon-moon"></use>
          </svg>
        </div>
      </header>

      <nav className={`menu-drawer ${menuOpen ? "open" : ""}`}>
        <ul className="menu-items-container">
          <a href="/"><li>Ana Sayfa</li></a>
          <a href="/shop"><li>Mağaza</li></a>
          <a href="/profile"><li>Profil</li></a>
        </ul>
      </nav>

      <main>{children}</main>

      <footer>
        <p>&copy; 2025 Asaby</p>
      </footer>
    </div>
  );
};

export default Layout;