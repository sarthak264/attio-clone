import { Icon } from "@/app/utils/types";

export default function ArrowDown({className = 'stroke-black'}: Icon) {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill="none"
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M6.5 9.5L12.5 15.5L18.5 9.5'
        // stroke='black'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
