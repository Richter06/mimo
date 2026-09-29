import { motion } from 'motion/react'

import './Philosophy.css'

const ingredients = [
  'chocolate de verdade',
  'frutas frescas',
  'cremes delicados',
  'feito à mão',
  'pequenos lotes',
  'chocolate de verdade',
  'frutas frescas',
  'cremes delicados',
  'feito à mão',
  'pequenos lotes',
]

function TickerGroup({ duplicate = false }) {
  return (
    <div
      className="philosophy__ticker-group"
      aria-hidden={duplicate}
    >
      {ingredients.map((ingredient, index) => (
        <span key={`${ingredient}-${index}`}>
          {ingredient}
          <b aria-hidden="true">✳</b>
        </span>
      ))}
    </div>
  )
}

function Philosophy() {
  return (
    <section className="philosophy" id="mimo">
      <div
        className="philosophy__noise"
        aria-hidden="true"
      />

      <div className="philosophy__top">
        <motion.p
          className="eyebrow philosophy__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          sobre a mimo
        </motion.p>

        <motion.span
          className="philosophy__number"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
          feito para dar vontade
        </motion.span>
      </div>

      <div className="philosophy__manifesto">
        <motion.div
          className="philosophy__word philosophy__word--one"
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          DOCE
        </motion.div>

        <motion.div
          className="philosophy__word philosophy__word--two"
          initial={{
            opacity: 0,
            x: 70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            delay: 0.08,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          NÃO
        </motion.div>

        <motion.div
          className="philosophy__word philosophy__word--three"
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            delay: 0.16,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          PRECISA
        </motion.div>

        <motion.div
          className="philosophy__word philosophy__word--four"
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            delay: 0.24,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          DE
        </motion.div>

        <motion.div
          className="philosophy__word philosophy__word--five"
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            delay: 0.32,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          MOTIVO<span>.</span>
        </motion.div>

        <motion.span
          className="philosophy__star"
          aria-hidden="true"
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -35,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.45,
            ease: 'backOut',
          }}
        >
          ✳
        </motion.span>
      </div>

      <motion.div
        className="philosophy__ticker"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.2, 0.7, 0.2, 1],
        }}
      >
        <div className="philosophy__ticker-track">
          <TickerGroup />
          <TickerGroup duplicate />
        </div>
      </motion.div>

      <div className="philosophy__bottom">
        <motion.p
          className="philosophy__small"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          A gente acredita em chocolate de verdade, frutas frescas,
          cremes delicados e receitas que fazem você querer voltar.
        </motion.p>

        <motion.p
          className="philosophy__statement"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          Mas pode melhorar
          <em> qualquer momento.</em>
        </motion.p>
      </div>
    </section>
  )
}

export default Philosophy