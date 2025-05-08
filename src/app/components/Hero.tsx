import Image from 'next/image'
import Button from './Button'
import Flag from './Flag'
import HeroImg from '@/app/images/hero-dashboard.svg'
import HeroBg from '@/app/images/hero-dashboard-bg.svg'
import { PlayIcon } from '../../../public/filled_icons'

export default function Hero() {
  return (
    <header className='mt-10.5'>
      <Flag newTag={true} />
      <div className='text-center px-6 mb-8'>
        <h1 className='mb-4 text-base-600'>Customer relationship magic.</h1>
        <p className='text-xl text-base-50'>
          Powerful, flexible and data-driven, Attio makes it easy to build the
          exact CRM your business needs.
        </p>
      </div>
      <div className='flex justify-center items-center gap-x-3 mb-9'>
        <Button className='bg-base-600 border-base-400 border-[1px] text-base-100'>
          Start for free
        </Button>
        <Button className='border-[1px] border-base-200'>Talk to sales</Button>
      </div>
      <div className='w-full relative px-6 py-[37px]'>
        <Image src={HeroBg} fill className='absolute inset-0 z-0' alt='' />
        <Image src={HeroImg} className='relative z-10' alt='grid background' />
        <div className='size-7 bg-base-500 absolute top-1/2 left-1/2 z-10 flex justify-center items-center rounded-full'>
          <PlayIcon className='fill-white size-2.5' />
        </div>
      </div>
    </header>
  )
}
