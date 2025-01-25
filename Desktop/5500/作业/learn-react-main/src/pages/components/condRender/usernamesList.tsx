import React from 'react';

// Define the type for the props
interface UsernameListProps {
  onUserClick: (username: string) => void;
}

const UsernameList = ({ onUserClick }: UsernameListProps) => {
  const usernames: string[] = ['Alice', 'Bob', 'Charlie', 'Dave'];

  return (
    <div>
      <h1>Usernames</h1>
      <ul>
        {usernames.map((username) => (
          <li key={username} onClick={() => onUserClick(username)}>
            {username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsernameList;
