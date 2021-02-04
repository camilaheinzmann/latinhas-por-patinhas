import React from "react";

import "./styles.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="content-footer-container">
        <img
          src="../img/logo-latinhas-por-patinhas.png"
          alt="logo latinhas por patinhas"
        ></img>
        <div className="contact-info">
          <h2>Saiba mais em:</h2>
          <div className="icons-container">
            <a href="mailto:camilapostai.ch@gmail.com">
              <img
                className="icon"
                src="../img/mail.svg"
                alt="icone de e-mail"
              ></img>
            </a>
            <a href="https://github.com/camilaheinzmann">
              <img
                className="icon"
                src="../img/github.svg"
                alt="icone do github"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/camilaheinzmann/">
              <img
                className="icon"
                src="../img/linkedin.svg"
                alt="icone do linkedin"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <footer className="author-container">
        <span>
          Desenvolvido por <strong>Camila Heinzmann</strong>
        </span>
      </footer>
    </div>
  );
}

export default Footer;
