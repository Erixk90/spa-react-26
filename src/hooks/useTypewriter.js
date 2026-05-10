import { useState, useEffect, useRef } from 'react';

export default function useTypewriter(texts) {
  const [display, setDisplay] = useState('');
  const state = useRef({ idx: 0, char: 0, deleting: false });

  useEffect(() => {
    let timeout;
    function tick() {
      const { idx, char, deleting } = state.current;
      const current = texts[idx];
      if (!deleting) {
        const next = char + 1;
        setDisplay(current.slice(0, next));
        state.current.char = next;
        if (next === current.length) {
          state.current.deleting = true;
          timeout = setTimeout(tick, 1800);
        } else {
          timeout = setTimeout(tick, 80);
        }
      } else {
        const next = char - 1;
        setDisplay(current.slice(0, next));
        state.current.char = next;
        if (next === 0) {
          state.current.deleting = false;
          state.current.idx = (idx + 1) % texts.length;
        }
        timeout = setTimeout(tick, 50);
      }
    }
    tick();
    return () => clearTimeout(timeout);
  }, []);

  return display;
}