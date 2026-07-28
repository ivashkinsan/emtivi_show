import { motion, useTransform, MotionValue } from 'framer-motion';

const DigitBlock = ({ value, label, minWidth }: { value: MotionValue<number>; label: string; minWidth: string }) => {
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

export const AnniversaryCounter = ({ masterProgress, onSkip }: { masterProgress: MotionValue<number>, onSkip: (progress: number) => void }) => {
    const targetYears = 20;
    const years = useTransform(masterProgress, p => p * targetYears);
    const months = useTransform(masterProgress, p => p * targetYears * 12);
    const days = useTransform(masterProgress, p => p * targetYears * 365.25);
    const hours = useTransform(masterProgress, p => p * targetYears * 365.25 * 24);
    const minutes = useTransform(masterProgress, p => p * targetYears * 365.25 * 24 * 60);
    const progressBarWidth = useTransform(masterProgress, p => `${p * 100}%`);

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, x / rect.width));
        onSkip(percentage);
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
                <motion.div style={{ width: progressBarWidth, height: '100%', background: '#ff69b4' }} />
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
