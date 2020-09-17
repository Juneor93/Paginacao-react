import React, {useState, useEffect} from 'react';
import Card from '../Card';


export default function List() {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState([1]);
  const [totalPage, setTotalPage] = useState([0]);
  const [cardsPage, setCardsPage] = useState([5]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getCards();
  },[page]);

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[loading]);

  function handleScroll(){
    if(window.innerHeight + document.documentElement.scrollTop < 
      document.documentElement.offsetHeight || 
      page === totalPage || loading
      ){
      return;
    }
    setPage(page + 1);  
  }

function getCards(){
  setLoading(true);
  fetch(` http://localhost:3001/book?_page=${page}&_limit=${cardsPage}`,{
    method: "GET"
  }) 
      .then(response => {
        setTotalPage(response.headers.get("X-Total-Count") / cardsPage);
        return response.json();
      })        
        .then(data => {
        setCards([...cards, ...data]);
        setLoading(false);
      });
}

  return (
    <div className="cards">
      {cards.map(dados => (
        <Card dados={dados}/>
      ))}  


        {loading && page > 1 && <img width="20" src={'img/imgLoading.gif'}/>}
    </div>   
  );
}

