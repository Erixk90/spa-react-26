import { useState, useEffect } from 'react';
import { wa } from '../data';

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#precios', label: 'Precios' },
  { href: '#bots', label: 'Bots WA' },
  { href: '#testimonios', label: 'Clientes' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`wp-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        Web<span>Pro</span>
      </div>

      <div className="nav-links">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>

      <a
        href={wa('Hola, quiero información sobre una página web para mi negocio')}
        target="_blank"
        rel="noreferrer"
        className="nav-cta"
      >
        💬 Cotizar Ahora
      </a>

      <button
        className="hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Menú"
      >
        <span /><span /><span />
      </button>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}