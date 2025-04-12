
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CallToActionButtonProps {
  to: string;
  children: React.ReactNode;
  variant: 'donate' | 'request';
  icon?: React.ReactNode;
  className?: string;
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({ 
  to, 
  children, 
  variant,
  icon,
  className 
}) => {
  return (
    <Link to={to}>
      <Button
        className={cn(
          "px-6 py-6 h-auto text-lg font-medium rounded-lg shadow-lg transition-all duration-200 hover:scale-105",
          variant === 'donate' && "bg-donate hover:bg-donate/90 text-white",
          variant === 'request' && "bg-request hover:bg-request/90 text-white",
          className
        )}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Button>
    </Link>
  );
};

export default CallToActionButton;
