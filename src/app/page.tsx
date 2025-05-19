import Navbar from './components/Navbar'
import Navigation from './components/Navigation'
import Tag from './components/Tag'
import Hero from './components/Hero'
import Proven from './components/Proven'

export default function Home() {
  return (
    <>
      <Navigation>
        <Navbar />
        <Tag />
      </Navigation>
      <Hero />
      <Proven />
    </>
  )
}
