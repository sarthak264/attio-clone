import Link from 'next/link'
import { ArrowRight } from '@/app/icons/outline_icons'
import { flag } from '@/app/utils/content'

interface FlagProps {
  newTag?: boolean
}

export default function Flag(props: FlagProps) {
  return (
    <Link href={flag.link}>
      <div className='flex items-center justify-center gap-x-1 rounded-full bg-gray-100 py-0.5 pr-2 pl-0.5 text-base whitespace-nowrap'>
        {props.newTag && (
          <span className='bg-base-600 rounded-full px-2 py-0.5 text-base text-white'>
            New
          </span>
        )}
        <p className='text-base-500'>{flag.headline}</p>
        <ArrowRight className='size-3' />
      </div>
    </Link>
  )
}
