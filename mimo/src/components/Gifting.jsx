import './Gifting.css'

function Gifting() {
  return (
    <section className="gifting reveal">
      <div className="gifting__label">
        <p className="eyebrow">para presentear</p>
      </div>

      <div className="gifting__main">
        <div className="gifting__words" aria-hidden="true">
          <span>um</span>
          <span>mimo</span>
          <span>seu.</span>
        </div>

        <div className="gifting__copy">
          <h2>Tem coisa que fica melhor quando vem numa caixa.</h2>
          <p>
            Montamos caixas com doces escolhidos por você para aniversários,
            agradecimentos, encontros e aquelas ocasiões que não precisam de
            explicação.
          </p>
          <a className="text-link" href="#encomendas">
            montar uma caixa <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gifting
