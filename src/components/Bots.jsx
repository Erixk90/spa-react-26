import Reveal from './Reveal';
import ChatMockup from './ChatMockup';
import { BOT_FEATS } from '../data';

export default function Bots() {
  return (
    <section id="bots">
      <div className="section-wrap">
        <div className="bots-inner">
          <div>
            <Reveal>
              <div className="section-tag">Nueva línea de negocio</div>
            </Reveal>
            <Reveal>
              <h2>
                Bots de WhatsApp que{' '}
                <span className="grad-text">venden por ti</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="section-desc">
                Automatiza la atención al cliente, captura leads y cierra ventas
                mientras duermes. Los bots son el futuro del negocio local.
              </p>
            </Reveal>
            <Reveal>
              <div className="bots-features" style={{ marginTop: 32 }}>
                {BOT_FEATS.map((b, i) => (
                  <div key={i} className="bot-feat">
                    <div className="bot-feat-ico">{b.icon}</div>
                    <div>
                      <h4>{b.title}</h4>
                      <p>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <ChatMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}