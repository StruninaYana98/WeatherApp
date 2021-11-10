export type Weather = {
  temperature: string;
  temp_feels_like: string;
  max_temperature: string;
  min_temperature: string;
  pressure: string;
  weatherId: number;
  description: string;
  wind: {
    speed: string;
    direction: string;
  };
};
