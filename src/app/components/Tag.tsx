'use client'

import Link from 'next/link'
import { Cancel } from '../../../public/outline_icons'
import { useState } from 'react'
import { tag } from '../utils/content'

export default function Tag() {
  const [isOpen, setIsOpen] = useState(true)
  function toggleTag() {
    setIsOpen(false)
  }

  return (
    <div
      className={`py-2 px-2.5 lg:p-3 bg-base-600 rounded-xl text-center flex justify-between items-center gap-x-2.5 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <p className='text-sm text-white max-w-[225px] sm:max-w-full mx-auto'>
        {tag.headline}
        <Link href={tag.link} className='underline ml-1'>
          Read more
        </Link>
      </p>
      <button onClick={toggleTag} className='cursor-pointer'>
        <Cancel className='stroke-white size-5' />
      </button>
    </div>
  )
}
