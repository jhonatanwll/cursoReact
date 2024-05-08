import "./App.css";
// 2 - imagem em assets
import night from "./assets/night.jpg";

// 3 - useState
import Data from "./components/Data";

// 4 - renderizacao de lista 
import ListRender from "./components/ListRender";

// 7 - Render condicional
import ConditionalRender from "./components/ConditionalRender";

function App() {
  return (
    <div className="App" style={{paddingBottom: "500px"}}>
      <h1>Avaçando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets */}
      <img src={night} alt="Outra imagem " />

      {/* 3 - useState */}
      <Data />  

    {/* 4 - render de lista  */}
    <ListRender />
    {/* 7 - render condicional */}
    <ConditionalRender /> 
    </div>
  );
}

export default App;
