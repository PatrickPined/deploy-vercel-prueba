'use client'
import { useState } from 'react'

export default function Contacto() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="sec">
      <div className="sec-inner">
        <div className="contact-layout">
          <div className="reveal">
            <div className="sec-label">Hablemos</div>
            <h2 className="sec-title">Contáctanos</h2>
            <p className="sec-intro" style={{ marginTop: 12, marginBottom: 36 }}>
              ¿Tienes un proyecto o necesitas asesoría técnica? Cuéntanos tu aplicación y te orientamos sin compromiso.
            </p>
            <div className="contact-info">
              {[
                { label: 'Website',       val: <a href="https://rockoffautomation.com">rockoffautomation.com</a> },
                { label: 'Email',         val: <a href="mailto:ventas@rockoffautomation.com">ventas@rockoffautomation.com</a> },
                { label: 'Cobertura',     val: 'Perú — Lima y provincias' },
                { label: 'Especialidad',  val: 'Instrumentación LoRa · Control Modbus' },
              ].map(({ label, val }) => (
                <div key={label}>
                  <div className="ci-label">{label}</div>
                  <div className="ci-val">{val}</div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="fg">
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre" required />
              </div>
              <div className="fg">
                <label>Empresa</label>
                <input type="text" placeholder="Empresa o proyecto" />
              </div>
            </div>
            <div className="fg">
              <label>Email</label>
              <input type="email" placeholder="correo@empresa.com" required />
            </div>
            <div className="fg">
              <label>Sector</label>
              <select>
                <option value="">Selecciona un sector...</option>
                {['Minería','Oil & Gas','Agua y Saneamiento','Agroindustria','Energía','Manufactura','Otro'].map(s => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="fg">
              <label>¿Qué necesitas medir o controlar?</label>
              <textarea rows={4} placeholder="Describe tu aplicación: variables, distancias, condiciones del entorno..." />
            </div>
            <button className="form-submit" type="submit" disabled={sent}>
              {sent ? '✅ Mensaje enviado' : '► Enviar Consulta'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
