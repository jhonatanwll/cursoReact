import React from "react";
// 3 -  alterando o valor do contexto
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext.jsx";
import { useCounterContext } from "../hooks/useCounterContext.jsx";

// 5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

export const Contact = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Página de contato</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};
