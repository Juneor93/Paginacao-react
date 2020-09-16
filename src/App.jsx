import React, {Fragment} from 'react';
import Card from "./Componentes/Card.jsx";
import Header from "./Componentes/Header.jsx";
import Box from '@material-ui/core/Box';
import Footer from "./Componentes/footer.jsx";
import Main from "./Componentes/Main.jsx";
import './Css/index.css';


function App() {
  return (
    <Fragment>
        <Header />
        <Main />
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
        <Box p={2} bgcolor="background.paper">
        </Box>
       <Footer />
    </Fragment>
  );
}

export default App;
