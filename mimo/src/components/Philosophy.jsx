import './Philosophy.css'

function Philosophy() {
  return (
    <section className="philosophy reveal" id="mimo">
      <div className="philosophy__aside">
        <p className="eyebrow">sobre a mimo</p>
        <span className="philosophy__mark" aria-hidden="true">✳</span>
      </div>

      <div className="philosophy__copy">
        <p className="philosophy__lead">
          A gente acredita que um doce não precisa de motivo.
          <em> Mas pode melhorar qualquer momento.</em>
        </p>

        <div className="philosophy__details">
          <p>
            Chocolate de verdade, frutas frescas, cremes delicados e receitas
            que deixam a vontade de voltar.
          </p>
          <p>
            Tudo preparado artesanalmente, em pequenos lotes, com tempo para
            cuidar do que realmente importa: o sabor.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
