'use client'

export default function Distribuidores() {
  const openModal = () => {
    document.getElementById('cotizar-modal')?.classList.add('open')
    document.body.style.overflow = 'hidden'
  }

  const cards = [
    { flag: '🇵🇪', country: 'Lima Metropolitana', region: 'Distribución directa', companies: ['Rockoff Automation — Equipo comercial directo', 'Atención de lunes a viernes'] },
    { flag: '🏔️', country: 'Interior del Perú', region: 'Envíos a todo el país', companies: ['Soporte técnico remoto incluido', 'Envíos coordinados a tu proyecto'] },
  ]

  return (
    <section id="distribuidores" className="sec">
      <div className="sec-inner">
        <div className="dist-header reveal">
          <div>
            <div className="sec-label">Red Comercial</div>
            <h2 className="sec-title">Distribuidores <em>Autorizados</em></h2>
          </div>
          <p className="sec-intro">Encuentra nuestros productos directamente a través de Rockoff Automation en Perú. Soporte técnico, atención personalizada y envíos a todo el país.</p>
        </div>

        <div className="dist-grid">
          {cards.map((c) => (
            <div key={c.country} className="dist-card reveal">
              <div className="dist-flag">{c.flag}</div>
              <div className="dist-country">{c.country}</div>
              <div className="dist-region">{c.region}</div>
              <div className="dist-companies">
                {c.companies.map((co) => (
                  <div key={co} className="dist-company">{co}</div>
                ))}
              </div>
              <div className="dist-contact">
                <button onClick={openModal}>Contactar equipo →</button>
              </div>
            </div>
          ))}
        </div>

        <div className="dist-banner reveal">
          <div>
            <div className="dist-banner-label">Red Comercial en Expansión</div>
            <div className="dist-banner-title">¿Quieres ser distribuidor<br/>Rockoff en tu región?</div>
            <div className="dist-banner-desc">Buscamos representantes comerciales con experiencia en automatización industrial para ampliar nuestra cobertura dentro del Perú.</div>
          </div>
          <button className="btn-red" onClick={openModal}>► Postular como Distribuidor</button>
        </div>
      </div>
    </section>
  )
}
