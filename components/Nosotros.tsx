export default function Nosotros() {
  const pillars = [
    {
      icon: <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
      title: 'Tecnología LoRa',
      text: 'Hasta 15 km de alcance sin cables ni infraestructura de red adicional',
    },
    {
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
      title: 'Robustez Industrial',
      text: 'IP67, rangos extendidos de temperatura, diseñado para ambientes agresivos',
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: 'Integración Modbus',
      text: 'Compatible con cualquier SCADA, HMI o sistema de control existente',
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      title: 'Soporte Técnico',
      text: 'Atención directa a proyectos en todo el Perú con soporte técnico incluido',
    },
  ]

  return (
    <section id="nosotros" className="sec">
      <div className="sec-inner">
        <div className="nosotros-grid">
          <div className="reveal">
            <div className="sec-label">Quiénes somos</div>
            <h2 className="sec-title">Ingeniería <em>Para la Industria</em></h2>
            <div className="nosotros-body" style={{ marginTop: 20 }}>
              <p>Rockoff Automation es una empresa peruana especializada en instrumentación industrial inalámbrica y soluciones de control. Diseñamos y comercializamos hardware de alta fiabilidad para entornos industriales exigentes, donde el cableado no es una opción viable.</p>
              <p>Combinamos tecnología LoRa de largo alcance con diseño robusto para que puedas monitorear tus variables críticas desde cualquier punto de una planta, mina o campo abierto, sin necesidad de infraestructura de red ni cableado.</p>
            </div>
          </div>
          <div className="pillars reveal">
            {pillars.map((p) => (
              <div key={p.title} className="pillar">
                <div className="pillar-icon">{p.icon}</div>
                <div>
                  <div className="pillar-title">{p.title}</div>
                  <div className="pillar-text">{p.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
