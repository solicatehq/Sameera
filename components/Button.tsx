import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 transition-all duration-500 ease-out text-xs tracking-[0.2em] uppercase font-sans";
  
  const variants = {
    // Changed from stone-900 to beige-900 (Deep Wine)
    primary: "bg-beige-900 text-white hover:bg-stone-900 border border-beige-900 hover:border-stone-900",
    outline: "border border-beige-900 text-beige-900 hover:bg-beige-900 hover:text-white bg-transparent",
    ghost: "text-beige-900 hover:text-stone-900 underline underline-offset-8 decoration-[1px] decoration-beige-300 hover:decoration-beige-900",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-3 h-3" />}
    </button>
  );
};