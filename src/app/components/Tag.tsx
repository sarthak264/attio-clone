'use client'

import Link from 'next/link'
import { Cancel } from '@/app/icons/outline_icons'
import { useState } from 'react'
import { tag } from '@/app/utils/content'

export default function Tag() {
  const [isOpen, setIsOpen] = useState(true)
  function toggleTag() {
    setIsOpen(false)
  }

  return (
    <div
      className={`bg-base-600 flex items-center justify-between gap-x-2.5 rounded-xl px-2.5 py-2 text-center lg:p-3 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <p className='mx-auto max-w-[225px] text-sm text-white sm:max-w-full'>
        {tag.headline}
        <Link href={tag.link} className='ml-1 underline'>
          Read more
        </Link>
      </p>
      <button onClick={toggleTag} className='cursor-pointer'>
        <Cancel className='size-5 stroke-white' />
      </button>
    </div>
  )
}
