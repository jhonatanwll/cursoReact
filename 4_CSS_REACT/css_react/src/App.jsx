import { useState } from "react";
import "./App.css";

// 2 - Css de componente
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  // 4 - css inline dinamico
  const [n, setN] = useState("");

  // 5 - classes dinamicas
  const redTitle = false;

  return (
    <div className="App">
      {/* 1 - css global */}
      <h1>Css no React</h1>
      {/* 2 - css de componente */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>
      {/* 3 - inline style */}
      <p
        style={{ color: "blue", padding: "25px", borderTop: "5px dotted blue" }}
      >
        Este elemento tem estilos inline
      </p>
      {/* 4 - inline style dinamico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico
      </h2>
      <button
        onClick={() => {
          if (n > 10) {
            setN(1);
          } else {
            setN(14);
          }
        }}
        style={n < 10 ? { color: "purple" } : { color: "magenta" }}
      >
        Clique aqui para mudar o texto de cor!
      </button>

      {/* 5 - classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse título vai ter uma classe
      </h2>
      {/* 6 - css modules */}
        <Title />
    </div>
  );
}

export default App;
