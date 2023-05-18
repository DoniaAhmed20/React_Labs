import React, { useState } from 'react';
import Registretion from './Registeration';
import UserTable from './UserTable';

const Users = () => {
  const [users, setUsers] = useState([]);

  const handleRegistration = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <Registretion handleRegistration={handleRegistration} />
      <UserTable users={users} />
    </div>
  );
};

export default Users;