import LogoDark from '@/app/icons/LogoDark'
import { Menu } from '@/app/icons/outline_icons'
import { navItems } from '@/app/utils/content'
import BadgeNumber from '@/app/components/BadgeNumber'
import Button from '@/app/components/Button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center lg:justify-start'>
      <LogoDark className='w-[90px] lg:w-[100px] shrink-0' />
      <div className='hidden ml-16 lg:flex '>
        {navItems.map(({ title, link, badgeNumber }, i) => {
          return (
            <div className='py-2 px-4' key={i}>
              <Link
                href={link}
                className='flex justify-center items-center gap-1'
              >
                {title}
                {badgeNumber && <BadgeNumber number={badgeNumber} />}
              </Link>
            </div>
          )
        })}
      </div>
      <div className='hidden lg:flex gap-x-3 lg:ml-auto'>
        <Button className='py-1.75 border-[1px] border-base-200'>
          Sign In
        </Button>
        <Button className='py-1.75 bg-base-600 border-base-400 border-[1px] text-base-100'>
          Start for free
        </Button>
      </div>
      <Menu className='w-8 lg:hidden' />
    </div>
  )
}
