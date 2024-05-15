import "./App.css";
// 2 - imagem em assets
import night from "./assets/night.jpg";

// 3 - useState
import Data from "./components/Data";

// 4 - renderizacao de lista
import ListRender from "./components/ListRender";

// 7 - Render condicional
import ConditionalRender from "./components/ConditionalRender";

// 8 - props
import ShowUserName from "./components/ShowUserName";

// 9 - desestruturando props
import CarDetails from "./components/CarDetails";

// 11 - Renderização de listas com componente
const cars = [
  { id: 1, brand: "Ducat", color: "Dourado", km: 0 },
  { id: 2, brand: "Ducat", color: "Dourado", km: 0 },
  { id: 3, brand: "Ducat", color: "Dourado", km: 0 },
];

function App() {
  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
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
      {/* 8 - Props */}
      <ShowUserName name="Jhonatan" age="25" />
      {/* 9 - desestruturando props */}
      <CarDetails brand="VW" km={999} color="Vermelho " />
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={1234} color="Branco " />
      <CarDetails brand="Gol" km={0 + "km"} color="Azul" />
      {/* 11 - Renderização de listas com componente */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
        />
      ))}
    </div>
  );
}

export default App;
