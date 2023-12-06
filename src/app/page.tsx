import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import dynamic from 'next/dynamic'
// const About = dynamic(() => import ('@/components/About'), {ssr: false})
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Projects />
    </div>
  )
}