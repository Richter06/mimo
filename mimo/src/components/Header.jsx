import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#inicio" aria-label="Mimo início">
        Mimo
      </a>

      <nav className="site-header__nav" aria-label="Navegação principal">
        <a href="#doces">Doces</a>
        <a href="#mimo">Sobre</a>
        <a href="#encomendas">Encomendas</a>
      </nav>

      <a className="site-header__order" href="#encomendas">
        Pedir um mimo
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Header
