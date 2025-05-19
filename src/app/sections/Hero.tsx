import Image from 'next/image'
import Button from '@/app/components/Button'
import Flag from '@/app/components/Flag'
import HeroImg from '@/app/images/hero-dashboard.png'
import HeroBg from '@/app/images/hero-dashboard-bg.png'
import { PlayIcon } from '@/app/icons/filled_icons'

export default function Hero() {
  return (
    <header>
      <div className='mt-10.5 mb-9 lg:my-0 lg:py-20'>
        <div className='mx-auto mb-8 w-[345px]'>
          <Flag newTag={true} />
        </div>
        <div className='mb-8 px-6 text-center'>
          <h1 className='text-base-600 mx-auto mb-4 max-w-[826px] lg:mb-8'>
            Customer relationship magic.
          </h1>
          <p className='text-base-50 mx-auto max-w-[548px] text-xl'>
            Powerful, flexible and data-driven, Attio makes it easy to build the
            exact CRM your business needs.
          </p>
        </div>
        <div className='flex items-center justify-center gap-x-3'>
          <Button className='bg-base-600 border-base-400 text-base-100 border-[1px]'>
            Start for free
          </Button>
          <Button className='border-base-200 border-[1px]'>
            Talk to sales
          </Button>
        </div>
      </div>
      <div className='relative w-full px-6 py-[37px] lg:mx-[94px] lg:w-auto lg:py-[63.5px]'>
        <Image src={HeroBg} fill className='absolute inset-0 z-0' alt='' />
        <Image
          src={HeroImg}
          className='relative z-10 mx-auto'
          alt='grid background'
        />
        <div className='bg-base-500 absolute top-1/2 left-1/2 z-10 flex size-7.5 -translate-1/2 cursor-pointer items-center justify-center rounded-full lg:size-15'>
          <PlayIcon className='size-2.5 fill-white lg:size-6' />
        </div>
      </div>
    </header>
  )
}
