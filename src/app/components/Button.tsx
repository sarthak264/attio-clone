import clsx from 'clsx'
import { ClassValue } from 'clsx'
import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn('rounded-xl px-3 py-4', className)}>
      {children}
    </button>
  )
}
