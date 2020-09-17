import React from "react";
import "../Css/Card.css";

export default function Card(props) {
    const imgUrl = "http://books.google.com/books/content?id=aqeCwxbRWvsC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE708FDnBuTcRhHhIqDujIgSmTtD286naF7iEOc35cicv_ykURZIaA7UHm0h1fEI6FAQdssmCoBq90jcZng1QLlLsfQ061-dq1ty8srBGdiKGF8vi1W4wyA04yAbc730A4S2Stcy9&source=gbs_api" 
    return(
        <div className="Card col-12">
        <div className="img-container col-4">
            <img src={imgUrl} alt="Ilustração do livro"/>
        </div>

        <div className="infos-card col-8">
            <h2>`{props.title}`</h2>
            <span className="autor">`{props.autor}`</span>
            <p>{limitarResumo(`props.description`, 300)}</p>
            <a href="#">Ver mais</a>
        </div>
    </div>
  );
}


function limitarResumo(resumo, limite) {
    // const palavras = resumo.split(" ");

    // let soma = palavras.length;
    // const novoResumo = [];

    // for(let i = 0; i < palavras.length; i++) {
    //     soma += palavras[i].length;

    //     if (soma <= limite) {
    //         novoResumo.push(palavras[i]);
    //     }
    // }

    // return `${novoResumo.join(" ")}...`;
}
