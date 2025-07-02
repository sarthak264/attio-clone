import LogoDark from '@/app/icons/LogoDark'
import { Menu } from '@/app/icons/outline_icons'
import { navItems } from '@/app/utils/content'
import BadgeNumber from '@/app/components/BadgeNumber'
import Button from '@/app/components/Button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between lg:justify-start'>
      <LogoDark className='w-[90px] shrink-0 lg:w-[100px]' />
      <div className='ml-16 hidden lg:flex'>
        {navItems.map(({ title, link, badgeNumber }, i) => {
          return (
            <div className='px-4 py-2' key={i}>
              <Link
                href={link}
                className='flex items-center justify-center gap-1'
              >
                {title}
                {badgeNumber && <BadgeNumber number={badgeNumber} />}
              </Link>
            </div>
          )
        })}
      </div>
      <div className='hidden gap-x-3 lg:ml-auto lg:flex'>
        <Button theme='light' size='sm'>
          Sign In
        </Button>
        <Button theme='dark' size='sm'>
          Start for free
        </Button>
      </div>
      <Menu className='w-8 lg:hidden' />
    </div>
  )
}
