import { ReactElement } from 'react'

interface NavigationProps {
  children: ReactElement[]
}

export default function Navigation(props: NavigationProps) {
  return (
    <nav className='container lg:max-w-none mx-auto px-6 pt-4 pb-2 flex flex-col gap-y-6 lg:flex-col-reverse lg:gap-y-4 lg:px-6 lg:py-4'>
      {props.children}
    </nav>
  )
}
