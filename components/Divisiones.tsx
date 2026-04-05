export default function Divisiones() {
  return (
    <section id="divisiones" className="sec">
      <div className="sec-inner">
        <div className="div-header reveal">
          <div>
            <div className="sec-label">Portafolio</div>
            <h2 className="sec-title">Nuestras <em>Divisiones</em></h2>
          </div>
          <p className="sec-intro">Dos líneas de producto complementarias para cubrir la instrumentación y el control de tu proceso.</p>
        </div>
        <div className="divisions-grid">
          {/* DIV 01 */}
          <div className="div-card reveal">
            <div className="div-icon">
              <svg viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="24" stroke="#C0271A" strokeWidth="1.5" opacity="0.3"/>
                <path d="M26 14 Q38 20 38 32 Q38 44 26 44 Q14 44 14 32 Q14 20 26 14Z" stroke="#C0271A" strokeWidth="1.5" fill="none" opacity="0.7"/>
                <path d="M18 26 Q22 20 26 20 Q30 20 34 26" stroke="#C0271A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M14 30 Q20 18 26 18 Q32 18 38 30" stroke="#C0271A" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5"/>
                <circle cx="26" cy="34" r="3" fill="#C0271A"/>
              </svg>
            </div>
            <div className="div-num">DIV — 01</div>
            <div className="div-name">Rockoff Instruments</div>
            <div className="div-sub">Instrumentación LoRa inalámbrica</div>
            <div className="div-desc">Transmisores y sensores de campo con comunicación LoRa de largo alcance. Ideales para entornos donde el cableado es técnicamente imposible o económicamente inviable.</div>
            <div className="div-products">
              {[
                ['Transmisor de Temperatura', 'LoRa · IP67'],
                ['Transmisor de Nivel', 'LoRa · Batería'],
                ['Sensor de Vibraciones Triaxial', 'LoRa · Predictivo'],
                ['Gateway LoRa', 'Concentrador'],
              ].map(([name, badge]) => (
                <div key={name} className="div-prod">
                  {name} <span className="div-prod-badge">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DIV 02 */}
          <div className="div-card reveal">
            <div className="div-icon">
              <svg viewBox="0 0 52 52" fill="none">
                <rect x="8" y="14" width="36" height="24" rx="2" stroke="#C0271A" strokeWidth="1.5" opacity="0.5"/>
                <rect x="12" y="18" width="14" height="10" rx="1" fill="rgba(192,39,26,0.12)" stroke="#C0271A" strokeWidth="1"/>
                <line x1="8" y1="26" x2="2" y2="26" stroke="#C0271A" strokeWidth="1.5" opacity="0.7"/>
                <line x1="8" y1="22" x2="2" y2="22" stroke="#C0271A" strokeWidth="1.5" opacity="0.5"/>
                <line x1="44" y1="26" x2="50" y2="26" stroke="#C0271A" strokeWidth="2"/>
                <circle cx="44" cy="34" r="3" fill="rgba(192,39,26,0.2)" stroke="#C0271A" strokeWidth="1.5"/>
                <circle cx="36" cy="34" r="3" fill="rgba(192,39,26,0.12)" stroke="#C0271A" strokeWidth="1" opacity="0.5"/>
              </svg>
            </div>
            <div className="div-num">DIV — 02</div>
            <div className="div-name">Rockoff Controls</div>
            <div className="div-sub">Registro, control y comunicaciones</div>
            <div className="div-desc">Equipos de registro de datos y conversión de protocolos para integrar instrumentación de campo con sistemas modernos de supervisión SCADA, HMI y dataloggers industriales.</div>
            <div className="div-products">
              {[
                ['Registrador DIN 1/4', '4 tarjetas · 32 GB'],
                ['Gateway Modbus TCP ↔ RTU', 'Bidireccional'],
              ].map(([name, badge]) => (
                <div key={name} className="div-prod">
                  {name} <span className="div-prod-badge">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
