import { useRef, useEffect } from "react";
import styles from "./Logo.module.css";

const Logo3D_CSS = () => {
  const canvasRef1 = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);
  const canvasRef3 = useRef<HTMLCanvasElement>(null);
  const canvasRef4 = useRef<HTMLCanvasElement>(null);
  const canvasRef5 = useRef<HTMLCanvasElement>(null);
  const canvasRef6 = useRef<HTMLCanvasElement>(null);

  // Фигура 1: Три горизонтальные полосы
  const draw_1 = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    // Создаем глубину через несколько слоев
    const layers = [
      { offset: 12, opacity: 0.05 },
      { offset: 9, opacity: 0.1 },
      { offset: 6, opacity: 0.2 },
      { offset: 3, opacity: 0.4 },
      { offset: 0, opacity: 1 },
    ];

    layers.forEach(({ offset, opacity }) => {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.fillRect(offset, offset, 164, 39);
      context.fillRect(offset, 64 + offset, 164, 39);
      context.fillRect(offset, 128 + offset, 164, 39);
    });
  };

  // Фигура 2: Шестиугольник (сложная форма)
  const draw_2 = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    const drawShape = (offset: number, opacity: number) => {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.beginPath();
      context.moveTo(0 + offset, 0 + offset);
      context.lineTo(39 + offset, 0 + offset);
      context.lineTo(106 + offset, 85 + offset);
      context.lineTo(174 + offset, 0 + offset);
      context.lineTo(213 + offset, 0 + offset);
      context.lineTo(213 + offset, 164 + offset);
      context.lineTo(174 + offset, 164 + offset);
      context.lineTo(174 + offset, 61 + offset);
      context.lineTo(106 + offset, 146 + offset);
      context.lineTo(39 + offset, 61 + offset);
      context.lineTo(39 + offset, 164 + offset);
      context.lineTo(0 + offset, 164 + offset);
      context.fill();
    };

    drawShape(14, 0.05);
    drawShape(10, 0.1);
    drawShape(7, 0.2);
    drawShape(3, 0.4);
    drawShape(0, 1);
  };

  // Фигура 3: Буква П
  const draw_3 = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    const drawShape = (offset: number, opacity: number) => {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.beginPath();
      context.moveTo(0 + offset, 0 + offset);
      context.lineTo(164 + offset, 0 + offset);
      context.lineTo(164 + offset, 39 + offset);
      context.lineTo(102 + offset, 39 + offset);
      context.lineTo(102 + offset, 164 + offset);
      context.lineTo(63 + offset, 164 + offset);
      context.lineTo(63 + offset, 39 + offset);
      context.lineTo(0 + offset, 39 + offset);
      context.fill();
    };

    drawShape(14, 0.05);
    drawShape(10, 0.1);
    drawShape(7, 0.2);
    drawShape(3, 0.4);
    drawShape(0, 1);
  };

  // Фигура 4: Треугольник
  const draw_4 = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    const drawShape = (offset: number, opacity: number) => {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.beginPath();
      context.moveTo(0 + offset, 0 + offset);
      context.lineTo(82 + offset, 164 + offset);
      context.lineTo(0 + offset, 164 + offset);
      context.fill();
    };

    drawShape(14, 0.05);
    drawShape(10, 0.1);
    drawShape(7, 0.2);
    drawShape(3, 0.4);
    drawShape(0, 1);
  };

  // Фигура 5: Сложная фигура
  const draw_5 = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    const drawShape = (offset: number, opacity: number) => {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.beginPath();
      context.moveTo(0 + offset, 0 + offset);
      context.lineTo(42 + offset, 0 + offset);
      context.lineTo(101 + offset, 119 + offset);
      context.lineTo(158 + offset, 0 + offset);
      context.lineTo(200 + offset, 0 + offset);
      context.lineTo(123 + offset, 164 + offset);
      context.lineTo(78 + offset, 164 + offset);
      context.fill();
    };

    drawShape(14, 0.05);
    drawShape(10, 0.1);
    drawShape(7, 0.2);
    drawShape(3, 0.4);
    drawShape(0, 1);
  };

  // Фигура 6: Треугольник
  const draw_6 = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    const drawShape = (offset: number, opacity: number) => {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.beginPath();
      context.moveTo(82 + offset, 0 + offset);
      context.lineTo(82 + offset, 164 + offset);
      context.lineTo(0 + offset, 164 + offset);
      context.fill();
    };

    drawShape(14, 0.05);
    drawShape(10, 0.1);
    drawShape(7, 0.2);
    drawShape(3, 0.4);
    drawShape(0, 1);
  };

  useEffect(() => {
    const canvas1 = canvasRef1.current;
    const canvas2 = canvasRef2.current;
    const canvas3 = canvasRef3.current;
    const canvas4 = canvasRef4.current;
    const canvas5 = canvasRef5.current;
    const canvas6 = canvasRef6.current;

    if (canvas1) {
      const context1 = canvas1.getContext("2d");
      if (context1) draw_1(context1);
    }

    if (canvas2) {
      const context2 = canvas2.getContext("2d");
      if (context2) draw_2(context2);
    }

    if (canvas3) {
      const context3 = canvas3.getContext("2d");
      if (context3) draw_3(context3);
    }

    if (canvas4) {
      const context4 = canvas4.getContext("2d");
      if (context4) draw_4(context4);
    }

    if (canvas5) {
      const context5 = canvas5.getContext("2d");
      if (context5) draw_5(context5);
    }

    if (canvas6) {
      const context6 = canvas6.getContext("2d");
      if (context6) draw_6(context6);
    }
  }, []);

  return (
    <div className={styles.logo_container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          gap: "10px",
          perspective: "1200px",
          background: "#0a0a1a",
          borderRadius: "12px",
          minHeight: "300px",
        }}
      >
        {/* Каждый элемент имеет свою глубину через translateZ */}
        <div
          style={{
            transform: "translateZ(20px)",
            transformStyle: "preserve-3d",
          }}
        >
          <canvas
            ref={canvasRef1}
            width="164"
            height="164"
            style={{
              display: "block",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
            }}
          />
        </div>

        <div
          style={{
            transform: "translateZ(40px)",
            transformStyle: "preserve-3d",
          }}
        >
          <canvas
            ref={canvasRef2}
            width="213"
            height="164"
            style={{
              display: "block",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
            }}
          />
        </div>

        <div
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
        >
          <canvas
            ref={canvasRef3}
            width="164"
            height="164"
            style={{
              display: "block",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
            }}
          />
        </div>

        <div
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
        >
          <canvas
            ref={canvasRef4}
            width="82"
            height="164"
            style={{
              display: "block",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
            }}
          />
        </div>

        <div
          style={{
            transform: "translateZ(15px)",
            transformStyle: "preserve-3d",
          }}
        >
          <canvas
            ref={canvasRef5}
            width="200"
            height="164"
            style={{
              display: "block",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
            }}
          />
        </div>

        <div
          style={{
            transform: "translateZ(35px)",
            transformStyle: "preserve-3d",
          }}
        >
          <canvas
            ref={canvasRef6}
            width="82"
            height="164"
            style={{
              display: "block",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Logo3D_CSS;
