import { useState, useEffect } from "react";

import { useFetch } from "./hooks/useFetch";

// const url = "http://localhost:3000/products";
const url = "";

import "./App.css";

function App() {
  // 1 - resgatando dados
  const [products, setProducts] = useState([]);

  //  4  - Custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   getData();
  // }, []);

  // 2 - envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const product = {
      name,
      price,
    };

    // 5 - refatorando 
    httpConfig(product, "POST")

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - caregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);
  };

  return (
    <div className="App">
      <h1>HTTP em React</h1>
      { /* 6 -  loading */}
      {loading && <p>Carregando....  </p>}
      {/* 7  -tratando erro */}
      {error && <p>{error}</p>}
      {/* 1 - resgate de daos */}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price}
            </li>
          ))}
      </ul>
      {/* 2 - enviando os dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Preço</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* <input type="submit" value="Enviar" /> */}
          {/* 7 - Loading post  */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Enviar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
