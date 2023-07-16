import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from './api';
import { User } from './types';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.getUsers();
        setUsers(response);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username} - {user.email}</li>
          ))}
        </ul>
      ) : (
        <p>Loading items...</p>
      )}
    </div>
  );
};

export default App;
