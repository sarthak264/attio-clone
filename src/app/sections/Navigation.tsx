import Navbar from '../components/Navbar'
import Tag from '../components/Tag'

export default function Navigation() {
  return (
    <nav className='container mx-auto flex flex-col gap-y-6 px-6 pt-4 pb-2 lg:max-w-none lg:flex-col-reverse lg:gap-y-4 lg:px-6 lg:py-4'>
      <Navbar />
      <Tag />
    </nav>
  )
}
