import Link from 'next/link'
import { Cancel } from '../../../public/outline_icons'

interface Tag {
  headline: string
  link: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Tag(props: Tag) {
  function toggleTag() {
    props.setIsOpen(false)
  }

  return (
    <div
      className={`my-2 mx-6 py-2 px-2.5 bg-base-600 rounded-xl text-center flex justify-between items-center gap-x-2.5 ${
        props.isOpen ? '' : 'invisible'
      }`}
    >
      <p className='text-sm text-white max-w-[225px] mx-auto'>
        {props.headline}
        <Link href={props.link} className='underline ml-1'>
          Read more
        </Link>
      </p>
      <button onClick={toggleTag}>
        <Cancel className='stroke-white size-5' />
      </button>
    </div>
  )
}
