import { Icon } from '@/app/utils/types'

export default function Grid({ className = 'stroke-outline' }: Icon) {
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
        d='M12.5001 3.5H10.0455C7.75435 3.50001 6.60878 3.50001 5.73368 3.94589C4.96393 4.3381 4.3381 4.96394 3.94588 5.7337C3.5 6.6088 3.5 7.75437 3.5 10.0455V14.9546C3.5 17.2458 3.5 18.3912 3.94588 19.2663C4.3381 20.0361 4.96393 20.662 5.73369 21.0541C6.60878 21.5 7.75435 21.5 10.0455 21.5H12.5001M12.5001 3.5H14.9546C17.2456 3.5 18.3912 3.5 19.2664 3.94589C20.0361 4.3381 20.662 4.96394 21.0541 5.7337C21.5 6.6088 21.5 7.75437 21.5 10.0455V14.9546C21.5 17.2456 21.5 18.3912 21.0541 19.2663C20.662 20.0361 20.0361 20.662 19.2664 21.0541C18.3912 21.5 17.2458 21.5 14.9546 21.5H12.5001M12.5001 3.5V21.5'
        // stroke='#1D1E20'
        strokeWidth='1.49286'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.5001 14.8579H3.54297'
        // stroke='#1D1E20'
        strokeWidth='1.49286'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.4578 10.1433H12.5007'
        // stroke='#1D1E20'
        strokeWidth='1.49286'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
