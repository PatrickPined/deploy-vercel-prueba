// Industrias.tsx
export default function Industrias() {
  const items = [
    { num: '01', icon: '⛏', name: 'Minería', text: 'Temperatura en hornos, nivel en pilas de lixiviación, vibración en fajas y chancadoras. LoRa ideal para cubrir grandes extensiones sin cableado.' },
    { num: '02', icon: '🛢', name: 'Oil & Gas', text: 'Monitoreo de temperatura y nivel en tanques de almacenamiento. Gateway Modbus para integrar instrumentación de campo a salas de control.' },
    { num: '03', icon: '💧', name: 'Agua y Saneamiento', text: 'Nivel en pozos, estanques y reservorios. Sensores a batería para estaciones remotas sin energía eléctrica disponible.' },
    { num: '04', icon: '🌾', name: 'Agroindustria', text: 'Nivel en silos de granos, temperatura en cámaras de frío y vibración en equipos de proceso. Sin cableado en campo abierto.' },
    { num: '05', icon: '⚡', name: 'Energía', text: 'Temperatura en transformadores y celdas eléctricas. Vibración en generadores y turbinas. Gateway para integración con SCADA eléctrico.' },
    { num: '06', icon: '🏭', name: 'Manufactura', text: 'Monitoreo predictivo de motores y equipos rotativos. Temperatura en hornos y autoclaves. Nivel en depósitos de materia prima.' },
  ]
  return (
    <section id="industrias" className="sec">
      <div className="sec-inner">
        <div className="reveal">
          <div className="sec-label">Aplicaciones</div>
          <h2 className="sec-title">Sectores <em>que Atendemos</em></h2>
          <p className="sec-intro">Nuestros productos están diseñados para los entornos industriales más exigentes del Perú y la región.</p>
        </div>
        <div className="ind-grid">
          {items.map((item) => (
            <div key={item.num} className="ind-card reveal">
              <div className="ind-num-bg">{item.num}</div>
              <span className="ind-icon">{item.icon}</span>
              <div className="ind-name">{item.name}</div>
              <p className="ind-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
