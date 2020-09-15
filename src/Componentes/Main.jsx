import React from 'react';
import '../Css/Main.css';
import Bgintro from './img/bg-intro.png';

export default function Main() {
  return (
    <>
    <div className="navbar">
        <h1>LIVRARIA ACME</h1>
        <div className="bgintro">
            <img src={Bgintro} alt="foto biblioteca" />
        </div>
    </div>
    </>
  );
}
