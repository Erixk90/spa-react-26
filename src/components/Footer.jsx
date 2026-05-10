import { wa } from '../data';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="logo">Web<span>Pro</span></div>
        <div className="footer-links">
          <a href="#servicios">Servicios</a>
          <a href="#precios">Precios</a>
          <a href="#bots">Bots</a>
          <a href={wa('Hola')} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <div className="footer-copy">© 2025 WebPro · Barranquilla, Colombia</div>
      </div>
    </footer>
  );
}