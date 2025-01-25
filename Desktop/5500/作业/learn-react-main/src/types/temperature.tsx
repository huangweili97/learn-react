export interface TemperatureInputProps {
    temperature: number;
    onTemperatureChange: (temp: number) => void;
}

export interface TemperatureDisplayProps {
    temperature: number;
}