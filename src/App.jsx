import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAddUser = () => {
    if (username.trim() !== '' && password.trim() !== '' && !users.find(user => user.username === username)) {
      setUsers([...users, { username, password }]);
      setUsername('');
      setPassword('');
    } else {
      alert('Nome de usuário ou senha inválidos, ou usuário já existe.');
    }
  };

  const handleRemoveUser = (userToRemove) => {
    setUsers(users.filter(user => user.username !== userToRemove));
  };

  return (
    <div>
      {/* Caixa principal */}
      <div className="container">
        <h1>Cadastro de Usuários</h1>

        <div className="inputContainer">
          <input
            type="text"
            placeholder="Digite o nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
          <input
            type="password"
            placeholder="Digite a senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
          <button onClick={handleAddUser} className="addButton">Adicionar</button>
        </div>

        <ul className="userList">
          {users.map((user, index) => (
            <li key={index} className="userItem">
              <span>{user.username}</span>
              <button onClick={() => handleRemoveUser(user.username)} className="removeButton">
                <i className="fas fa-trash-alt"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
