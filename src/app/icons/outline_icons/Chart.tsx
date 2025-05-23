import { Icon } from '@/app/utils/types'

export default function Chart(props: Icon) {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`stroke-outline ${props.className}`}
    >
      <path
        d='M17.3851 3.07074H7.61367C5.36508 3.07074 3.54224 4.98952 3.54224 7.35646V17.6422C3.54224 20.0091 5.36508 21.9279 7.61367 21.9279H17.3851C19.6337 21.9279 21.4566 20.0091 21.4566 17.6422V7.35646C21.4566 4.98952 19.6337 3.07074 17.3851 3.07074Z'
        // stroke='#1D1E20'
        strokeWidth='1.49286'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.3656 10.3057V16.8511'
        // stroke='#1D1E20'
        strokeWidth='1.49286'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.5 8.14801V16.8753'
        // stroke='#1D1E20'
        strokeWidth='1.49286'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.6321 12.4994V16.863'
        // stroke='#1D1E20'
        strokeWidth='1.49286'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
