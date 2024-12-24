import { Outlet } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
