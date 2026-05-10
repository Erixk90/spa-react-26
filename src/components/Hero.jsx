import { useState, useEffect, useRef } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import useCountUp from '../hooks/useCountUp';
import { TYPEWRITER_TEXTS, wa } from '../data';

function StatCounter({ target, suffix, label }) {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const val = useCountUp(target, suffix, triggered);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-num">{val}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const tw = useTypewriter(TYPEWRITER_TEXTS);

  return (
    <section id="hero">
      <div className="hero-glow" />
      <div className="hero-inner">
        <div className="hero-badge">
          <span className="dot" /> Barranquilla, Colombia
        </div>

        <h1>
          Tu negocio merece<br />
          una <span className="grad-text">presencia digital</span><br />
          que vende
        </h1>

        <p className="hero-sub">
          Creo páginas web profesionales para negocios locales: rápidas,
          modernas y con{' '}
          <span className="typewriter-wrap">
            {tw}<span className="cursor">|</span>
          </span>
        </p>

        <div className="hero-btns">
          <a
            href={wa('Hola, quiero una página web para mi negocio')}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            💬 Quiero mi página web
          </a>
          <a href="#servicios" className="btn-secondary">
            Ver servicios ↓
          </a>
        </div>

        <div className="hero-stats">
          <StatCounter target={30} suffix="+" label="Proyectos entregados" />
          <StatCounter target={7} suffix="+" label="Días de entrega" />
          <StatCounter target={100} suffix="%" label="Satisfacción" />
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-arrow" />
        Scroll
      </div>
    </section>
  );
}