import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 h-8',
    md: 'text-sm px-4 py-2 h-10',
    lg: 'text-base px-6 py-3 h-12'
  };

  const variantStyles = {
    primary: 'bg-[#1a365d] text-white hover:bg-[#152a48] focus:ring-[#1a365d]',
    secondary: 'bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 focus:ring-amber-500 shadow-sm',
    outline: 'border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50 focus:ring-slate-400',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-300'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
