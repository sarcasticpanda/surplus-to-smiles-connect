
import React from 'react';
import { QuoteIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageSrc?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  role,
  imageSrc,
  className 
}) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-6 shadow-md relative",
      className
    )}>
      <QuoteIcon className="h-8 w-8 text-bridge-dark/20 absolute top-4 right-4" />
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {imageSrc && (
          <div className="flex-shrink-0">
            <img 
              src={imageSrc} 
              alt={`${name}'s testimonial`}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="text-gray-700 mb-4">{quote}</p>
          <div className="mt-auto">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
