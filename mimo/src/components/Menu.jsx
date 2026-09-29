import './Menu.css'

const products = [
  {
    name: 'Morango & baunilha',
    type: 'bolo delicado',
    image:
      'https://images.unsplash.com/photo-1641848373054-e6f564023237?auto=format&fit=crop&w=1100&q=82',
  },
  {
    name: 'Chocolate intenso',
    type: 'fatia cremosa',
    image:
      'https://images.unsplash.com/photo-1651378527289-36b9e2b8be58?auto=format&fit=crop&w=1100&q=82',
  },
  {
    name: 'Frutas vermelhas',
    type: 'sobremesa da casa',
    image:
      'https://images.unsplash.com/photo-1589375025852-a66cdd127efb?auto=format&fit=crop&w=1100&q=82',
  },
]

function Menu() {
  return (
    <section className="menu reveal" id="doces">
      <div className="menu__intro">
        <p className="eyebrow">a vitrine</p>
        <h2>
          Escolha pelo
          <span>desejo.</span>
        </h2>
        <p>
          Alguns clássicos, algumas surpresas e sempre alguma coisa que você
          ainda não sabia que queria.
        </p>
      </div>

      <div className="menu__grid">
        {products.map((product) => (
          <article className="product" key={product.name}>
            <a className="product__image-wrap" href="#encomendas">
              <img
                className="product__image"
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              <span className="product__arrow" aria-hidden="true">↗</span>
            </a>
            <div className="product__meta">
              <p>{product.type}</p>
              <h3>{product.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Menu
