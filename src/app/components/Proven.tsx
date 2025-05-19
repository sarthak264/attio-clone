import {
  Beacons,
  Bravado,
  Causal,
  CocaCola,
  DOPT,
  Hyperline,
  OnDeck,
  OpenAI,
  Pallet,
  PassionFroot,
  Plain,
} from '@/app/icons/brand_icons'

export default function Proven() {
  return (
    <section className='flex flex-col items-center gap-y-5 px-6 py-7.5 lg:justify-stretch lg:gap-y-8 lg:px-23.5 lg:py-16'>
      <div className='flex w-full flex-wrap items-center justify-center gap-5 md:flex-nowrap md:justify-between md:gap-x-7.5 lg:flex-1'>
        <CocaCola className='h-7 md:h-9 lg:h-10' />
        <OpenAI className='h-7 md:h-9 lg:h-10' />
        <Pallet className='h-7 md:h-9 lg:h-10' />
        <Causal className='h-6.5 md:h-9 lg:h-10' />
        <Plain className='h-6.5 md:h-9 lg:h-10' />
        <PassionFroot className='h-6.5 md:h-9 lg:h-10' />
      </div>
      <div className='flex w-full flex-wrap items-center justify-center gap-5 md:flex-nowrap md:justify-between md:gap-x-7.5 lg:flex-1'>
        <DOPT className='h-6.5 md:h-9 lg:h-10' />
        <Hyperline className='h-6.5 md:h-9 lg:h-10' />
        <OnDeck className='h-6.5 md:h-9 lg:h-10' />
        <Bravado className='hidden md:inline-flex md:h-9 lg:h-10' />
        <Beacons className='hidden md:inline-flex md:h-9 lg:h-10' />
      </div>
    </section>
  )
}
