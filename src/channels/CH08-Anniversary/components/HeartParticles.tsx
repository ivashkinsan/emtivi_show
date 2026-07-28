import { motion } from 'framer-motion';

export const HeartParticles = () => {
    const particles = [...Array(50)];
    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', zIndex: 40, pointerEvents: 'none' }}>
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                    animate={{
                        x: (Math.random() - 0.5) * 600,
                        y: (Math.random() - 0.5) * 600,
                        scale: [0, 1.5, 0],
                        opacity: [1, 0]
                    }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{ position: 'absolute', fontSize: '20px' }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
};
