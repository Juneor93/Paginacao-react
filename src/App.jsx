import React, {Fragment} from 'react';
import Card from "./Componentes/Card.jsx";

function App() {
  return (
    <Fragment>
        <h1>Paginação React</h1>

        {/*
        * Estrutura de teste
        * Quando o Main for criado é pra jogar os cards pra dentro dele
        * Os valores das propriedades é para serem subtituídos pelos dados da API
        */}
        <div className="container centralizar">
          <Card
            img="./img/livro.png"
            titulo="Milk and Honey Milk and Honey Milk and Honey"
            autor="Henrique P."
            resumo="Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar."
          />
        </div>
    </Fragment>
  );
}

export default App;
