import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const DigitBlock = ({ value, label, minWidth }: { value: any; label: string; minWidth: string }) => {
    const rounded = useTransform(value, (latest) => Math.round(latest));
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: minWidth, margin: '0 5px' }}>
            <motion.span style={{ fontVariantNumeric: 'tabular-nums', fontSize: '2rem', fontWeight: '900', textAlign: 'left', width: '100%' }}>
                {rounded}
            </motion.span>
            <span style={{ fontSize: '0.8rem', marginTop: '2px', opacity: 0.9, textTransform: 'uppercase' }}>{label}</span>
        </div>
    );
};

export const AnniversaryCounter = ({ totalImages, progress, onSkip }: { totalImages: number, progress: number, onSkip: (index: number) => void }) => {
    const years = useMotionValue(0);
    const months = useMotionValue(0);
    const days = useMotionValue(0);
    const hours = useMotionValue(0);
    const minutes = useMotionValue(0);

    useEffect(() => {
        const targetYears = 20;
        const timePerImage = 6.6; // 1.6s (off) + 5s (on)
        const animationDuration = totalImages * timePerImage;

        const controls = animate(0, 1, {
            duration: animationDuration,
            onUpdate: (latest) => {
                years.set(latest * targetYears);
                months.set(latest * targetYears * 12);
                days.set(latest * targetYears * 365.25);
                hours.set(latest * targetYears * 365.25 * 24);
                minutes.set(latest * targetYears * 365.25 * 24 * 60);
            },
        });

        return () => controls.stop();
    }, [totalImages, years, months, days, hours, minutes]);

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, x / rect.width));
        const newIndex = Math.floor(percentage * totalImages);
        onSkip(newIndex);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                zIndex: 50,
                pointerEvents: 'auto',
                textShadow: '0 0 10px rgba(0,0,0,0.8)',
                background: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: '10px 20px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
        >
            <div 
                onClick={handleProgressClick}
                style={{ width: '1000px', height: '8px', background: '#333', borderRadius: '4px', marginBottom: '10px', overflow: 'hidden', cursor: 'pointer' }}
            >
                {/* Прогресс-бар все еще обновляется от прокрутки для визуальной обратной связи */}
                <div style={{ width: `${progress * 100}%`, height: '100%', background: '#ff69b4', transition: 'width 0.1s linear' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <DigitBlock value={years} label="ЛЕТ" minWidth="100px" />
                <DigitBlock value={months} label="МЕС" minWidth="120px" />
                <DigitBlock value={days} label="ДНЕЙ" minWidth="140px" />
                <DigitBlock value={hours} label="ЧАС" minWidth="160px" />
                <DigitBlock value={minutes} label="МИН" minWidth="180px" />
            </div>
        </motion.div>
    );
};
