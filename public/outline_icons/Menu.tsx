import { Icon } from '@/app/utils/types'

export default function Menu({ className = 'stroke-outline' }: Icon) {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M5.75 9.875H19.75'
        // stroke='#1D1E20'
        strokeWidth='2.5'
        strokeLinecap='round'
      />
      <path
        d='M5.75 15.125H19.75'
        // stroke='#1D1E20'
        strokeWidth='2.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
