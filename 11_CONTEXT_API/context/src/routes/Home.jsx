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

  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };
  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />

      {/* 6 - alterando contexto complexo */}

      <div>
        <button onClick={() => setTitleColor("RED")}> Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}> AZUL</button>
      </div>
    </div>
  );
};

export default Home;
