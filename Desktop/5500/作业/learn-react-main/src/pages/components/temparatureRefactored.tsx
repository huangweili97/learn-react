import React, { useState, ChangeEvent } from 'react';
import { TemperatureInputProps, TemperatureDisplayProps } from '../../types/temperature';
// Child Component 1: Temperature Input

const TemperatureInput = ({ temperature, onTemperatureChange }: TemperatureInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onTemperatureChange(Number(e.target.value)); // Convert string to number
  };

  return (
    <div>
      <label>
        Enter temperature in Celsius:
        <input
          type="number"
          value={temperature}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

// Child Component 2: Temperature Display

const TemperatureDisplay = ({ temperature }: TemperatureDisplayProps) => {
  const temperatureInFahrenheit = ((temperature * 9) / 5 + 32).toFixed(2);

  return (
    <h2>Temperature in Fahrenheit: {temperatureInFahrenheit}</h2>
  );
};

// Parent Component
const TemparatureConverter = () => {
  const [temperature, setTemperature] = useState<number>(0); // State is lifted to the parent

  const handleTemperatureChange = (newTemperature: number) => {
    setTemperature(newTemperature); // Update the temperature state
  };

  return (
    <div>
      <TemperatureInput temperature={temperature} onTemperatureChange={handleTemperatureChange} />
      <TemperatureDisplay temperature={temperature} />
    </div>
  );
};

export default TemparatureConverter;
