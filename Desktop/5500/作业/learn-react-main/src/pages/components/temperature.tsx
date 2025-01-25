import React, { useState, ChangeEvent } from 'react';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState<number>(0); // State is managed within this component

  // Event handler with the correct type for ChangeEvent
  const handleTemperatureChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTemperature(Number(e.target.value)); // Convert string to number
  };

  const temperatureInFahrenheit = ((temperature * 9) / 5 + 32).toFixed(2);

  return (
    <div>
      <label>
        Enter temperature in Celsius:
        <input
          type="number"
          value={temperature}
          onChange={handleTemperatureChange}
        />
      </label>
      <h2>Temperature in Fahrenheit: {temperatureInFahrenheit}</h2>
    </div>
  );
};

export default TemperatureConverter;
