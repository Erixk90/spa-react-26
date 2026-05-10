import { useState, useEffect, useRef } from 'react';
import { CHAT_MSGS } from '../data';

const INITIAL_MSG = {
  type: 'bot',
  text: '¡Hola! 👋 Bienvenido a <strong>Tu Negocio</strong>. Soy tu asistente virtual. ¿En qué puedo ayudarte?',
  time: '10:32',
};

export default function ChatMockup() {
  const [messages, setMessages] = useState([INITIAL_MSG]);
  const bodyRef = useRef(null);
  const triggered = useRef(false);
  const idxRef = useRef(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !triggered.current) {
          triggered.current = true;
          schedule();
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (bodyRef.current) obs.observe(bodyRef.current);
    return () => obs.disconnect();
  }, []);

  function schedule() {
    const i = idxRef.current;
    if (i >= CHAT_MSGS.length) return;
    setTimeout(() => {
      setMessages((prev) => [...prev, CHAT_MSGS[i]]);
      idxRef.current = i + 1;
      schedule();
    }, 1800);
  }

  useEffect(() => {
    if (bodyRef.current)
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-mockup">
      <div className="chat-header">
        <div className="chat-avatar">🤖</div>
        <div>
          <div className="chat-name">Bot Asistente</div>
          <div className="chat-status">● En línea</div>
        </div>
      </div>
      <div className="chat-body" ref={bodyRef}>
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.type}`}>
            <span dangerouslySetInnerHTML={{ __html: m.text }} />
            <div className="bubble-time">{m.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}