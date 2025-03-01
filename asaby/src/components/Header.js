import React from "react";

const Header = () => {
  return (
    <header className="header-container">
      <svg className="menu-icon icon" id="menu-icon" xmlns="http://www.w3.org/2000/svg">
        <use href="./"></use>
      </svg>
      <svg className="Asaby-icon" id="asaby-icon-b">
        <use xlinkHref="./images/symbol-defs.svg#icon-blacklogo"></use>
      </svg>
      <svg className="Asaby-icon" id="asaby-icon-b">
        <use xlinkHref="./images/symbol-defs.svg#icon-blacklogo"></use>
      </svg>
      <svg className="Asaby-icon hidden" id="asaby-icon-w">
        <use href="./images/symbol-defs.svg#icon-whitelogo"></use>
      </svg>
      <div className="hidden md:flex gap-5">
        <svg className="dark-icon icon" id="dark-icon">
          <use href="./images/symbol-defs.svg#icon-moon"></use>
        </svg>
        <svg className="light-icon icon hidden" id="light-icon">
          <use href="./images/symbol-defs.svg#icon-sun"></use>
        </svg>
      </div>
    </header>
  );
};

export default Header;