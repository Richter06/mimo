import { motion } from 'motion/react'
import './Gifting.css'

function Gifting() {
  return (
    <section className="gifting">
      <div className="gifting__label">
        <p className="eyebrow">para presentear</p>
      </div>

      <div className="gifting__main">
        <div className="gifting__words" aria-hidden="true">
          <span>um</span>
          <span>mimo</span>
          <span>seu.</span>
        </div>

        <motion.div
          className="gifting__copy"
          initial={{ opacity: 0, y: 46 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <h2>Tem coisa que fica melhor quando vem numa caixa.</h2>
          <p>
            Montamos caixas com doces escolhidos por você para aniversários,
            agradecimentos, encontros e aquelas ocasiões que não precisam de
            explicação.
          </p>
          <motion.a
            className="text-link"
            href="#encomendas"
            whileHover={{ x: 6 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 360, damping: 24 }}
          >
            montar uma caixa <span aria-hidden="true">↗</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Gifting
