interface BadgeProps {
  number: number
}

export default function BadgeNumber({ number }: BadgeProps) {
  return (
    <div className='bg-base-600 flex size-4 items-center justify-center rounded-full text-xs text-white'>
      {number}
    </div>
  )
}
