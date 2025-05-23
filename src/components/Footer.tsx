

import Logo from '../assets/img/Logo.png'; // Asegúrate de tener este logo


 // Asegúrate de tener este archivo CSS

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="column logo">
           <img src={Logo} alt="Logo de la empresa" className="logo-img" />
        </div>
         
        <div className="column menu">
          <h3>Enlaces</h3>
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Nosotros</a>
          <a href="#">Contacto</a>
        </div>

        <div className="column contacto">
          <h3>Contacto</h3>
          <p>📧 universidad@miempresa.com</p>
          <p>📞 +57 3022243805</p>
        </div>

        <div className="column redes">
          <h3>Síguenos</h3>
          <div className="redes">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;