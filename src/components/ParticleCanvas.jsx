import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let W, H;
    const N = 80;
    const mouse = { x: -9999, y: -9999 };
    const parts = [];

    class P {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 1.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.a = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
      }
    }

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX; mouse.y = e.clientY;
    });
    for (let i = 0; i < N; i++) parts.push(new P());

    let raf;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = parts[i].x - parts[j].x;
          const dy = parts[i].y - parts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,200,255,${0.12 * (1 - d / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(parts[i].x, parts[i].y);
            ctx.lineTo(parts[j].x, parts[j].y);
            ctx.stroke();
          }
        }
        const mdx = parts[i].x - mouse.x;
        const mdy = parts[i].y - mouse.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 180) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(61,108,250,${0.3 * (1 - md / 180)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(parts[i].x, parts[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      parts.forEach((p) => {
        p.update();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,200,255,${p.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="bg-canvas" ref={ref} />;
}