import React, {Fragment} from 'react';
import Card from "./Componentes/Card.jsx";
import Main from "./Componentes/Main.jsx";
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import './Css/index.css';
import Footer from './Componentes/footer.jsx';

const useStyles = makeStyles(() =>
  createStyles({
    divider: {
      width: '100%',
      maxWidth: 920,
      marginLeft: 215,
    },
    text:{
      marginLeft: 215,
      marginBottom: 0,   
      fontSize: 17,   
    }
  }),
);

function App() {
  const classes = useStyles();
  return (
    <Fragment>
        <Main />
        <Box p={2} bgcolor="background.paper">
        </Box>
        <h5 className={classes.text} style={{ fontFamily: 'Quando', color:'GrayText' }}>Livros</h5>
        <Divider  className={classes.divider} />
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
