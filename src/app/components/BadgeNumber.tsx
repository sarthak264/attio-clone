interface BadgeProps {
  number: number
}

export default function BadgeNumber({ number }: BadgeProps) {
  return (
    <div className='size-4 bg-base-600 flex justify-center items-center text-xs text-white rounded-full'>
      {number}
    </div>
  )
}
