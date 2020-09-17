import React, {Fragment} from 'react';
import Card from "./Componentes/Card.jsx";
import Header from "./Componentes/Header.jsx";
import Box from '@material-ui/core/Box';
import Footer from "./Componentes/footer.jsx";
import Main from "./Componentes/Main.jsx";
import List from "./Componentes/List/List.js";
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
            img="http://books.google.com/books/content?id=aqeCwxbRWvsC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE708FDnBuTcRhHhIqDujIgSmTtD286naF7iEOc35cicv_ykURZIaA7UHm0h1fEI6FAQdssmCoBq90jcZng1QLlLsfQ061-dq1ty8srBGdiKGF8vi1W4wyA04yAbc730A4S2Stcy9&source=gbs_api"
            titulo="Milk and Honey Milk and Honey Milk and Honey"
            autor="Henrique P."
            resumo="Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar."
          />
          <List/>
        </div>
        <Box p={2} bgcolor="background.paper">
        </Box>
       <Footer />
    </Fragment>
  );
}

export default App;
