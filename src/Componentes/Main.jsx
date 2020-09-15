import React from 'react';
import '../Css/Main.css';
import Bgintro from './img/bg-intro.png';

export default function Main() {
  return (
    <>
    <div className="navbar">
        <h1>LIVRARIA ACME</h1>
        <figure id="container">
            <img src={Bgintro} className="Bgintro" alt="foto biblioteca" />
            <p>Encontre os livros que tanto busca com quem melhor entende do assunto</p>
        </figure>
    </div>
    </>
  );
}
