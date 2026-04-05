import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import HeroCarousel from '@/components/HeroCarousel'
import Nosotros from '@/components/Nosotros'
import Divisiones from '@/components/Divisiones'
import Productos from '@/components/Productos'
import Industrias from '@/components/Industrias'
import Distribuidores from '@/components/Distribuidores'
import Blog from '@/components/Blog'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import RevealInit from '@/components/RevealInit'

export default function Home() {
  return (
    <>
      <RevealInit />
      <Topbar />
      <Navbar />
      <HeroCarousel />
      <Nosotros />
      <Divisiones />
      <Productos />
      <Industrias />
      <Distribuidores />
      <Blog />
      <Contacto />
      <Footer />
      <Modal />
    </>
  )
}
