import LogoSVG from './LogoSVG'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        {/* Brand */}
        <div>
          <div className="footer-brand">
            <LogoSVG size={26} />
            <div className="footer-brand-name">►<span>ROCKOFF</span> AUTOMATION</div>
          </div>
          <div className="footer-tag">Engineering the Future of Industry</div>
          <p className="footer-about">
            Instrumentación industrial inalámbrica LoRa y soluciones de control para la industria peruana.
            Rockoff Instruments · Rockoff Controls. rockoffautomation.com
          </p>
        </div>

        {/* Empresa */}
        <div>
          <div className="fcol-title">Empresa</div>
          <ul className="footer-links">
            {[['#nosotros','Nosotros'],['#divisiones','Divisiones'],['#blog','Blog Técnico'],['#contacto','Contacto']].map(([href, label]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Rockoff Instruments */}
        <div>
          <div className="fcol-title">Rockoff Instruments</div>
          <ul className="footer-links">
            {['Transmisor de Temperatura','Transmisor de Nivel','Sensor de Vibraciones','Gateway LoRa'].map(p => (
              <li key={p}><a href="#productos">{p}</a></li>
            ))}
          </ul>
        </div>

        {/* Rockoff Controls */}
        <div>
          <div className="fcol-title">Rockoff Controls</div>
          <ul className="footer-links">
            {[['#controles','Registrador DIN 1/4'],['#controles','Gateway Modbus TCP ↔ RTU'],['#distribuidores','Distribuidores Perú'],['#distribuidores','Ser Distribuidor']].map(([href, label]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2025 Rockoff Automation — rockoffautomation.com</div>
        <div className="footer-legal">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
        </div>
      </div>
    </footer>
  )
}
