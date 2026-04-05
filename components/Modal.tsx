'use client'
import { useState, useEffect } from 'react'

export default function Modal() {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  const closeModal = () => {
    document.getElementById('cotizar-modal')?.classList.remove('open')
    document.body.style.overflow = ''
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(closeModal, 2200)
  }

  return (
    <div
      id="cotizar-modal"
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={closeModal}>✕</button>
        <div className="sec-label" style={{ marginBottom: 6 }}>Formulario Rápido</div>
        <div className="modal-title">Solicitar Cotización</div>
        <div className="modal-sub">Completa los datos y te contactamos en menos de 24 horas.</div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="fg">
              <label>Nombre</label>
              <input type="text" placeholder="Tu nombre" required />
            </div>
            <div className="fg">
              <label>Empresa</label>
              <input type="text" placeholder="Empresa" />
            </div>
          </div>
          <div className="fg">
            <label>Email</label>
            <input type="email" placeholder="correo@empresa.com" required />
          </div>
          <div className="fg">
            <label>Producto de interés</label>
            <select>
              <option value="">Seleccionar...</option>
              {[
                'Transmisor de Temperatura LoRa',
                'Transmisor de Nivel LoRa',
                'Sensor de Vibraciones LoRa',
                'Gateway LoRa',
                'Registrador DIN 1/4',
                'Gateway Modbus TCP ↔ RTU',
                'Varios / Proyecto completo',
              ].map(p => <option key={p}>{p}</option>)}
            </select>
          </div>
          <div className="fg">
            <label>Descripción del proyecto</label>
            <textarea rows={3} placeholder="Variables a medir, cantidad de puntos, distancias..." />
          </div>
          <button
            className="form-submit"
            type="submit"
            disabled={sent}
            style={{ alignSelf: 'stretch', justifyContent: 'center' }}
          >
            {sent ? '✅ ¡Solicitud enviada!' : '► Enviar Solicitud'}
          </button>
        </form>
      </div>
    </div>
  )
}
