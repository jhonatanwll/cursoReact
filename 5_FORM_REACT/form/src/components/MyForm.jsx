import classes from "./MyForm.module.css";

const MyForm = () => {
  return (
    <div>
      {/* <h1 className={classes.title}>My Form</h1> */}
      {/* 1 - criação de form */}
      <form>
        <div>
          <label htmlFor="  name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" />
        </div>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
};

export default MyForm;
