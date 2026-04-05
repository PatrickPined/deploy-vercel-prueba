'use client'
import { useState } from 'react'
import LogoSVG from './LogoSVG'

const ChevronIcon = () => (
  <svg viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
)

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const openModal = () => {
    document.getElementById('cotizar-modal')?.classList.add('open')
    document.body.style.overflow = 'hidden'
  }

  return (
    <nav id="nav">
      <div className="nav-wrap">
        <a href="#" className="nav-logo">
          <LogoSVG />
          <span className="nav-wordmark">►<span>ROCKOFF</span> AUTOMATION</span>
        </a>

        <ul className="nav-menu">
          {/* Rockoff Instruments */}
          <li className="nav-item">
            <div className="nav-link">
              Rockoff Instruments <ChevronIcon />
            </div>
            <div className="dropdown drop-simple">
              <a href="#productos">
                <span className="drop-link-name">Transmisor de Temperatura</span>
                <span className="drop-link-sub">LoRa · Batería · IP67</span>
              </a>
              <a href="#productos">
                <span className="drop-link-name">Transmisor de Nivel</span>
                <span className="drop-link-sub">LoRa · Ultrasónico / Presión</span>
              </a>
              <a href="#productos">
                <span className="drop-link-name">Sensor de Vibraciones</span>
                <span className="drop-link-sub">LoRa · Triaxial · Predictivo</span>
              </a>
              <a href="#productos">
                <span className="drop-link-name">Gateway LoRa</span>
                <span className="drop-link-sub">Concentrador · Multi-sensor</span>
              </a>
            </div>
          </li>

          {/* Rockoff Controls */}
          <li className="nav-item">
            <div className="nav-link">
              Rockoff Controls <ChevronIcon />
            </div>
            <div className="dropdown drop-simple">
              <a href="#controles">
                <span className="drop-link-name">Registrador DIN 1/4</span>
                <span className="drop-link-sub">4 tarjetas · 32 GB · Pantalla</span>
              </a>
              <a href="#controles">
                <span className="drop-link-name">Gateway Modbus TCP ↔ RTU</span>
                <span className="drop-link-sub">Bidireccional · SCADA / HMI</span>
              </a>
            </div>
          </li>

          <li className="nav-item"><a href="#nosotros" className="nav-link">Nosotros</a></li>

          {/* Industrias */}
          <li className="nav-item">
            <div className="nav-link">Industrias <ChevronIcon /></div>
            <div className="dropdown drop-simple">
              {['⛏ Minería','🛢 Oil & Gas','💧 Agua y Saneamiento','🌾 Agroindustria','⚡ Energía','🏭 Manufactura'].map(s => (
                <a key={s} href="#industrias"><span className="drop-link-name">{s}</span></a>
              ))}
            </div>
          </li>

          <li className="nav-item"><a href="#distribuidores" className="nav-link">Distribuidores</a></li>
          <li className="nav-item"><a href="#blog" className="nav-link">Blog Técnico</a></li>
        </ul>

        <div className="nav-actions">
          <button className="nav-cta" onClick={openModal}>► Cotizar</button>
        </div>

        <button className="nav-ham" onClick={() => setMobileOpen(p => !p)}>
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile nav */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <a href="#productos" onClick={() => setMobileOpen(false)}>Rockoff Instruments</a>
        <a href="#controles" onClick={() => setMobileOpen(false)}>Rockoff Controls</a>
        <a href="#nosotros" onClick={() => setMobileOpen(false)}>Nosotros</a>
        <a href="#industrias" onClick={() => setMobileOpen(false)}>Industrias</a>
        <a href="#distribuidores" onClick={() => setMobileOpen(false)}>Distribuidores</a>
        <a href="#blog" onClick={() => setMobileOpen(false)}>Blog Técnico</a>
        <a href="#" className="m-cta" onClick={(e) => { e.preventDefault(); openModal(); setMobileOpen(false) }}>► Cotizar Ahora</a>
      </div>
    </nav>
  )
}
