import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Pintura para Casas',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildWhatsAppUrl = () => {
    const message = `¡Hola Pinturas Solís! Me gustaría cotizar:
• Nombre: ${formData.name.trim() || 'Cliente'}
• Teléfono: ${formData.phone.trim() || 'No especificado'}
• Servicio: ${formData.service}
• Detalles: ${formData.message.trim() || 'Deseo recibir información y presupuesto para mi espacio.'}`;

    return `https://wa.me/527861391921?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const url = buildWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      service: 'Pintura para Casas',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="contact-wrapper bento-card">
          {/* Información de contacto */}
          <div className="contact-info">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              ¿Listo para <br />
              <span className="text-gradient">transformar tu espacio?</span>
            </motion.h2>
            <p className="contact-desc">
              Pide tu cotización gratuita y sin compromiso. Te atendemos de inmediato por WhatsApp o llamada telefónica.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <strong>Área de Cobertura</strong>
                  <p>Morelia, Michoacán y municipios cercanos</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <strong>Teléfonos de Contacto</strong>
                  <p>
                    <a href="tel:7861391921" className="phone-link">786 139 1921</a><br />
                    <a href="tel:7121624284" className="phone-link">712 162 4284</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <strong>Correo Electrónico</strong>
                  <p><a href="mailto:pinturassolis368@gmail.com" className="phone-link">pinturassolis368@gmail.com</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Clock size={20} /></div>
                <div>
                  <strong>Horario de Atención</strong>
                  <p>Lunes a Sábado: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario a WhatsApp */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-feedback-card success">
                <CheckCircle size={52} className="feedback-icon-success" />
                <h3>¡Abriendo WhatsApp!</h3>
                <p>
                  Tu cotización con los datos de <strong>{formData.name}</strong> está lista para ser enviada. Si no se abrió automáticamente en tu dispositivo, presiona el botón a continuación:
                </p>
                <div className="feedback-actions">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-action"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                    </svg>
                    Abrir Chat en WhatsApp
                  </a>
                  <button type="button" onClick={handleReset} className="btn-secondary w-full">
                    Cotizar otro proyecto
                  </button>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Solicitar Presupuesto Gratuito</h3>
                <p className="form-lead-text">
                  Completa los datos y se abrirá tu WhatsApp con el mensaje listo para enviar al pintor.
                </p>

                <div className="form-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ej. Juan Pérez"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono de Contacto *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Ej. 786 139 1921"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Servicio de Interés</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Pintura para Casas">Pintura para Casas</option>
                    <option value="Pintura para Departamentos">Pintura para Departamentos</option>
                    <option value="Trabajo Comercial y Locales">Trabajo Comercial y Locales</option>
                    <option value="Trabajo Residencial">Trabajo Residencial</option>
                    <option value="Restauración de Muebles o Fachadas">Restauración de Muebles o Fachadas</option>
                    <option value="Otro tipo de servicio">Otro tipo de servicio</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Detalles del Proyecto (Opcional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Ej. Deseo pintar la sala y fachada de 2 pisos, busco acabado mate..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-buttons-group">
                  <button
                    type="submit"
                    className="btn-whatsapp-submit w-full"
                  >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                    </svg>
                    Enviar Cotización por WhatsApp
                  </button>
                  <p className="form-secure-note">
                    Te atenderemos lo más pronto posible.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
