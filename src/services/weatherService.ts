
import { WeatherData, WeatherError } from '@/types/weather';

const API_KEY = 'b1d72eb2e2604883a5f172304251403';
const API_URL = 'https://api.weatherapi.com/v1/current.json';

export async function getWeatherForLocation(location: string): Promise<WeatherData> {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}&q=${encodeURIComponent(location)}&aqi=yes`);
    
    if (!response.ok) {
      const errorData = await response.json() as WeatherError;
      throw new Error(errorData.error?.message || 'Failed to fetch weather data');
    }
    
    const data = await response.json() as WeatherData;
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Weather data fetch failed: ${error.message}`);
    }
    throw new Error('An unknown error occurred');
  }
}