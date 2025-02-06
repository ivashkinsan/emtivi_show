import React, { useRef, useEffect } from 'react';

const Logo = () => {
    const canvasRef1 = useRef<HTMLCanvasElement>(null);
    const canvasRef2 = useRef<HTMLCanvasElement>(null);
    const canvasRef3 = useRef<HTMLCanvasElement>(null);
    const canvasRef4 = useRef<HTMLCanvasElement>(null);
    const canvasRef5 = useRef<HTMLCanvasElement>(null);
    const canvasRef6 = useRef<HTMLCanvasElement>(null);

    const draw_1 = (context: CanvasRenderingContext2D, count: number) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.fillStyle = 'grey';
        context.fillRect(0, 0, 164, 39);
        context.fillRect(0, 64, 164, 39);
        context.fillRect(0, 128, 164, 39);
    };

    const draw_2 = (context: CanvasRenderingContext2D, count: number) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.fillStyle = 'grey';
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(39, 0);
        context.lineTo(106, 85);
        context.lineTo(174, 0);
        context.lineTo(213, 0);
        context.lineTo(213, 164);
        context.lineTo(174, 164);
        context.lineTo(174, 61);
        context.lineTo(106, 146);
        context.lineTo(39, 61);
        context.lineTo(39, 164);
        context.lineTo(0, 164);
        context.lineTo(0, 0);
        context.fill();
    };

    const draw_3 = (context: CanvasRenderingContext2D, count: number) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.fillStyle = 'grey';
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(164, 0);
        context.lineTo(164, 39);
        context.lineTo(102, 39);
        context.lineTo(102, 164);
        context.lineTo(63, 164);
        context.lineTo(63, 39);
        context.lineTo(0, 39);
        context.lineTo(0, 0);
        context.fill();
    };

    const draw_4 = (context: CanvasRenderingContext2D, count: number) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.fillStyle = 'grey';
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(82, 164);
        context.lineTo(0, 164);
        context.lineTo(0, 0);
        context.fill();
    };

    const draw_5 = (context: CanvasRenderingContext2D, count: number) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.fillStyle = 'grey';
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(42, 0);
        context.lineTo(101, 119);
        context.lineTo(158, 0);
        context.lineTo(200, 0);
        context.lineTo(123, 164);
        context.lineTo(78, 164);
        context.lineTo(0, 0);
        context.fill();
    };

    const draw_6 = (context: CanvasRenderingContext2D, count: number) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.fillStyle = 'grey';
        context.beginPath();
        context.beginPath();
        context.moveTo(82, 0);
        context.lineTo(82, 164);
        context.lineTo(0, 164);
        context.lineTo(82, 0);
        context.fill();
    };

    useEffect(() => {
        const canvas1 = canvasRef1.current;
        const canvas2 = canvasRef2.current;
        const canvas3 = canvasRef3.current;
        const canvas4 = canvasRef4.current;
        const canvas5 = canvasRef5.current;
        const canvas6 = canvasRef6.current;

        if (canvas1) {
            const context1 = canvas1.getContext('2d');
            if (context1) {
                draw_1(context1, 0);
            }
        }

        if (canvas2) {
            const context2 = canvas2.getContext('2d');
            if (context2) {
                draw_2(context2, 0);
            }
        }

        if (canvas3) {
            const context3 = canvas3.getContext('2d');
            if (context3) {
                draw_3(context3, 0);
            }
        }

        if (canvas4) {
            const context4 = canvas4.getContext('2d');
            if (context4) {
                draw_4(context4, 0);
            }
        }
        if (canvas5) {
            const context5 = canvas5.getContext('2d');
            if (context5) {
                draw_5(context5, 0);
            }
        }
        if (canvas6) {
            const context6 = canvas6.getContext('2d');
            if (context6) {
                draw_6(context6, 0);
            }
        }
    }, []);

    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <canvas style={{margin: '0 15px'}} ref={canvasRef1} className="logoElem" width="164" height="164" />
            <canvas style={{margin: '0 15px'}} ref={canvasRef2} className="logoElem" width="213" height="164" />
            <canvas style={{margin: '0 15px'}} ref={canvasRef3} className="logoElem" width="164" height="164" />
            <canvas style={{margin: '0 -35px 0 15px'}} ref={canvasRef4} className="logoElem" width="82" height="164" />
            <canvas style={{margin: '0 0'}} ref={canvasRef5} className="logoElem" width="200" height="164" />
            <canvas style={{margin: '0 15px 0 -35px'}} ref={canvasRef6} className="logoElem" width="82" height="164" />
        </div>
    );
};

export default Logo;