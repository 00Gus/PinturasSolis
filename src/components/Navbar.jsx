import React, { useState } from 'react';
import { Menu, X, PaintRoller, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Simulador', href: '#simulador' },
  { name: 'Portafolio', href: '#portafolio' },
  { name: 'Contacto', href: '#contacto' }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav-container">
        {/* Logo Tipográfico Premium */}
        <a href="#inicio" className="nav-logo" onClick={closeMobileMenu}>
          <div className="logo-icon">
            <PaintRoller size={24} />
          </div>
          <span className="logo-text">Pinturas Solís</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* CTA Button & Mobile Trigger */}
        <div className="nav-actions">
          <a href="#contacto" className="btn-primary desktop-btn">
            Solicitar Presupuesto
          </a>
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="container mobile-drawer-content">
              <ul className="mobile-nav-links">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} onClick={closeMobileMenu}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mobile-drawer-actions">
                <a 
                  href="#contacto" 
                  className="btn-primary w-full text-center" 
                  onClick={closeMobileMenu}
                >
                  Solicitar Presupuesto
                </a>
                <div className="mobile-quick-contacts">
                  <a href="tel:7861391921" className="mobile-contact-pill">
                    <Phone size={16} /> 786 139 1921
                  </a>
                  <a 
                    href="https://wa.me/527861391921?text=Hola%20Pinturas%20Sol%C3%ADs,%20me%20gustar%C3%ADa%20cotizar%20un%20servicio%20de%20pintura" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mobile-contact-pill whatsapp-pill"
                  >
                    <MessageSquare size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
