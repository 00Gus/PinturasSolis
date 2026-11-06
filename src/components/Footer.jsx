import React from 'react';
import { PaintRoller, Phone, Mail, MapPin, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <PaintRoller size={22} />
              </div>
              <span className="logo-text">Pinturas Solís</span>
            </div>
            <p className="footer-tagline">
              Pintamos con calidad, trabajamos con pasión y honestidad. Transformando hogares y negocios en Morelia, Michoacán y alrededores.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navegación</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#simulador">Simulador de Color</a></li>
              <li><a href="#portafolio">Portafolio</a></li>
              <li><a href="#contacto">Cotizar Presupuesto</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Contacto</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="footer-contact-icon" />
                <span>Morelia, Michoacán</span>
              </li>
              <li>
                <Phone size={18} className="footer-contact-icon" />
                <div>
                  <a href="tel:7861391921">786 139 1921</a>
                  <span className="footer-separator">•</span>
                  <a href="tel:7121624284">712 162 4284</a>
                </div>
              </li>
              <li>
                <Mail size={18} className="footer-contact-icon" />
                <a href="mailto:pinturassolis368@gmail.com">pinturassolis368@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Pinturas Solís. Todos los derechos reservados.</p>
          <p className="footer-credit">
            Calidad, garantía y confianza en cada casa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

