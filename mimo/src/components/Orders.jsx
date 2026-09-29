import { motion } from 'motion/react'
import './Orders.css'

function Orders() {
  return (
    <section className="orders" id="encomendas">
      <div className="orders__top">
        <p className="eyebrow">encomendas</p>
        <span>para dias especiais ou só para hoje</span>
      </div>

      <div className="orders__body">
        <h2>
          <span className="orders__headline-line-wrap">
            <span className="orders__headline-line">Tem festa?</span>
          </span>
          <span className="orders__headline-line-wrap orders__headline-line-wrap--offset">
            <span className="orders__headline-line">Tem doce.</span>
          </span>
        </h2>

        <motion.div
          className="orders__action"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <p>
            Bolos, caixas, mesas doces e encomendas personalizadas. Conta pra
            gente o que você imaginou.
          </p>
          <motion.a
            href="#encomendas"
            whileHover={{ x: 6 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 360, damping: 24 }}
          >
            falar com a mimo <span aria-hidden="true">↗</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Orders
