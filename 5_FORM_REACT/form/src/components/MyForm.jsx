import { useState } from "react";
import classes from "./MyForm.module.css";

const MyForm = () => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name, email);

  return (
    <div>
      {/* <h1 className={classes.title}>My Form</h1> */}
      {/* 1 - criação de form */}
      <form>
        <div>
          <label htmlFor="  name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
          />
        </div>
        {/* 2 - label envolvendo Input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite o seu nome"
            // 4 - Simplificando a manipulação 
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
      </form>
    </div>
  );
};

export default MyForm;
