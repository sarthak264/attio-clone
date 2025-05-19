import Link from 'next/link'
import { ArrowRight } from '../../../public/outline_icons'
import { flag } from '../utils/content'

interface FlagProps {
  newTag?: boolean
}

export default function Flag(props: FlagProps) {
  return (
    <Link href={flag.link}>
      <div className='py-0.5 pl-0.5 pr-2 flex justify-center items-center gap-x-1 bg-gray-100 text-base rounded-full whitespace-nowrap'>
        {props.newTag && (
          <span className='bg-base-600 text-base text-white rounded-full px-2 py-0.5'>
            New
          </span>
        )}
        <p className='text-base-500'>{flag.headline}</p>
        <ArrowRight className='size-3' />
      </div>
    </Link>
  )
}
