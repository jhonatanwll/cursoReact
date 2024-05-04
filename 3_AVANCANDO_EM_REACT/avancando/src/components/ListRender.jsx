import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Jhonatan", age: 25 },
    { id: 2, name: "João", age: 55 },
    { id: 3, name: "Sueli", age: 45 },
    { id: 4, name: "Everton", age: 28 },
  ]);

  return (
    <div>
        {/* 4 - render sem key */}
      <ul>
        {list.map((item, i) => (
          <li key={i} >{item}</li>
        ))}
      </ul>
      {/* 5 - render com key */}
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age} anos</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
