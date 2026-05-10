import Reveal from './Reveal';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonios">
      <div className="section-wrap">
        <Reveal>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Clientes felices
          </div>
        </Reveal>
        <Reveal>
          <h2 style={{ textAlign: 'center' }}>
            Lo que dicen <span className="grad-text">mis clientes</span>
          </h2>
        </Reveal>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="testi-card">
                <div className="stars">★★★★★</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-biz">{t.biz}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}