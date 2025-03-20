
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CloudOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-background to-background/80">
      <div className="glass-card w-full max-w-md mx-auto text-center p-10 animate-fade-in">
        <CloudOff className="h-20 w-20 mx-auto text-primary/70 mb-6" />
        <h1 className="text-4xl font-light mb-4">404</h1>
        <p className="text-xl text-foreground/70 mb-8">
          Oops! The page you're looking for is not found
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-primary hover:bg-primary/90 transition-colors duration-200"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
