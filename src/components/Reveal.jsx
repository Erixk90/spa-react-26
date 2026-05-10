import useReveal from '../hooks/useReveal';

export default function Reveal({ children, delay = 0, className = '' }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${delay ? `reveal-delay-${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  );
}