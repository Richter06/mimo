import { motion } from 'motion/react'
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

const reveal = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0 },
}

function Menu() {
  return (
    <section className="menu" id="doces">
      <motion.div
        className="menu__intro"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <motion.p
          className="eyebrow"
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          a vitrine
        </motion.p>
        <motion.h2
          variants={reveal}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.2, 0.7, 0.2, 1] }}
        >
          Escolha pelo
          <span>desejo.</span>
        </motion.h2>
        <motion.p
          variants={reveal}
          transition={{ duration: 0.8, delay: 0.16, ease: [0.2, 0.7, 0.2, 1] }}
        >
          Alguns clássicos, algumas surpresas e sempre alguma coisa que você
          ainda não sabia que queria.
        </motion.p>
      </motion.div>

      <div className="menu__grid">
        {products.map((product, index) => (
          <motion.article
            className="product"
            key={product.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.9,
              delay: index * 0.08,
              ease: [0.2, 0.7, 0.2, 1],
            }}
          >
            <motion.a
              className="product__image-wrap"
              href="#encomendas"
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.985 }}
            >
              <motion.img
                className="product__image"
                src={product.image}
                alt={product.name}
                loading="lazy"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.06 },
                }}
                transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              />
              <motion.span
                className="product__arrow"
                aria-hidden="true"
                variants={{
                  rest: { x: 0, y: 0, rotate: 0 },
                  hover: { x: 4, y: -4, rotate: 6 },
                }}
                transition={{ type: 'spring', stiffness: 360, damping: 20 }}
              >
                ↗
              </motion.span>
            </motion.a>
            <div className="product__meta">
              <p>{product.type}</p>
              <h3>{product.name}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Menu
