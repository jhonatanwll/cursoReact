import { useState } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");

  function handleClick(){
    navigator.clipboard.writeText(texto)
    alert("Copiado!")
  }

  return (
    <div>
      <h1>Formatador/Limpador de textos em React</h1>
      <p>Cole o seu texto aqui:</p>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
      <button onClick={handleClick}>Copiar</button>
      <p>Texto a ser copiado: "{texto}"</p>
    </div>
  );
}

export default App;
