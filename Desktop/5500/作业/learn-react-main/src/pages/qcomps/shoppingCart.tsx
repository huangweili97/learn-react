import { useState } from 'react';

export default function RequestTracker() {
  // State hooks to keep track of pending and completed requests
  const [pending, setPending] = useState(0);   // 'pending' counts the number of requests that are pending
  const [completed, setCompleted] = useState(0); // 'completed' counts the number of requests that are completed

  /** 
   * This function simulates the process of purchasing an item.
   * It increments the 'pending' count, simulates a delay of 3 seconds (using await), 
   * and then updates the 'pending' and 'completed' counts accordingly.
   */
  async function handleClick() {
  
    setPending(prevPending => prevPending + 1); 
    await delay(3000); 
    setPending(prevPending => prevPending - 1); 
    setCompleted(prevCompleted => prevCompleted + 1); 
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>

      <h3>
        Completed: {completed}
      </h3>

      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

/**
 * Helper function to simulate a delay (such as a network request or processing time).
 * This function returns a promise that resolves after the specified time in milliseconds.
 * @param ms - The time (in milliseconds) to wait before resolving the promise.
 */
function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms); // Set a timeout that resolves the promise after 'ms' milliseconds
  });
}
