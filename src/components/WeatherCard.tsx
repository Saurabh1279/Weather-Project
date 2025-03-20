
import React from 'react';
import { 
  Cloud,  
  CloudFog, 
  CloudLightning, 
  CloudRain, 
  CloudSnow, 
  Sun, 
  Moon,
  Wind,
  Droplets,
  ThermometerSun
} from 'lucide-react';
import { WeatherData } from '../types/weather';
import { cn } from '../lib/utils';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherIcon: React.FC<{ condition: string; isDay: number }> = ({ condition, isDay }) => {
  const iconClass = "h-20 w-20 transition-all duration-500 animate-float text-primary";
  
  // Map condition code to icon
  const lowerCondition = condition.toLowerCase();
  
  if (lowerCondition.includes('sunny') || lowerCondition.includes('clear')) {
    return isDay ? <Sun className={iconClass} /> : <Moon className={iconClass} />;
  } else if (lowerCondition.includes('rain') || lowerCondition.includes('drizzle')) {
    return <CloudRain className={iconClass} />;
  } else if (lowerCondition.includes('snow') || lowerCondition.includes('sleet') || lowerCondition.includes('ice')) {
    return <CloudSnow className={iconClass} />;
  } else if (lowerCondition.includes('fog') || lowerCondition.includes('mist')) {
    return <CloudFog className={iconClass} />;
  } else if (lowerCondition.includes('thunder') || lowerCondition.includes('lightning')) {
    return <CloudLightning className={iconClass} />;
  } else if (lowerCondition.includes('overcast') || lowerCondition.includes('cloudy')) {
    return <Cloud className={iconClass} />;
  } else {
    return isDay ? <Sun className={iconClass} /> : <Moon className={iconClass} />;
  }
};

const AirQualityLabel: React.FC<{ aqi: number }> = ({ aqi }) => {
  // AQI ranges and labels based on standard definitions
  let label = '';
  let colorClass = '';
  
  if (aqi <= 50) {
    label = 'Good';
    colorClass = 'bg-green-100 text-green-800';
  } else if (aqi <= 100) {
    label = 'Moderate';
    colorClass = 'bg-yellow-100 text-yellow-800';
  } else if (aqi <= 150) {
    label = 'Unhealthy for Sensitive Groups';
    colorClass = 'bg-orange-100 text-orange-800';
  } else if (aqi <= 200) {
    label = 'Unhealthy';
    colorClass = 'bg-red-100 text-red-800';
  } else if (aqi <= 300) {
    label = 'Very Unhealthy';
    colorClass = 'bg-purple-100 text-purple-800';
  } else {
    label = 'Hazardous';
    colorClass = 'bg-rose-100 text-rose-800';
  }
  
  return (
    <span className={cn('px-2 py-1 rounded-full text-xs font-medium', colorClass)}>
      {label}
    </span>
  );
};

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const { location, current } = data;
  
  return (
    <div className="glass-card w-full max-w-md mx-auto overflow-hidden animate-fade-up">
      <div className="text-center mb-4">
        <h2 className="text-sm uppercase tracking-wider text-foreground/70 animate-fade-in">
          Current Weather
        </h2>
        <h1 className="text-2xl sm:text-3xl font-light mt-1 animate-fade-in delay-100">
          {location.name}
        </h1>
        <p className="text-sm text-foreground/70 mt-1 animate-fade-in delay-200">
          {location.region}, {location.country}
        </p>
      </div>
      
      <div className="flex flex-col items-center justify-center my-6">
        <WeatherIcon condition={current.condition.text} isDay={current.is_day} />
        
        <div className="mt-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-extralight animate-fade-in delay-300">
            {current.temp_c}°C
          </h2>
          <p className="text-foreground/70 mt-1 animate-fade-in delay-300">
            {current.condition.text}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="flex items-center p-3 rounded-xl bg-foreground/5">
          <ThermometerSun className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-xs text-foreground/70">Feels Like</p>
            <p className="font-medium">{current.feelslike_c}°C</p>
          </div>
        </div>
        
        <div className="flex items-center p-3 rounded-xl bg-foreground/5">
          <Droplets className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-xs text-foreground/70">Humidity</p>
            <p className="font-medium">{current.humidity}%</p>
          </div>
        </div>
        
        <div className="flex items-center p-3 rounded-xl bg-foreground/5">
          <Wind className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-xs text-foreground/70">Wind</p>
            <p className="font-medium">{current.wind_kph} km/h</p>
          </div>
        </div>
        
        {current.air_quality && (
          <div className="flex items-center p-3 rounded-xl bg-foreground/5">
            <Cloud className="h-5 w-5 mr-2 text-primary" />
            <div>
              <p className="text-xs text-foreground/70">Air Quality</p>
              <AirQualityLabel aqi={current.air_quality["us-epa-index"]} />
            </div>
          </div>
        )}
      </div>
      
      <div className="text-center mt-8 text-xs text-foreground/50">
        Last updated: {new Date(current.last_updated).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default WeatherCard;
