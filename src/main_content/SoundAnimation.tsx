import React, { useEffect, useRef } from 'react';

const SoundWaveAnimation = ({ heightWaves }: { heightWaves: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 1100;
    const height = heightWaves;
    const lineCount = 400;
    const step = 60;
    const amplitude = height / 2;

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < lineCount; i++) {
        const x = i * step;
        const waveHeight = Math.sin((Date.now() / 100 + i) * 0.1) * amplitude;
        const color = `hsl(${(i / lineCount) * 360}, 100%, 50%)`;

        ctx.beginPath();
        ctx.moveTo(x, height / 2 - waveHeight / 2);
        ctx.lineTo(x, height / 2 + waveHeight / 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} width={1100} height={heightWaves} />;
};

export default SoundWaveAnimation;