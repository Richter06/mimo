import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">Mimo</div>

      <div className="site-footer__links">
        <a href="#inicio">voltar ao começo</a>
        <a href="#doces">doces</a>
        <a href="#encomendas">encomendas</a>
      </div>

      <div className="site-footer__bottom">
        <span>feito com carinho</span>
        <span>mimo · doceria artesanal</span>
      </div>
    </footer>
  )
}

export default Footer
