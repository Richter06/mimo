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

        <h1>
          Um pequeno
          <span>grande prazer.</span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__intro">
            Doces feitos em pequenos lotes, para comer devagar ou não dividir
            com ninguém.
          </p>

          <a className="circle-link" href="#doces" aria-label="Conheça os doces">
            <span>conhecer</span>
            <strong aria-hidden="true">↓</strong>
          </a>
        </div>
      </div>

      <span className="hero__scribble" aria-hidden="true">m</span>
    </section>
  )
}

export default Hero
