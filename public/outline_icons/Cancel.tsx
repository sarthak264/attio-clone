import { Icon } from "@/app/utils/types";

export default function Cancel({className = 'stroke-black'}: Icon) {
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
        d='M7.25741 17.7426L12.5001 12.5M17.7427 7.25736L12.5001 12.5M12.5001 12.5L7.25741 7.25736M12.5001 12.5L17.7427 17.7426'
        // stroke='black'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
