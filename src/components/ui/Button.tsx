'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none';

    const variants = {
      primary:
        'bg-brand-600 text-white hover:bg-brand-700 hover:shadow-brand-md hover:-translate-y-0.5 active:translate-y-0',
      secondary:
        'bg-brand-50 text-brand-700 hover:bg-brand-100 hover:-translate-y-0.5 active:translate-y-0',
      outline:
        'border-2 border-brand-600 text-brand-600 bg-transparent hover:bg-brand-50 hover:-translate-y-0.5 active:translate-y-0',
      ghost:
        'text-gray-600 bg-transparent hover:bg-gray-100 hover:text-gray-900',
      white:
        'bg-white text-gray-900 hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
    };

    const sizes = {
      sm: 'text-sm px-4 py-2 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-7 py-3.5 gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
