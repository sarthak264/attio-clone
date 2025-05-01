import { Icon } from '@/app/utils/types'

export default function Menu(props: Icon) {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`stroke-outline ${props.className}`}
    >
      <path
        d='M7 12.5H25.6667'
        // stroke='#1D1F20'
        strokeWidth='2.5'
        strokeLinecap='round'
      />
      <path
        d='M7 19.5H25.6667'
        // stroke='#1D1F20'
        strokeWidth='2.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
