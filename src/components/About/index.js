import React from "react";

import "./styles.css";

function About() {
  return (
    <div className="about-container">
      <h1>O projeto</h1>
      <div className="about-content-container">
        <img
          src="../img/about-banner.png"
          alt="Voluntários recolhendo lixo reciclável"
        ></img>
        <p>
          Diariamente, toneladas de lixo são produzidas no mundo todo. Muitos
          desses resíduos são recicláveis e, embora exista em muitos lugares a
          coleta seletiva, muitas pessoas ainda não separam os lixos orgânicos e
          os recicláveis.
          <br />
          <br />
          O que muita gente não sabe é que a maioria dos lixos recicláveis, como
          o alumínio, podem ser vendidos por kg (mesmo que por um baixo custo).
          <br />
          <br />
          Pensando nisso, resolvemos conscientizar a população de uma forma bem
          fácil: Separar as latinhas de refrigerante, cerveja e alumínios em
          geral e, com a renda obtida através da sua venda, ajudar ONGs e
          protetores de animais. <br />
          <br />O valor pode ser pequeno, mas com a ajuda de muitos, podemos
          matar a fome e proporcionar uma vida melhor a vários animais.
        </p>
      </div>
    </div>
  );
}

export default About;
