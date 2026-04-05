'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

const slides = [
  {
    eyebrow: 'Instrumentación Industrial',
    h1: ['INDUSTRIA', <em key="em">SIN CABLES.</em>, <span key="g" className="ghost">SIN LÍMITES.</span>],
    desc: 'Transmisores LoRa de temperatura, nivel y vibraciones para los entornos industriales más exigentes del Perú y la región. Sin cableado, sin complicaciones, sin límites de distancia.',
    cta: { label: '► Ver Productos', href: '#productos' },
    gradient: 'linear-gradient(135deg, rgba(28,26,26,0.98) 0%, rgba(28,26,26,0.88) 50%, rgba(192,39,26,0.12) 100%)',
    visual: (
      <svg viewBox="0 0 400 380" fill="none">
        <polygon points="200,8 390,360 10,360" stroke="#C0271A" strokeWidth="2"/>
        <polygon points="200,40 360,352 40,352" stroke="#C0271A" strokeWidth="1" opacity="0.35"/>
        <polygon points="200,80 328,344 72,344" stroke="#C0271A" strokeWidth="0.5" opacity="0.18"/>
        <path d="M180,200 Q200,175 220,200" stroke="#C0271A" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
        <path d="M162,214 Q200,165 238,214" stroke="#C0271A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <path d="M144,228 Q200,155 256,228" stroke="#C0271A" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
        <circle cx="200" cy="208" r="5" fill="#C0271A"/>
        <polyline points="42,348 42,326 68,326 68,304 94,304 94,326 120,326 120,348" stroke="#C0271A" strokeWidth="2" opacity="0.7"/>
        <polyline points="280,348 280,326 306,326 306,304 332,304 332,326 358,326 358,348" stroke="#C0271A" strokeWidth="2" opacity="0.7"/>
        <line x1="200" y1="208" x2="290" y2="140" stroke="#C0271A" strokeWidth="1" strokeDasharray="4,4" opacity="0.4"/>
        <circle cx="290" cy="140" r="3" fill="none" stroke="#C0271A" strokeWidth="1.5" opacity="0.7"/>
        <line x1="200" y1="208" x2="110" y2="130" stroke="#C0271A" strokeWidth="1" strokeDasharray="4,4" opacity="0.4"/>
        <circle cx="110" cy="130" r="3" fill="none" stroke="#C0271A" strokeWidth="1.5" opacity="0.7"/>
        <text x="296" y="134" fill="#C0271A" fontSize="9" fontFamily="monospace" opacity="0.6">TEMP</text>
        <text x="80" y="124" fill="#C0271A" fontSize="9" fontFamily="monospace" opacity="0.6">NIVEL</text>
      </svg>
    ),
  },
  {
    eyebrow: 'Control Industrial',
    h1: ['MODBUS', <em key="em">RTU A TCP</em>, <span key="g" className="ghost">EN SEGUNDOS.</span>],
    desc: 'El Gateway Rockoff convierte tu instrumentación de campo a Modbus TCP/IP para integración directa con SCADA, HMI y sistemas de supervisión vía red IP. Bidireccional. Montaje en riel DIN.',
    cta: { label: '► Ver Controls', href: '#controles' },
    gradient: 'linear-gradient(135deg, rgba(18,16,16,0.98) 0%, rgba(28,10,10,0.92) 50%, rgba(192,39,26,0.08) 100%)',
    visual: (
      <svg viewBox="0 0 400 340" fill="none">
        <rect x="140" y="100" width="120" height="140" rx="2" stroke="#C0271A" strokeWidth="2"/>
        <rect x="150" y="112" width="100" height="30" fill="rgba(192,39,26,0.1)" stroke="#C0271A" strokeWidth="0.5"/>
        <text x="200" y="132" fill="#C0271A" fontSize="10" fontFamily="monospace" textAnchor="middle" opacity="0.8">ROCKOFF GW</text>
        <rect x="110" y="155" width="30" height="12" rx="1" stroke="#C0271A" strokeWidth="1" opacity="0.7"/>
        <rect x="110" y="172" width="30" height="12" rx="1" stroke="#C0271A" strokeWidth="1" opacity="0.5"/>
        <rect x="110" y="189" width="30" height="12" rx="1" stroke="#C0271A" strokeWidth="1" opacity="0.35"/>
        <line x1="60" y1="161" x2="110" y2="161" stroke="#C0271A" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.7"/>
        <line x1="60" y1="178" x2="110" y2="178" stroke="#C0271A" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
        <line x1="60" y1="195" x2="110" y2="195" stroke="#C0271A" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.35"/>
        <circle cx="50" cy="161" r="10" stroke="#C0271A" strokeWidth="1.5" opacity="0.7"/>
        <text x="50" y="165" fill="#C0271A" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.7">PLC</text>
        <circle cx="50" cy="178" r="10" stroke="#C0271A" strokeWidth="1.5" opacity="0.5"/>
        <text x="50" y="182" fill="#C0271A" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.5">MED</text>
        <rect x="260" y="160" width="30" height="20" rx="1" stroke="#C0271A" strokeWidth="1.5" opacity="0.8"/>
        <line x1="290" y1="170" x2="340" y2="170" stroke="#C0271A" strokeWidth="2" opacity="0.8"/>
        <ellipse cx="360" cy="170" rx="28" ry="22" stroke="#C0271A" strokeWidth="1.5" opacity="0.7"/>
        <text x="360" y="167" fill="#C0271A" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.7">SCADA</text>
        <text x="360" y="178" fill="#C0271A" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.5">TCP/IP</text>
        <text x="200" y="260" fill="#C0271A" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.4">CONVERSIÓN BIDIRECCIONAL</text>
        <circle cx="164" cy="160" r="3" fill="#C0271A" opacity="0.9"/>
        <circle cx="176" cy="160" r="3" fill="rgba(192,39,26,0.3)"/>
        <circle cx="188" cy="160" r="3" fill="#C0271A" opacity="0.7"/>
      </svg>
    ),
  },
  {
    eyebrow: 'Rockoff Controls',
    h1: ['REGISTRO.', <em key="em">CONTROL.</em>, <span key="g" className="ghost">DATALOGGING.</span>],
    desc: 'El Registrador DIN 1/4 de Rockoff Controls acepta hasta 4 tarjetas de señales de campo intercambiables, 32 GB de memoria datalogger y pantalla integrada. Toda la información de proceso, en un solo equipo.',
    cta: { label: '► Ver Controls', href: '#controles' },
    gradient: 'linear-gradient(135deg, rgba(18,16,16,0.97) 0%, rgba(20,12,12,0.93) 60%, rgba(192,39,26,0.07) 100%)',
    visual: (
      <svg viewBox="0 0 400 340" fill="none">
        <rect x="100" y="60" width="200" height="220" rx="4" stroke="#C0271A" strokeWidth="2" opacity="0.8"/>
        <rect x="108" y="68" width="184" height="204" rx="2" stroke="#C0271A" strokeWidth="0.5" opacity="0.3"/>
        <rect x="116" y="76" width="168" height="80" rx="2" fill="rgba(192,39,26,0.08)" stroke="#C0271A" strokeWidth="1.5"/>
        <text x="200" y="104" fill="#C0271A" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.7">TEMP  23.4°C</text>
        <text x="200" y="118" fill="#C0271A" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.6">NIVEL  78.2%</text>
        <text x="200" y="132" fill="#C0271A" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.5">VIB   0.12g</text>
        <text x="200" y="146" fill="#C0271A" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.4">FLOW  142 m³/h</text>
        <rect x="116" y="166" width="38" height="50" rx="1" stroke="#C0271A" strokeWidth="1.5" fill="rgba(192,39,26,0.12)"/>
        <text x="135" y="185" fill="#C0271A" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.8">T-01</text>
        <text x="135" y="198" fill="#C0271A" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.5">4-20mA</text>
        <rect x="162" y="166" width="38" height="50" rx="1" stroke="#C0271A" strokeWidth="1.5" fill="rgba(192,39,26,0.08)"/>
        <text x="181" y="185" fill="#C0271A" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.8">T-02</text>
        <text x="181" y="198" fill="#C0271A" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.5">RTD</text>
        <rect x="208" y="166" width="38" height="50" rx="1" stroke="#C0271A" strokeWidth="1.5" fill="rgba(192,39,26,0.08)"/>
        <text x="227" y="185" fill="#C0271A" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.8">T-03</text>
        <text x="227" y="198" fill="#C0271A" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.5">TC</text>
        <rect x="254" y="166" width="38" height="50" rx="1" stroke="#C0271A" strokeWidth="1" fill="none" strokeDasharray="3,2"/>
        <text x="273" y="191" fill="#C0271A" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.35">COM</text>
        <rect x="116" y="226" width="168" height="32" rx="1" fill="rgba(192,39,26,0.05)" stroke="#C0271A" strokeWidth="0.8" opacity="0.5"/>
        <rect x="152" y="236" width="60" height="12" rx="1" fill="rgba(192,39,26,0.15)" stroke="#C0271A" strokeWidth="0.5" opacity="0.5"/>
        <text x="182" y="246" fill="#C0271A" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.6">32 GB</text>
        <circle cx="264" cy="242" r="4" fill="#C0271A" opacity="0.7"/>
        <circle cx="278" cy="242" r="4" fill="rgba(192,39,26,0.3)"/>
        <text x="200" y="316" fill="#C0271A" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.35">DIN 1/4 — RIEL DIN</text>
      </svg>
    ),
  },
]

export default function HeroCarousel() {
  const [curr, setCurr] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = slides.length

  const goTo = useCallback((n: number) => {
    setCurr(((n % total) + total) % total)
  }, [total])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => goTo(curr + 1), 5500)
  }, [curr, goTo])

  useEffect(() => {
    timerRef.current = setInterval(() => setCurr(c => (c + 1) % total), 5500)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [total])

  const openModal = () => {
    document.getElementById('cotizar-modal')?.classList.add('open')
    document.body.style.overflow = 'hidden'
  }

  const slide = slides[curr]

  return (
    <div className="hero-carousel" id="hero">
      <div className="hero-slides" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((s, i) => (
          <div key={i} className="hero-slide">
            <div className="slide-bg" />
            <div className="slide-bg-gradient" style={{ background: s.gradient }} />
            <div className="slide-inner">
              <div className="slide-left">
                <div className="slide-eyebrow">{s.eyebrow}</div>
                <h1 className="slide-h1">
                  {Array.isArray(s.h1) ? s.h1.map((line, li) => (
                    <span key={li} style={{ display: 'block' }}>{line}</span>
                  )) : s.h1}
                </h1>
                <p className="slide-desc">{s.desc}</p>
                <div className="slide-actions">
                  <a href={s.cta.href} className="btn-red">{s.cta.label}</a>
                  <button className="btn-ghost" onClick={openModal}>Solicitar Info</button>
                </div>
              </div>
              <div className="slide-right">
                <div className="slide-visual">{s.visual}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="car-arrows">
        <button className="car-arrow" onClick={() => { goTo(curr - 1); resetTimer() }}>←</button>
        <button className="car-arrow" onClick={() => { goTo(curr + 1); resetTimer() }}>→</button>
      </div>
      <div className="car-dots">
        {slides.map((_, i) => (
          <button key={i} className={`car-dot${curr === i ? ' active' : ''}`} onClick={() => { goTo(i); resetTimer() }} />
        ))}
      </div>
      <div className="slide-number">
        {String(curr + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      {/* Stats */}
      <div className="hero-stats">
        {[
          { num: '15 km', label: 'Alcance LoRa' },
          { num: '6',     label: 'Sectores industriales' },
          { num: '2',     label: 'Divisiones activas' },
          { num: 'Perú',  label: 'Cobertura actual' },
        ].map(s => (
          <div key={s.label} className="hero-stat">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
