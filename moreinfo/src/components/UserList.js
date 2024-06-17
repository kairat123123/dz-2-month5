import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'John Doe', info: 'Full information about John Doe' },
  { id: 2, name: 'Jane Smith', info: 'Full information about Jane Smith' },
];

const UserList = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <Link to={`/user/${user.id}`}>
              <button>More Info</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;