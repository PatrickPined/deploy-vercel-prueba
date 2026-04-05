const posts = [
  {
    cat: 'LoRa', date: 'Mar 2025', read: '8 min lectura',
    title: '¿Qué es LoRa y por qué revoluciona la instrumentación industrial?',
    excerpt: 'Explicamos cómo la tecnología LoRa permite transmitir datos de sensores hasta 15 km sin cables, con consumo mínimo de batería y penetración en estructuras metálicas.',
    tags: ['LoRa', 'IoT Industrial'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="20" stroke="#C0271A" strokeWidth="1.5"/>
        <path d="M30 40 Q35 30 40 30 Q45 30 50 40" stroke="#C0271A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M24 44 Q32 26 40 26 Q48 26 56 44" stroke="#C0271A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>
        <circle cx="40" cy="44" r="4" fill="#C0271A" opacity="0.8"/>
      </svg>
    ),
  },
  {
    cat: 'Caso de Uso', date: 'Feb 2025', read: '6 min lectura',
    title: 'Monitoreo de temperatura en hornos de fundición sin parar la producción',
    excerpt: 'Cómo una planta metalúrgica en el norte del Perú implementó 12 transmisores LoRa Rockoff para monitorear sus hornos en tiempo real sin ningún tipo de cableado.',
    tags: ['Minería', 'Temperatura'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none">
        <rect x="20" y="24" width="40" height="32" rx="2" stroke="#C0271A" strokeWidth="1.5" opacity="0.6"/>
        <line x1="20" y1="34" x2="60" y2="34" stroke="#C0271A" strokeWidth="1" opacity="0.4"/>
        <path d="M30 44 L36 38 L44 48 L50 42 L56 44" stroke="#C0271A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    cat: 'Tutorial', date: 'Ene 2025', read: '10 min lectura',
    title: 'Guía de integración: Gateway Modbus con WinCC, Ignition y AVEVA',
    excerpt: 'Tutorial paso a paso para integrar el Gateway Modbus TCP ↔ RTU Rockoff con los principales sistemas SCADA del mercado: WinCC, Ignition y AVEVA.',
    tags: ['Modbus', 'SCADA'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none">
        <rect x="16" y="28" width="22" height="24" rx="1" stroke="#C0271A" strokeWidth="1.5" opacity="0.6"/>
        <line x1="38" y1="40" x2="48" y2="40" stroke="#C0271A" strokeWidth="2"/>
        <circle cx="56" cy="40" r="12" stroke="#C0271A" strokeWidth="1.5" opacity="0.7"/>
        <text x="56" y="44" fill="#C0271A" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.8">TCP</text>
      </svg>
    ),
  },
]

export default function Blog() {
  return (
    <section id="blog" className="sec">
      <div className="sec-inner">
        <div className="blog-header reveal">
          <div>
            <div className="sec-label">Conocimiento</div>
            <h2 className="sec-title">Blog <em>Técnico</em></h2>
          </div>
          <a href="#" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--red)', display: 'flex', alignItems: 'center', gap: 5 }}>
            Ver todos los artículos →
          </a>
        </div>
        <div className="blog-grid">
          {posts.map((p) => (
            <div key={p.title} className="blog-card reveal">
              <div className="blog-card-img">
                <div className="blog-card-img-pattern" />
                {p.icon}
                <div className="blog-cat">{p.cat}</div>
              </div>
              <div className="blog-card-body">
                <div className="blog-meta">
                  <span>{p.date}</span>
                  <div className="blog-meta-dot" />
                  <span>{p.read}</span>
                </div>
                <div className="blog-title">{p.title}</div>
                <p className="blog-excerpt">{p.excerpt}</p>
              </div>
              <div className="blog-footer">
                <div className="blog-tags">
                  {p.tags.map(t => <span key={t} className="blog-tag">{t}</span>)}
                </div>
                <button className="blog-read">Leer →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
