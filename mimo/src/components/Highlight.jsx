import { motion } from 'motion/react'
import './Highlight.css'

const image =
  'https://images.unsplash.com/photo-1589375025852-a66cdd127efb?auto=format&fit=crop&w=1800&q=85'

function Highlight() {
  return (
    <section className="highlight">
      <motion.div
        className="highlight__image-wrap"
        whileHover={{ scale: 1.008 }}
        transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <img
          src={image}
          alt="Sobremesa de chocolate com frutas vermelhas"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        className="highlight__content"
        initial={{ opacity: 0, x: 36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      >
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
        <motion.a
          className="text-link"
          href="#encomendas"
          whileHover={{ x: 6 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 360, damping: 24 }}
        >
          quero provar <span aria-hidden="true">↗</span>
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Highlight
