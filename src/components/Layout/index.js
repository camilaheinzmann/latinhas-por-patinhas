import React from "react";

import Header from "../Header";
import About from "../About";
import HowToHelp from "../HowToHelp";
import "./styles.css";

function Layout() {
  return (
    <div className="container">
      <Header />
      <About />
      <HowToHelp />
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
