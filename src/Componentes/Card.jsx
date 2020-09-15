import React from "react";
import "../Css/Card.css";

export default (props) => (
    <div className="Card col-12">
        <div className="img-container col-4">
            <img src={props.img} alt="Ilustração do livro"/>
        </div>

        <div className="infos-card col-8">
            <h2>{props.titulo}</h2>
            <span className="autor">{props.autor}</span>
            <p>{props.resumo}</p>
            <a href="#">Ver mais</a>
        </div>
    </div>
);
