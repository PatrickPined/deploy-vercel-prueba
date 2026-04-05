'use client'
import { useState } from 'react'

const instruments = [
  {
    num: 'INST — 01', name: 'Transmisor de Temperatura',
    desc: 'Sensor LoRa de temperatura industrial. Batería de larga duración, IP67 y rango extendido –40 a +85 °C. Ideal para hornos, pilas, transformadores y cámaras de frío.',
    badges: [['badge-lora','LoRa 868/915MHz'],['badge-battery','Batería 5 años'],['badge-ip','IP67']],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="46" height="46">
        <rect x="20" y="4" width="8" height="28" rx="4" stroke="#C0271A" strokeWidth="1.5" opacity="0.7"/>
        <circle cx="24" cy="38" r="7" stroke="#C0271A" strokeWidth="1.5"/>
        <circle cx="24" cy="38" r="4" fill="rgba(192,39,26,0.4)"/>
        <line x1="24" y1="32" x2="24" y2="26" stroke="#C0271A" strokeWidth="2" opacity="0.8"/>
        <line x1="29" y1="12" x2="34" y2="12" stroke="#C0271A" strokeWidth="1.5" opacity="0.5" strokeLinecap="round"/>
        <line x1="29" y1="18" x2="32" y2="18" stroke="#C0271A" strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: 'INST — 02', name: 'Transmisor de Nivel',
    desc: 'Medición de nivel por ultrasonido o presión hidrostática. Sin contacto con el fluido en versión ultrasónica. Compatible con tanques, pozos, reservorios y silos a batería.',
    badges: [['badge-lora','LoRa'],['badge-battery','Sin cableado'],['badge-ip','4–20 mA opt.']],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="46" height="46">
        <rect x="10" y="8" width="28" height="36" rx="2" stroke="#C0271A" strokeWidth="1.5" opacity="0.5"/>
        <rect x="14" y="26" width="20" height="14" fill="rgba(192,39,26,0.25)"/>
        <line x1="10" y1="26" x2="38" y2="26" stroke="#C0271A" strokeWidth="1.5"/>
        <path d="M20 6 L24 2 L28 6" stroke="#C0271A" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round"/>
        <line x1="14" y1="22" x2="34" y2="22" stroke="#C0271A" strokeWidth="0.8" opacity="0.3" strokeDasharray="2,2"/>
        <line x1="14" y1="18" x2="34" y2="18" stroke="#C0271A" strokeWidth="0.8" opacity="0.2" strokeDasharray="2,2"/>
      </svg>
    ),
  },
  {
    num: 'INST — 03', name: 'Sensor de Vibraciones',
    desc: 'Monitoreo predictivo triaxial de vibraciones en motores, bombas, compresores y equipos rotativos. Detección temprana de fallas antes de paradas no planificadas.',
    badges: [['badge-lora','LoRa · Triaxial'],['badge-battery','Tiempo real'],['badge-ip','Alertas']],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="46" height="46">
        <path d="M4 24 L10 16 L16 32 L22 12 L28 36 L34 20 L40 28 L44 24" stroke="#C0271A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
        <rect x="16" y="36" width="16" height="8" rx="1" stroke="#C0271A" strokeWidth="1.5" opacity="0.5"/>
        <line x1="24" y1="36" x2="24" y2="32" stroke="#C0271A" strokeWidth="1.5" opacity="0.7"/>
      </svg>
    ),
  },
  {
    num: 'INST — 04', name: 'Gateway LoRa',
    desc: 'Concentrador LoRa que recibe datos de múltiples sensores Rockoff Instruments simultáneamente y los entrega a SCADA, HMI o sistema de monitoreo vía Ethernet / RS-485.',
    badges: [['badge-lora','LoRa Multi-sensor'],['badge-battery','Ethernet'],['badge-ip','RS-485']],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="46" height="46">
        <rect x="8" y="16" width="32" height="20" rx="2" stroke="#C0271A" strokeWidth="1.5" opacity="0.7"/>
        <path d="M20 14 Q24 8 28 14" stroke="#C0271A" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8"/>
        <path d="M16 12 Q24 4 32 12" stroke="#C0271A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>
        <circle cx="24" cy="26" r="3" fill="#C0271A" opacity="0.8"/>
        <line x1="14" y1="36" x2="14" y2="42" stroke="#C0271A" strokeWidth="1.5" opacity="0.5"/>
        <line x1="24" y1="36" x2="24" y2="42" stroke="#C0271A" strokeWidth="1.5" opacity="0.5"/>
        <line x1="34" y1="36" x2="34" y2="42" stroke="#C0271A" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    ),
  },
]

export default function Productos() {
  const [tab, setTab] = useState<'instruments' | 'controls'>('instruments')

  return (
    <section id="productos" className="sec">
      <div className="prod-bg" />
      <div className="sec-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal">
          <div className="sec-label">Catálogo</div>
          <h2 className="sec-title">Nuestros <em>Productos</em></h2>
          <p className="sec-intro">Hardware diseñado y certificado para la industria. Cada dispositivo con especificaciones completas y soporte técnico en Perú.</p>
        </div>

        <div className="prod-tabs reveal">
          <div className={`prod-tab${tab === 'instruments' ? ' active' : ''}`} onClick={() => setTab('instruments')}>
            ► Rockoff Instruments
          </div>
          <div className={`prod-tab${tab === 'controls' ? ' active' : ''}`} onClick={() => setTab('controls')}>
            ► Rockoff Controls
          </div>
        </div>

        {/* Instruments panel */}
        <div className={`prod-panel${tab === 'instruments' ? ' active' : ''}`}>
          {instruments.map((p) => (
            <div key={p.num} className="prod-card">
              <div className="prod-card-icon">{p.icon}</div>
              <div className="prod-card-num">{p.num}</div>
              <div className="prod-card-name">{p.name}</div>
              <div className="prod-card-desc">{p.desc}</div>
              <div className="prod-badges">
                {p.badges.map(([cls, label]) => (
                  <span key={label} className={`badge ${cls}`}>{label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controls panel */}
        <div id="controles" className={`prod-panel-control${tab === 'controls' ? ' active' : ''}`}>
          {/* Registrador DIN 1/4 */}
          <div className="gateway-card">
            <div className="gw-left">
              <div className="gw-icon">
                <svg viewBox="0 0 64 64" fill="none" width="64" height="64">
                  <rect x="8" y="8" width="48" height="48" rx="3" stroke="#C0271A" strokeWidth="1.5" opacity="0.5"/>
                  <rect x="14" y="14" width="36" height="22" rx="1" fill="rgba(192,39,26,0.08)" stroke="#C0271A" strokeWidth="1"/>
                  <text x="32" y="24" fill="#C0271A" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.7">23.4°C  78%  0.12g</text>
                  <rect x="14" y="40" width="7" height="12" rx="1" fill="rgba(192,39,26,0.2)" stroke="#C0271A" strokeWidth="1"/>
                  <rect x="23" y="40" width="7" height="12" rx="1" fill="rgba(192,39,26,0.15)" stroke="#C0271A" strokeWidth="1"/>
                  <rect x="32" y="40" width="7" height="12" rx="1" fill="rgba(192,39,26,0.12)" stroke="#C0271A" strokeWidth="1"/>
                  <rect x="41" y="40" width="7" height="12" rx="1" stroke="#C0271A" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.5"/>
                  <circle cx="54" cy="22" r="3" fill="#C0271A" opacity="0.8"/>
                  <circle cx="54" cy="30" r="3" fill="rgba(192,39,26,0.3)"/>
                </svg>
              </div>
              <div className="gw-num">CTRL — 01</div>
              <div className="gw-name">Registrador<br/>DIN 1/4</div>
              <div className="gw-sub">Datalogger Industrial Modular</div>
              <div className="gw-desc">Registrador de proceso en formato DIN 1/4 con arquitectura modular de tarjetas intercambiables. Combina hasta 4 tarjetas de señales de campo con 1 tarjeta de comunicación, todo en un equipo compacto con pantalla integrada.</div>
            </div>
            <div className="gw-right">
              {[
                ['Tarjetas', 'Hasta 4 tarjetas de señales de campo (4–20 mA, RTD, TC, digital) + 1 tarjeta de comunicación'],
                ['Memoria', '32 GB para datalogger — registro continuo de todas las variables'],
                ['Pantalla', 'Display integrado para visualización local de variables y alarmas'],
                ['Formato', 'DIN 1/4 — montaje en panel de control o tablero eléctrico'],
                ['Comm.', 'Modbus RTU / TCP, Ethernet, RS-485 según tarjeta instalada'],
              ].map(([label, val]) => (
                <div key={label} className="gw-spec">
                  <span className="gw-spec-label">{label}</span>
                  <span className="gw-spec-val">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gateway Modbus bidi */}
          <div className="gateway-card" style={{ marginTop: 2 }}>
            <div className="gw-left">
              <div className="gw-icon">
                <svg viewBox="0 0 64 64" fill="none" width="64" height="64">
                  <rect x="20" y="14" width="24" height="36" rx="2" stroke="#C0271A" strokeWidth="1.5" opacity="0.7"/>
                  <line x1="6" y1="27" x2="20" y2="27" stroke="#C0271A" strokeWidth="1.5" opacity="0.7"/>
                  <path d="M10 23 L6 27 L10 31" stroke="#C0271A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                  <line x1="44" y1="37" x2="58" y2="37" stroke="#C0271A" strokeWidth="1.5" opacity="0.8"/>
                  <path d="M54 33 L58 37 L54 41" stroke="#C0271A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
                  <line x1="6" y1="37" x2="20" y2="37" stroke="#C0271A" strokeWidth="1" opacity="0.4" strokeDasharray="2,2"/>
                  <line x1="44" y1="27" x2="58" y2="27" stroke="#C0271A" strokeWidth="1" opacity="0.4" strokeDasharray="2,2"/>
                  <circle cx="28" cy="22" r="2.5" fill="#C0271A" opacity="0.9"/>
                  <circle cx="36" cy="22" r="2.5" fill="rgba(192,39,26,0.35)"/>
                </svg>
              </div>
              <div className="gw-num">CTRL — 02</div>
              <div className="gw-name">Gateway Modbus<br/>TCP ↔ RTU</div>
              <div className="gw-sub">Conversión Bidireccional de Protocolo</div>
              <div className="gw-desc">Conversor bidireccional entre Modbus TCP (Ethernet) y Modbus RTU (RS-232/RS-485). Funciona en ambas direcciones. Ideal para integración de sistemas heredados con SCADA modernos.</div>
            </div>
            <div className="gw-right">
              {[
                ['Protocolo', 'Modbus TCP/IP ↔ Modbus RTU (RS-232 / RS-485) — conversión bidireccional'],
                ['Uso', 'SCADA, HMI, sistemas de supervisión — maestro TCP a esclavos RTU y viceversa'],
                ['Compatible', 'PLCs, variadores, medidores y cualquier dispositivo Modbus RTU / TCP'],
                ['Instalación', 'Montaje en riel DIN, configuración vía web browser'],
              ].map(([label, val]) => (
                <div key={label} className="gw-spec">
                  <span className="gw-spec-label">{label}</span>
                  <span className="gw-spec-val">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
