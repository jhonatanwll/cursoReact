import "./App.css";
// 2 - imagem em assets
import night from "./assets/night.jpg";
import Data from "./components/Data";

// 3 - useState

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
    </div>
  );
}

export default App;
