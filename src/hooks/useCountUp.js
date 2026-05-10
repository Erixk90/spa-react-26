import { useState, useEffect } from 'react';

export default function useCountUp(target, suffix, trigger) {
  const [val, setVal] = useState('0' + suffix);

  useEffect(() => {
    if (!trigger) return;
    let cur = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(Math.round(cur) + suffix);
      if (cur >= target) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, [trigger]);

  return val;
}