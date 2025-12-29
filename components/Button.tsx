import React from 'react';
import { APP_URL } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  onClick,
  href 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-500 to-accent-600 text-white hover:shadow-lg hover:shadow-brand-500/30 focus:ring-brand-500",
    secondary: "bg-white text-brand-600 border border-gray-200 hover:bg-gray-50 focus:ring-gray-200 shadow-sm",
    outline: "border-2 border-slate-300 text-slate-600 hover:border-brand-600 hover:text-brand-600 focus:ring-brand-500"
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    // @ts-ignore
    <Component 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {variant === 'primary' && <ArrowRight className="ml-2 h-5 w-5" />}
    </Component>
  );
};

export const AppLinkButton: React.FC<{className?: string, text?: string}> = ({ className = "", text = "Entrar a NIVELAPP" }) => (
  <Button href={APP_URL} variant="primary" className={className}>
    {text}
  </Button>
);