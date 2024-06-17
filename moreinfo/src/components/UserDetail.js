import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'John Doe', info: 'Full information about John Doe' },
  { id: 2, name: 'Jane Smith', info: 'Full information about Jane Smith' },
];

const UserDetail = () => {
  const { id } = useParams();
  const user = users.find(user => user.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <img src="https://via.placeholder.com/150" alt="avatar" />
      <p>{user.info}</p>
      <Link to="/">
        <button>Back to User List</button>
      </Link>
    </div>
  );
};

export default UserDetail;  