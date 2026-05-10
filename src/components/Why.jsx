import Reveal from './Reveal';
import { WHY_ITEMS } from '../data';

export default function Why() {
  return (
    <section id="por-que">
      <div className="section-wrap">
        <div className="why-inner">
          <div>
            <Reveal><div className="section-tag">¿Por qué yo?</div></Reveal>
            <Reveal>
              <h2>Tecnología de <span className="grad-text">punta</span> para negocios locales</h2>
            </Reveal>
            <div className="why-list" style={{ marginTop: 40 }}>
              {WHY_ITEMS.map((w, i) => (
                <Reveal key={i} delay={i + 1}>
                  <div className="why-item">
                    <div className="why-ico">{w.icon}</div>
                    <div>
                      <h4>{w.title}</h4>
                      <p>{w.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="why-visual">
              <div className="why-card-float wf1">
                <div className="wf-label">⚡ Velocidad de carga</div>
                <div className="wf-val">98/100</div>
                <div className="wf-sub">PageSpeed Insights</div>
              </div>
              <div className="why-card-float wf2">
                <div className="wf-label">🤖 Stack tecnológico</div>
                <div className="tech-stack-wrap">
                  {['HTML5', 'CSS3', 'JS', 'React', 'WA API'].map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
              <div className="why-card-float wf3">
                <div className="wf-label">📊 Conversión promedio</div>
                <div className="wf-val">+40%</div>
                <div className="wf-sub">vs sitios tradicionales</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}