
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  suffix, 
  icon, 
  delay = 0,
  className 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [delay]);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = Math.min(value, 9999);
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, isVisible]);
  
  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-6 shadow-md transition-all duration-500 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
        <div className="text-primary p-2 bg-primary/10 rounded-full">
          {icon}
        </div>
      </div>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold">{count}</span>
        <span className="ml-1 text-gray-600">{suffix}</span>
      </div>
    </div>
  );
};

export default StatCard;
