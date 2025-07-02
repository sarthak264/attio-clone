import { cva } from 'class-variance-authority'
import { cn } from '../utils/cn'

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  theme: 'light' | 'dark'
  size?: 'sm' | 'md'
}

export default function Button({
  children,
  className,
  theme,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(ButtonVariants({ theme, size }), className)}
    >
      {children}
    </button>
  )
}

const ButtonVariants = cva('rounded-xl border-[1px]', {
  variants: {
    theme: {
      light: 'border-base-200',
      dark: 'bg-base-600 border-base-400 text-base-100',
    },
    size: {
      sm: 'py-2 px-4',
      md: 'py-3 px-4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
