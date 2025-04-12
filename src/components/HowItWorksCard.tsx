
import React from 'react';
import { cn } from '@/lib/utils';

interface HowItWorksCardProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ 
  step, 
  title, 
  description, 
  icon,
  className 
}) => {
  return (
    <div className={cn(
      "relative p-6 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg",
      className
    )}>
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-bridge-dark text-white flex items-center justify-center font-bold text-sm">
        {step}
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-gray-100 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
