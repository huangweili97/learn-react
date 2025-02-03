import { useState } from 'react';

export default function Form() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e: { target: { value: string; }; }) {
    setFirstName(e.target.value); // update first name
  }

  function handleLastNameChange(e: { target: { value: string; }; }) {
    setLastName(e.target.value); // update last Name
  }

  function handleReset() {
    setFirstName(''); // reset firstName
    setLastName(''); // reset lastName
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName} 
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName} 
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}
