import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Menu from './components/Menu'
import Highlight from './components/Highlight'
import Gifting from './components/Gifting'
import Orders from './components/Orders'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Menu />
        <Highlight />
        <Gifting />
        <Orders />
      </main>
      <Footer />
    </>
  )
}

export default App
