import Image from 'next/image'
import Button from '@/app/components/Button'
import Flag from '@/app/components/Flag'
import HeroImg from '@/app/images/hero-dashboard.png'
import HeroBg from '@/app/images/hero-dashboard-bg.png'
import { PlayIcon } from '@/app/icons/filled_icons'

export default function Hero() {
  return (
    <header>
      <div className='mt-10.5 mb-9 lg:py-20 lg:my-0'>
        <div className='w-[345px] mb-8 mx-auto'>
          <Flag newTag={true} />
        </div>
        <div className='text-center px-6 mb-8'>
          <h1 className='mb-4 lg:mb-8 text-base-600 max-w-[826px] mx-auto'>
            Customer relationship magic.
          </h1>
          <p className='text-xl text-base-50 max-w-[548px] mx-auto'>
            Powerful, flexible and data-driven, Attio makes it easy to build the
            exact CRM your business needs.
          </p>
        </div>
        <div className='flex justify-center items-center gap-x-3'>
          <Button className='bg-base-600 border-base-400 border-[1px] text-base-100'>
            Start for free
          </Button>
          <Button className='border-[1px] border-base-200'>
            Talk to sales
          </Button>
        </div>
      </div>
      <div className='w-full relative px-6 py-[37px] lg:py-[63.5px] lg:w-auto lg:mx-[94px]'>
        <Image src={HeroBg} fill className='absolute inset-0 z-0' alt='' />
        <Image
          src={HeroImg}
          className='relative z-10 mx-auto'
          alt='grid background'
        />
        <div className='size-7.5 lg:size-15 bg-base-500 absolute top-1/2 left-1/2 -translate-1/2 z-10 flex justify-center items-center rounded-full cursor-pointer'>
          <PlayIcon className='fill-white size-2.5 lg:size-6' />
        </div>
      </div>
    </header>
  )
}
