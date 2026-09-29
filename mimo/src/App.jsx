import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Menu from './components/Menu'
import Highlight from './components/Highlight'
import Gifting from './components/Gifting'
import Orders from './components/Orders'
import Footer from './components/Footer'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (reduceMotion) {
        return
      }

      const intro = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      intro
        .from('.hero__image', { scale: 1.08, duration: 1.8, ease: 'power2.out' })
        .from('.hero__veil', { opacity: 0, duration: 1.2 }, '<0.15')
        .from('.hero__eyebrow', { y: 24, opacity: 0, duration: 0.8 }, '<0.1')
        .from('.hero__title-line', { yPercent: 105, duration: 1, stagger: 0.1 }, '<0.05')
        .from('.hero__intro', { y: 20, opacity: 0, duration: 0.7 }, '<0.2')
        .from('.hero__circle-link', { scale: 0.7, opacity: 0, duration: 0.8, ease: 'back.out(1.6)' }, '<0.05')
        .from('.hero__scribble', { opacity: 0, rotation: -28, scale: 0.8, duration: 1 }, '<0.1')

      gsap.to('.hero__image', {
        scale: 1.13,
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.hero__content', {
        yPercent: -10,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.hero__scribble', {
        xPercent: -20,
        rotation: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.highlight__image-wrap img', {
        scale: 1.12,
        yPercent: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: '.highlight',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.gifting__words', {
        xPercent: 14,
        ease: 'none',
        scrollTrigger: {
          trigger: '.gifting',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.from('.orders__headline-line', {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.orders',
          start: 'top 72%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.site-footer__brand', {
        yPercent: 18,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.site-footer',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    }, pageRef)

    return () => context.revert()
  }, [])

  return (
    <div className="mimo-page" ref={pageRef}>
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
    </div>
  )
}

export default App
