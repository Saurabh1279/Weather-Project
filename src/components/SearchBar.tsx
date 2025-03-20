
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (location: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative w-full max-w-md mx-auto animate-fade-in"
    >
      <div className="relative group">
        <Input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="glass-input pl-4 pr-12 py-6 rounded-full text-lg w-full
                    focus:outline-none focus:ring-2 focus:ring-primary/50
                    placeholder:text-foreground/50"
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          size="icon"
          disabled={isLoading || !location.trim()}
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10 w-10
                    bg-primary hover:bg-primary/90 transition-colors duration-200
                    flex items-center justify-center"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
