'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import Navigation from './components/Navigation'
import Tag from './components/Tag'
import { tag } from './utils/content'

export default function Home() {
  const [isTagOpen, setIsTagOpen] = useState(true)
  return (
    <>
      <Navigation>
        <Navbar />
        <Tag
          headline={tag.headline}
          link={tag.link}
          isOpen={isTagOpen}
          setIsOpen={setIsTagOpen}
        />
      </Navigation>
    </>
  )
}
