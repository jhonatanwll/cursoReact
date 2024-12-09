import React from "react";
// 3 -  alterando o valor do contexto
// import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter.jsx";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext.jsx";

// 5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

const Home = () => {
  // const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
