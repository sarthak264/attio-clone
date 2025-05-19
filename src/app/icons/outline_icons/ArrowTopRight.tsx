import { Icon } from '@/app/utils/types'

export default function ArrowTopRight(props: Icon) {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      xmlns='http://www.w3.org/2000/svg'
      className={`stroke-black ${props.className}`}
    >
      <path
        d='M6.50005 19.5L19.5 6.49996M19.5 6.49996V18.98M19.5 6.49996H7.02005'
        // stroke='black'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
