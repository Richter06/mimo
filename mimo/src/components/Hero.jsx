import { motion } from 'motion/react'
import './Hero.css'

const heroImage =
  'https://images.unsplash.com/photo-1641848373054-e6f564023237?auto=format&fit=crop&w=1800&q=85'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__image-wrap">
        <img
          className="hero__image"
          src={heroImage}
          alt="Bolo delicado coberto com morangos"
        />
      </div>

      <div className="hero__veil" />

      <div className="hero__content">
        <p className="eyebrow hero__eyebrow">doceria artesanal</p>

        <h1 className="hero__title">
          <span className="hero__title-line-wrap">
            <span className="hero__title-line">Um pequeno</span>
          </span>
          <span className="hero__title-line-wrap hero__title-line-wrap--offset">
            <span className="hero__title-line">grande prazer.</span>
          </span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__intro">
            Doces feitos em pequenos lotes, para comer devagar ou não dividir
            com ninguém.
          </p>

          <motion.a
            className="circle-link hero__circle-link"
            href="#doces"
            aria-label="Conheça os doces"
            whileHover={{ rotate: -6, scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <span>conhecer</span>
            <strong aria-hidden="true">↓</strong>
          </motion.a>
        </div>
      </div>

      <span className="hero__scribble" aria-hidden="true">m</span>
    </section>
  )
}

export default Hero
