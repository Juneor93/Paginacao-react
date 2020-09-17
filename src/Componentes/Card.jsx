import React from "react";
import "../Css/Card.css";
// import List from "./Componentes/List/List.js";

export default function Card(props) {
       return(
        <div className="Card col-12">
        <div className="img-container col-4">
           <img src={props.img} alt="Ilustração do livro"/>
        </div>

        <div className="infos-card col-8">
            <h2>{props.titulo}</h2>
            <span className="autor">{props.autor}</span>
            <p>{limitarResumo(props.resumo, 300)}</p>
            <a href={props.link}>Ver mais</a>
        </div>
    </div>
  );
}


function limitarResumo(resumo, limite) {
        const palavras = resumo.split(" ");

        let soma = palavras.length;
        const novoResumo = [];

        for(let i = 0; i < palavras.length; i++) {
            soma += palavras[i].length;

            if (soma <= limite) {
                novoResumo.push(palavras[i]);
            }
        }

        return `${novoResumo.join(" ")}...`;
}
