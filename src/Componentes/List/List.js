import React, { useState, useEffect } from 'react';
import Card from "../Card.jsx";
import Condicional from "../Condicional.jsx";
import "../../Css/Main.css";

export default function List() {
  const [dados, setDados] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(2);
  const [paginaLivro, setPaginaLivro] = useState(3);
  const [isCarregando, setIsCarregando] = useState(true);

  const buscarDados = async (url, config) => {
    try {
      const req = await fetch(url, config);
      setTotalPaginas(req.headers.get("X-Total-Count") / paginaLivro);
      const json = await req.json();

      setDados([ ...dados,...json]);
      setIsCarregando(false);
    } catch (e) {
      console.log(e.message);
    }
  }

  const manipularScroll = () => {
    const altura = window.innerHeight + document.documentElement.scrollTop;
    const posicao = document.documentElement.offsetHeight - 70;
    const isPagina = pagina === totalPaginas;

    if(altura < posicao || isPagina || isCarregando) {
      return;
    }

    setPagina(pagina + 1);
  }

  useEffect(() => {
    window.addEventListener("scroll", manipularScroll);
    return () => window.removeEventListener("scroll", manipularScroll);
  });

  useEffect(() => {
    buscarDados(`http://localhost:3001/livros?_page=${pagina}&_limit=${paginaLivro}`, {method: "GET"});
  }, [pagina]);

  return (
    <main className="Main container">
      <h1 className="col-12">Livro</h1>

      <ul className="col-12">
        {dados.map((item) => (
          <li key={item.id}>
            <Card 
            img={item.thumbnail} 
            titulo={item.title} 
            autor={item.authors} 
            resumo={item.description}
            link={item.link}/>
          </li>
        ))}
      </ul>
      
      <Condicional condicao={isCarregando}>
          <div className="box-anima">
              <div className="bolinha-anima"></div>
              <div className="bolinha-anima"></div>
              <div className="bolinha-anima"></div>
          </div>
      </Condicional>
    </main>
  );
}