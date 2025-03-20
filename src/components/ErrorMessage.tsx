
import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="glass-card w-full max-w-md mx-auto text-center py-8 px-6 animate-fade-in">
      <AlertCircle className="h-12 w-12 mx-auto text-destructive mb-4" />
      <h3 className="text-xl font-medium mb-2">Something went wrong</h3>
      <p className="text-foreground/70 mb-6">{message}</p>
      {onRetry && (
        <Button 
          onClick={onRetry}
          variant="outline" 
          className="glass-input hover:bg-foreground/5"
        >
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorMessage;
