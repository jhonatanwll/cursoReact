import React from "react";
// 3 -  alterando o valor do contexto
// import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter.jsx";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext.jsx";

import { CounterContext } from "../context/CounterContext.jsx";

const Home = () => {
  // const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
