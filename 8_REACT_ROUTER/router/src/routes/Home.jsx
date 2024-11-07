import React from "react";

// 6 - carregamento de dados
import { useFetch } from "../hooks/useFetch";

//  7 - Rota dinâmica
import { Link } from "react-router-dom";

const url = "http://localhost:3000/products";

const Home = () => {
  const { data: items } = useFetch(url);
  return (
    <div>
      <h1>Home</h1>
      {/* 6 - carregamento dos produtos */}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              {/* 7 - rota dinâmica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
