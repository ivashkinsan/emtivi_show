import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DigitBlock = ({ value, label, minWidth }: { value: number | string; label: string; minWidth: string }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: minWidth, margin: '0 5px' }}>
        <span style={{ fontVariantNumeric: 'tabular-nums', fontSize: '2rem', fontWeight: '900', textAlign: 'left', width: '100%' }}>{String(value)}</span>
        <span style={{ fontSize: '0.8rem', marginTop: '2px', opacity: 0.9, textTransform: 'uppercase' }}>{label}</span>
    </div>
);

export const AnniversaryCounter = ({ totalImages, progress, onSkip }: { totalImages: number, progress: number, onSkip: (index: number) => void }) => {
    const [time, setTime] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0 });

    useEffect(() => {
        const targetYears = 20;
        // Накопительный расчет на основе прогресса
        const totalMinutes = progress * (targetYears * 365.25 * 24 * 60);
        const totalHours = progress * (targetYears * 365.25 * 24);
        const totalDays = progress * (targetYears * 365.25);
        const totalMonths = progress * (targetYears * 12);
        const totalYears = progress * targetYears;
        
        setTime({
            years: Math.floor(totalYears),
            months: Math.floor(totalMonths),
            days: Math.floor(totalDays),
            hours: Math.floor(totalHours),
            minutes: Math.floor(totalMinutes),
        });
    }, [progress]);

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
                background: 'rgba(0,0,0,0.5)',
                padding: '10px 20px',
                borderRadius: '20px'
            }}
        >
            {/* Прогресс-бар с кликом */}
            <div 
                onClick={handleProgressClick}
                style={{ width: '1000px', height: '8px', background: '#333', borderRadius: '4px', marginBottom: '10px', overflow: 'hidden', cursor: 'pointer' }}
            >
                <div style={{ width: `${progress * 100}%`, height: '100%', background: '#ff69b4', transition: 'width 0.1s linear' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <DigitBlock value={time.years} label="ЛЕТ" minWidth="100px" />
                <DigitBlock value={time.months} label="МЕС" minWidth="120px" />
                <DigitBlock value={time.days} label="ДНЕЙ" minWidth="140px" />
                <DigitBlock value={time.hours} label="ЧАС" minWidth="160px" />
                <DigitBlock value={time.minutes} label="МИН" minWidth="180px" />
            </div>
        </motion.div>
    );
};
