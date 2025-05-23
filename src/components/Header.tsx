import Logo from '../assets/img/Logo.png';
import Cart from '../components/Carrito';

const Header = () => {
  return (
    <>
        <header className="header" id="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="four columns">
                        <img src={Logo} alt="EduCorp Academy" id="logo" className="logo-img"/>
                    </div>
                    <Cart/>       
                </div>
            </div>
        </header>    
    
        <nav className="nav-links">
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">Contáctenos</a>
        </nav>
    </>

  )
}

export default Header