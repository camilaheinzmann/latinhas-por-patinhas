import React from "react";

import "./styles.css";

function HowToHelp() {
  return (
    <div className="hth-container">
      <div className="hth-content-container">
        <h1>Como ajudar</h1>
        <div className="hth-options-container">
          <div className="option">
            <h2>Sou uma ONG</h2>
            <p>
              Este projeto tem o objetivo apenas de conscientizar as pessoas a
              adotarem essa causa tão importante.
              <br />
              Não fazemos recolhimento de reciclagens, nem temos voluntários
              engajados ao projeto. A ideia é apenas sugerir uma nova forma de
              arrecadação para ONGs e protetores de animais
              <br />
              <br />
              Se quiser conversar mais sobre, pode entrar em contato pelo e-mail
              que consta no rodapé ou clicando
              <a className="mail-link" href="mailto:camilapostai.ch@gmail.com">
                {" "}
                aqui
              </a>
              .
            </p>
          </div>
          <div className="option">
            <h2>Quero ser um voluntário</h2>
            <p>
              Quando for descartar ou ao encontrar latinhas de alumínio, junte
              uma boa quantidade e entre em contato com empresas de reciclagem e
              informe-se sobre venda de alumínio por KG. O valor que você vai
              receber é simbólico e depende muito da quantidade, mas lembre-se
              que para quem não tem nada, o pouco é muito.
              <br />
              Se preferir, entregue as latinhas para uma ONG de proteção animal
              que eles com certeza vão saber como fazer e ficarão extremamente
              gratos.
            </p>
          </div>
        </div>
        <span>
          Você ajuda os animais abandonados, e ainda colabora com o meio
          ambiente.
        </span>
      </div>
    </div>
  );
}

export default HowToHelp;
