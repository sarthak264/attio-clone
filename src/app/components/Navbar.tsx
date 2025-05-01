import LogoDark from '../../../public/LogoDark'
import { Dribble, Menu } from '../../../public/outline_icons'

export default function Navbar() {
  return (
    <div className='my-4 mx-6 flex justify-between items-center'>
      <LogoDark className='w-[90px]' />
      <Menu className='w-8' />
    </div>
  )
}
