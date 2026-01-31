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
    // Changed from crushed_berry-900 to pink_mist-900 (Deep Wine)
    primary: "bg-pink_mist-900 text-white hover:bg-crushed_berry-900 border border-pink_mist-900 hover:border-crushed_berry-900",
    outline: "border border-light_cyan-700 text-crushed_berry-900 hover:bg-light_cyan-50 hover:border-light_cyan-900",
    ghost: "text-pink_mist-900 hover:text-crushed_berry-900 underline underline-offset-8 decoration-[1px] decoration-pink_mist-300 hover:decoration-pink_mist-900",
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