import './Orders.css'

function Orders() {
  return (
    <section className="orders reveal" id="encomendas">
      <div className="orders__top">
        <p className="eyebrow">encomendas</p>
        <span>para dias especiais ou só para hoje</span>
      </div>

      <div className="orders__body">
        <h2>
          Tem festa?
          <span>Tem doce.</span>
        </h2>

        <div className="orders__action">
          <p>
            Bolos, caixas, mesas doces e encomendas personalizadas. Conta pra
            gente o que você imaginou.
          </p>
          <a href="#encomendas">
            falar com a mimo <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Orders
