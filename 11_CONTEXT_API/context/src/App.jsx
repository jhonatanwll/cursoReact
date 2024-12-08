import "./App.css";

import Navbar from "./components/Navbar.jsx";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <h1>CONTEXT API</h1>
      <Outlet />
    </div>
  );
}

export default App;
