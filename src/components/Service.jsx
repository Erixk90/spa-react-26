import Reveal from './Reveal';
import { SERVICES } from '../data';

export default function Services() {
  return (
    <section id="servicios">
      <div className="section-wrap">
        <Reveal><div className="section-tag">Lo que ofrezco</div></Reveal>
        <Reveal>
          <h2>Soluciones digitales <span className="grad-text">completas</span></h2>
        </Reveal>
        <Reveal>
          <p className="section-desc">
            Todo lo que tu negocio necesita para brillar en internet y generar más ventas.
          </p>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-tag">{s.tag}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}