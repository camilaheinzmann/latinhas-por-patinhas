import React from 'react';

import "./styles.css";

function Header(){
    return(
        <div className="header-container">
            <div className="banner-container">
                <img className="logo-lpp" src='../img/logo-latinhas-por-patinhas.png'></img>
                <img className="banner-lpp" src='../img/recycling-banner.png'></img>
            </div>
        </div>
        
    );
}

export default Header;