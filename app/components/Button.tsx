'use client';

import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

export default function Button({
  children,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl transition transform hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}