import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:3000/api/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const fetchUsers = () => {
    axios.get(API_URL).then(res => setUsers(res.data));
  };

  const handleAdd = () => {
    axios.post(API_URL, { name }).then(() => {
      setName('');
      fetchUsers();
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">User Management</h1>
      <input
        className="border p-2 mr-2"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleAdd}>Add</button>

      <ul className="mt-4">
        {users.map((user, idx) => (
          <li key={idx}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
