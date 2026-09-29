import './Highlight.css'

const image =
  'https://images.unsplash.com/photo-1589375025852-a66cdd127efb?auto=format&fit=crop&w=1800&q=85'

function Highlight() {
  return (
    <section className="highlight reveal">
      <div className="highlight__image-wrap">
        <img
          src={image}
          alt="Sobremesa de chocolate com frutas vermelhas"
          loading="lazy"
        />
      </div>

      <div className="highlight__content">
        <p className="eyebrow">o mimo da vez</p>
        <h2>
          Chocolate,
          <span>frutas vermelhas</span>
          <em>e nenhuma culpa.</em>
        </h2>
        <p>
          Uma camada cremosa, chocolate intenso e o toque ácido das frutas para
          equilibrar tudo.
        </p>
        <a className="text-link" href="#encomendas">
          quero provar <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

export default Highlight
