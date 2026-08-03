import { useState, useEffect } from 'react';

// Расширяем интерфейс Window для работы с iOS 13+ API
declare global {
    interface Window {
        DeviceOrientationEvent: any;
    }
}

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
                // gamma - лево/право, beta - вперед/назад
                const x = (e.gamma / 45) * intensity;
                const y = (e.beta / 45) * intensity;
                setOffset({ x, y });
            }
        };

        const requestPermission = async () => {
            if (typeof DeviceOrientationEvent !== 'undefined' && 
                typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
                try {
                    const permission = await (DeviceOrientationEvent as any).requestPermission();
                    if (permission === 'granted') {
                        window.addEventListener('deviceorientation', handleDeviceOrientation);
                    }
                } catch (error) {
                    console.error("Permission for device orientation denied:", error);
                }
            } else {
                // Для устройств, не требующих разрешения
                window.addEventListener('deviceorientation', handleDeviceOrientation);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        // Запускаем запрос разрешения при клике или просто инициализируем
        // В iOS требуется взаимодействие пользователя для запроса
        const handleInteraction = () => {
            requestPermission();
            window.removeEventListener('click', handleInteraction);
        };
        window.addEventListener('click', handleInteraction);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('deviceorientation', handleDeviceOrientation);
            window.removeEventListener('click', handleInteraction);
        };
    }, [intensity]);

    return offset;
};
