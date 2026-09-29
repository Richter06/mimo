import { motion } from 'motion/react'
import './Philosophy.css'

function Philosophy() {
  return (
    <motion.section
      className="philosophy"
      id="mimo"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <motion.div
        className="philosophy__aside"
        variants={{
          hidden: { opacity: 0, y: 28 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <p className="eyebrow">sobre a mimo</p>
        <motion.span
          className="philosophy__mark"
          aria-hidden="true"
          initial={{ rotate: -18, scale: 0.7 }}
          whileInView={{ rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'backOut' }}
        >
          ✳
        </motion.span>
      </motion.div>

      <div className="philosophy__copy">
        <motion.p
          className="philosophy__lead"
          variants={{
            hidden: { opacity: 0, y: 42 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
        >
          A gente acredita que um doce não precisa de motivo.
          <em> Mas pode melhorar qualquer momento.</em>
        </motion.p>

        <motion.div
          className="philosophy__details"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <p>
            Chocolate de verdade, frutas frescas, cremes delicados e receitas
            que deixam a vontade de voltar.
          </p>
          <p>
            Tudo preparado artesanalmente, em pequenos lotes, com tempo para
            cuidar do que realmente importa: o sabor.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Philosophy
