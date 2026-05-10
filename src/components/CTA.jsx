import Reveal from './Reveal';
import { wa } from '../data';

export default function CTA() {
  return (
    <section id="cta">
      <div className="section-wrap">
        <Reveal>
          <div className="cta-box">
            <div
              className="section-tag"
              style={{ justifyContent: 'center', marginBottom: 16 }}
            >
              ¿Listo para crecer?
            </div>
            <h2>
              Hablemos hoy y{' '}
              <span className="grad-text">comencemos ya</span>
            </h2>
            <p>
              Una conversación de 10 minutos por WhatsApp es suficiente para
              entender tu negocio y decirte exactamente qué necesitas.
            </p>
            <a
              href={wa(
                'Hola, vi tu página y quiero información sobre una página web para mi negocio'
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', fontSize: '1.1rem', padding: '18px 44px' }}
            >
              💬 Escribir por WhatsApp
            </a>
            <p style={{ marginTop: 20, marginBottom: 0, fontSize: '0.8rem' }}>
              Respuesta en menos de 1 hora · Sin compromiso
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}