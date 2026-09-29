import { motion } from 'motion/react'
import './Header.css'

function Header() {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay: 0.15 }}
    >
      <motion.a
        className="site-header__brand"
        href="#inicio"
        aria-label="Mimo início"
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      >
        Mimo
      </motion.a>

      <nav className="site-header__nav" aria-label="Navegação principal">
        <a href="#doces">Doces</a>
        <a href="#mimo">Sobre</a>
        <a href="#encomendas">Encomendas</a>
      </nav>

      <motion.a
        className="site-header__order"
        href="#encomendas"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      >
        Pedir um mimo
        <span aria-hidden="true">↗</span>
      </motion.a>
    </motion.header>
  )
}

export default Header
