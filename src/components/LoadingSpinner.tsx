
import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
  return (
    <div className="flex justify-center items-center py-8">
      <div 
        className={cn(
          "h-10 w-10 rounded-full border-4 border-primary/30 border-t-primary animate-spin",
          className
        )} 
      />
    </div>
  );
};

export default LoadingSpinner;
