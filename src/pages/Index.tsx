
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Cloud } from 'lucide-react';
import { toast } from 'sonner';

import SearchBar from '@/components/SearchBar';
import WeatherCard from '@/components/WeatherCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import { getWeatherForLocation } from '@/services/weatherService';

const Index = () => {
  const [location, setLocation] = useState<string>('');
  
  const { 
    data, 
    isLoading, 
    error, 
    refetch, 
    isSuccess,
    isError
  } = useQuery({
    queryKey: ['weather', location],
    queryFn: () => getWeatherForLocation(location),
    enabled: !!location,
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const handleSearch = (searchLocation: string) => {
    setLocation(searchLocation);
  };

  const handleRetry = () => {
    if (location) {
      refetch();
    }
  };

  // Show error toast when error occurs
  React.useEffect(() => {
    if (isError && error instanceof Error) {
      toast.error(error.message);
    }
  }, [isError, error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 py-12 sm:py-20 bg-gradient-to-b from-background to-background/80">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-10 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Cloud className="h-8 w-8 mr-2 text-primary animate-pulse-slow" />
            <h1 className="text-3xl font-light">Weather App</h1>
          </div>
          <p className="text-foreground/70 max-w-md mx-auto">
            Enter a location to get the current weather conditions
          </p>
        </header>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        
        <div className="mt-10">
          {isLoading && <LoadingSpinner />}
          
          {isError && !isLoading && (
            <ErrorMessage 
              message={error instanceof Error ? error.message : 'An unknown error occurred'} 
              onRetry={handleRetry}
            />
          )}
          
          {isSuccess && data && !isLoading && (
            <WeatherCard data={data} />
          )}
          
          {!location && (
            <div className="glass-card w-full max-w-md mx-auto p-8 text-center animate-fade-in">
              <Cloud className="h-16 w-16 mx-auto text-primary/30 mb-4" />
              <h3 className="text-xl font-light mb-2">No location searched yet</h3>
              <p className="text-foreground/70">
                Search for a city, postal code or coordinates to see the current weather
              </p>
            </div>
          )}
        </div>
      </div>
      
      <footer className="mt-auto pt-10 pb-4 text-center text-sm text-foreground/50 w-full">
        <p>Weather data provided by WeatherAPI.com</p>
      </footer>
    </main>
  );
};

export default Index;
