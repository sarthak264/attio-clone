import Navbar from './components/Navbar'
import Navigation from './components/Navigation'
import Tag from './components/Tag'
import Hero from './components/Hero'

export default function Home() {
  return (
    <>
      <Navigation>
        <Navbar />
        <Tag />
      </Navigation>
      <Hero />
    </>
  )
}
