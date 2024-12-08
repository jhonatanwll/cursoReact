import React from "react";
// 3 -  alterando o valor do contexto
import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter.jsx";

import { CounterContext } from "../context/CounterContext.jsx";

const Home = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
