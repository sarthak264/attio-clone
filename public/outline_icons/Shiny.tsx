import { Icon } from '@/app/utils/types'

export default function Shiny(props: Icon) {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`stroke-outline ${props.className}`}
    >
      <g clipPath='url(#clip0_372_32161)'>
        <path
          d='M8.85817 22.1772C8.85817 18.4952 10.9597 15.1772 14.8582 15.1772C10.9597 15.1772 8.85817 11.8591 8.85817 8.17719C8.85817 11.8591 6.75665 15.1772 2.85815 15.1772C6.75665 15.1772 8.85817 18.4952 8.85817 22.1772Z'
          // stroke='#1D1E20'
          strokeWidth='1.49286'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M18.4987 12.857C18.4987 10.308 20.9496 7.857 23.4987 7.857C20.9496 7.857 18.4987 5.40601 18.4987 2.85699C18.4987 5.40601 16.0475 7.857 13.4987 7.857C16.0475 7.857 18.4987 10.308 18.4987 12.857Z'
          // stroke='#1D1E20'
          strokeWidth='1.49286'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_372_32161'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='translate(0.5 0.5)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
