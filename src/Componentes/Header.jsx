import React from 'react';
import '../Css/Header.css';

export default () =>  (
  <header className="Header">
    <div className="container-titulo">
      <h1>Livraria ACME</h1>
    </div>

    <div style={{background: "url(./img/bg-intro.png) no-repeat center", backgroundSize: "cover"}} className="intro">
      <p>Encontre o livros que tanto busca com quem melhor entende do assunto</p>
    </div>
  </header>
);
