import { motion } from 'motion/react'

import './Orders.css'

function Orders() {
  return (
    <section className="orders" id="encomendas">
      <div className="orders__top">
        <p className="eyebrow orders__eyebrow">
          encomendas
        </p>

        <span className="orders__top-note">
          para dias especiais ou só para hoje
        </span>
      </div>

      <div className="orders__body">
        <div className="orders__headline">
          <span className="orders__serial" aria-hidden="true">
            03 / 03
          </span>

          <h2>
            <span className="orders__headline-line-wrap">
              <span className="orders__headline-line">
                Tem festa?
              </span>
            </span>

            <span className="orders__headline-line-wrap orders__headline-line-wrap--offset">
              <span className="orders__headline-line">
                Tem doce.
              </span>
            </span>
          </h2>

          <span className="orders__asterisk" aria-hidden="true">
            ✳
          </span>
        </div>

        <motion.div
          className="orders__action"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          <div className="orders__action-copy">
            <span>do primeiro pedaço ao último</span>

            <p>
              Bolos, caixas, mesas doces e encomendas
              personalizadas. Conta pra gente o que você
              imaginou.
            </p>
          </div>

          <motion.a
            className="orders__cta"
            href="#encomendas"
            whileHover="hover"
            whileTap={{
              scale: 0.97,
            }}
            aria-label="Falar com a Mimo sobre uma encomenda"
          >
            <span className="orders__cta-ring">
              <span>falar com</span>
              <strong>Mimo</strong>
              <span>↗</span>
            </span>

            <motion.span
              className="orders__cta-arrow"
              aria-hidden="true"
              variants={{
                hover: {
                  x: 8,
                  y: -8,
                  rotate: 8,
                },
              }}
              transition={{
                type: 'spring',
                stiffness: 360,
                damping: 20,
              }}
            >
              ↗
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      <div className="orders__marquee" aria-hidden="true">
        <div className="orders__marquee-track">
          <span>bolos</span>
          <i>✳</i>
          <span>caixas</span>
          <i>✳</i>
          <span>mesas doces</span>
          <i>✳</i>
          <span>encomendas personalizadas</span>
          <i>✳</i>

          <span>bolos</span>
          <i>✳</i>
          <span>caixas</span>
          <i>✳</i>
          <span>mesas doces</span>
          <i>✳</i>
          <span>encomendas personalizadas</span>
          <i>✳</i>

          <span>caixas</span>
          <i>✳</i>
          <span>mesas doces</span>
          <i>✳</i>
          <span>encomendas personalizadas</span>
          <i>✳</i>

          <span>bolos</span>
          <i>✳</i>
          <span>caixas</span>
          <i>✳</i>
          <span>mesas doces</span>
          <i>✳</i>
          <span>encomendas personalizadas</span>
          <i>✳</i>

          <span>bolos</span>
          <i>✳</i>
          <span>caixas</span>
          <i>✳</i>
          <span>mesas doces</span>
          <i>✳</i>
          <span>encomendas personalizadas</span>
          <i>✳</i>  
        </div>
      </div>

      <div className="orders__bottom">
        <span>feito em pequenos lotes</span>

        <motion.a
          href="#inicio"
          className="orders__back"
          whileHover={{
            x: -5,
          }}
          transition={{
            type: 'spring',
            stiffness: 360,
            damping: 24,
          }}
        >
          voltar ao começo
          <span aria-hidden="true">↑</span>
        </motion.a>
      </div>
    </section>
  )
}

export default Orders