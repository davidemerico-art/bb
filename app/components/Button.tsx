'use client'
import { ReactNode } from 'react'

export default function Button({
  children,
  onClick,
  className = '',
}: {
  children: ReactNode
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl transition transform hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  )
}