import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando os dados")
   
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username || ""}
          />
          <FaUser className="icon" />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>
        <div className="sigup-link">
          <p>
            Não tem uma conta? <a href="#">Registre aqui</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
