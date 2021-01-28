import React from 'react';

import Header from "../Header";
import About from "../About";
import "./styles.css";


function Layout(){
    return(
        <div className="container">
            <Header />
            <About />
            {/* <HowToHelp /> */}
            {/* <Adopt /> */}
            {/* <Footer /> */}
        </div>
    );
}

export default Layout;