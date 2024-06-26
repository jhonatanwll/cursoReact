import { useState } from "react";
import classes from "./MyForm.module.css";

const MyForm = ({ userName, userEmail }) => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const [bio, setBio] = useState("");

  // 9 - Select
  const [role, setRole] = useState("user");

  const handleName = (e) => {
    setName(e.target.value);
  };

  //  5 - envio de form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role);

    // validacao
    // envio

    // 7 - limpar o form
    setName("");
    setEmail("");
    setBio("");
    setRole("")
  };

  console.log(name, email);

  return (
    <div>
      {/* <h1 className={classes.title}>My Form</h1> */}
      {/* 1 - criação de form */}
      {/* 5 - envio de formulario */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="  name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            //  6 - controlled input
            value={name}
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
            // 6 - controlled input
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio || ""}
          ></textarea>
        </label>
        {/*   9 - Select */}
        <label> 
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />

        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
      </form>
    </div>
  );
};

export default MyForm;
