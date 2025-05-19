import { ReactElement } from 'react'

interface NavigationProps {
  children: ReactElement[]
}

export default function Navigation(props: NavigationProps) {
  return (
    <nav className='container mx-auto flex flex-col gap-y-6 px-6 pt-4 pb-2 lg:max-w-none lg:flex-col-reverse lg:gap-y-4 lg:px-6 lg:py-4'>
      {props.children}
    </nav>
  )
}
