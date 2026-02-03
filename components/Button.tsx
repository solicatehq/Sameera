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
    // Changed from deep_rose-900 to rose_white-900 (Deep Wine)
    primary: "bg-rose_white-900 text-white hover:bg-deep_rose-900 border border-rose_white-900 hover:border-deep_rose-900",
    outline: "border border-antique_gold-700 text-deep_rose-900 hover:bg-antique_gold-50 hover:border-antique_gold-900",
    ghost: "text-rose_white-900 hover:text-deep_rose-900 underline underline-offset-8 decoration-[1px] decoration-rose_white-300 hover:decoration-rose_white-900",
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