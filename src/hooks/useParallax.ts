import { useState, useEffect } from 'react';

export const useParallax = (intensity: number = 20) => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX - window.innerWidth / 2) / (window.innerWidth / 2) * intensity;
            const y = (clientY - window.innerHeight / 2) / (window.innerHeight / 2) * intensity;
            setOffset({ x, y });
        };

        const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
            if (e.gamma !== null && e.beta !== null) {
                const x = (e.gamma / 45) * intensity;
                const y = (e.beta / 45) * intensity;
                setOffset({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('deviceorientation', handleDeviceOrientation);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('deviceorientation', handleDeviceOrientation);
        };
    }, [intensity]);

    return offset;
};
