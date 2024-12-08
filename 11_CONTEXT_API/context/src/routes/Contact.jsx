import React from "react";
// 3 -  alterando o valor do contexto
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext.jsx";
import { useCounterContext } from "../hooks/useCounterContext.jsx";

export const Contact = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Página de contato</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};
