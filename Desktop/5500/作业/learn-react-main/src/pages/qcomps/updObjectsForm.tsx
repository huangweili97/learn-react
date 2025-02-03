import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'John Woodrow',
    lastName: 'Wilson',
    likescore: 10,
  });

  /** 
   * Handles the click event to increase the like score by 1.
   * We use setPlayer to ensure the state is updated properly 
   * and the component re-renders with the new likescore.
   */
  function handlePlusClick() {
    setPlayer((prevPlayer) => ({
      ...prevPlayer, // Preserve the previous state
      likescore: prevPlayer.likescore + 1, // Increase the like score by 1
    }));
  }

  /** 
   * Handles the change in the first name input field.
   * We use setPlayer to update the firstName property while keeping other properties intact.
   */
  function handleFirstNameChange(e: { target: { value: string; }; }) {
    setPlayer((prevPlayer) => ({
      ...prevPlayer, // Preserve the previous state
      firstName: e.target.value, // Update the first name
    }));
  }

  /** 
   * Handles the change in the last name input field.
   * We use setPlayer to update the lastName property while keeping other properties intact.
   */
  function handleLastNameChange(e: { target: { value: string; }; }) {
    setPlayer((prevPlayer) => ({
      ...prevPlayer, // Preserve the previous state
      lastName: e.target.value, // Update the last name
    }));
  }

  return (
    <>
      <label>
        Like Score: <b>{player.likescore}</b>
        {'  '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
