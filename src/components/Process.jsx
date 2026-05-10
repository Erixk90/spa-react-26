import Reveal from './Reveal';
import { STEPS } from '../data';

export default function Process() {
  return (
    <section id="proceso">
      <div className="section-wrap">
        <Reveal><div className="section-tag">¿Cómo funciona?</div></Reveal>
        <Reveal>
          <h2>De cero a online en <span className="grad-text">7 días</span></h2>
        </Reveal>

        <div className="process-grid">
          {STEPS.map((s, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="process-step">
                <div className="step-num-wrap">
                  <span className="step-num">{s.num}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}