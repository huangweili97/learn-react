import React from 'react';

// Define the type for the props
interface UserDetailsProps {
  username: string;
  onBack: () => void;
}

const UserDetails = ({ username, onBack }: UserDetailsProps) => {
  return (
    <div>
      <button onClick={onBack}>Back to User List</button>
      <h1>Details for {username}</h1>
      <p>More information about {username}...</p>
    </div>
  );
};

export default UserDetails;
