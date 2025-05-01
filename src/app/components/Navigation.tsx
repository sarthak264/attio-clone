import { ReactElement } from 'react'

interface NavigationProps {
  children: ReactElement[]
}

export default function Navigation(props: NavigationProps) {
  return <div>{props.children}</div>
}
