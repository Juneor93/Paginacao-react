import React, {Fragment} from 'react';
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
        <List />
        {/*
        * Estrutura de teste
        * Quando o Main for criado é pra jogar os cards pra dentro dele
        * Os valores das propriedades é para serem subtituídos pelos dados da API
        */}
        <div className="container centralizar">
        </div>
        <Box p={2} bgcolor="background.paper">
        </Box>
       <Footer />
    </Fragment>
  );
}

export default App;
