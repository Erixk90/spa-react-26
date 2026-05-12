import Reveal from './Reveal';
import { PLANS, wa } from '../data';

export default function Pricing() {
  return (
    <section id="precios">
      <div className="section-wrap">
        <Reveal>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Inversión
          </div>
        </Reveal>
        <Reveal>
          <h2 style={{ textAlign: 'center' }}>
            Planes claros, <span className="grad-text">sin sorpresas</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center' }}>
            Precios pensados para el empresario moderno que quiere crecer.
          </p>
        </Reveal>

        <div className="pricing-grid">
          {PLANS.map((p, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className={`pricing-card ${p.featured ? 'featured' : ''}`}>
                {p.featured && <div className="featured-badge">Popular</div>}
                <div className="plan-name">{p.name}</div>
                <div className={`plan-price ${p.featured ? 'grad' : ''}`}>
                  <span className="currency">$</span>
                  {p.price}
                </div>
                <div className="plan-period">{p.period}</div>
                <ul className="plan-features">
                  {p.features.map((f, j) => (
                    <li key={j}>
                      <span className="check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={wa(p.msg)}
                  target="_blank"
                  rel="noreferrer"
                  className={`plan-btn ${p.btnStyle}`}
                >
                  {p.btnLabel}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}