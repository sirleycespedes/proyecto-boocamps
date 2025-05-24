
import Logo from "../assets/img/Logo.png"
import Cart from "../components/Carrito"


const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-section">
            <img src={Logo || "/placeholder.svg"} alt="EduCorp Academy" id="logo" className="logo-img" />
          </div>

          {/* Navegación */}
          <nav className="nav-links">
            <a href="#" className="nav-link">
              Inicio
            </a>
            <a href="#" className="nav-link">
              Productos
            </a>
            <a href="#" className="nav-link">
              Contáctenos
            </a>
          </nav>

          {/* Carrito */}
          <div className="cart-section">
            <Cart />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
