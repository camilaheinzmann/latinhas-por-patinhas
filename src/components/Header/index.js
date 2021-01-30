import React from "react";

import "./styles.css";

function Header() {
  return (
    <div className="header-container">
      <div className="banner-container">
        <img
          className="logo-lpp"
          src="../img/logo-latinhas-por-patinhas.png"
          alt="logo latinhas por patinhas"
        ></img>
        <img
          className="banner-lpp"
          src="../img/recycling-banner.png"
          alt="banner voluntários recolhendo lixo reciclável"
        ></img>
      </div>
    </div>
  );
}

export default Header;
