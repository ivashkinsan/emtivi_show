import React from 'react';
import styles from './MusicianCard.module.css';
import { GlassCard } from '../GlassCard';
import Avatar from '../../atoms/Avatar/Avatar';
import Button from '../../atoms/Button/Button';

// --- Icons (temporary) ---
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const VkIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.162 18.994c.609 0 .92-.284.92-.917V15.23c0-.58.21-.854.837-.962h.43c.52 0 .764-.24.764-.72v-2.45c0-.422-.182-.633-.547-.633h-1.42c-.592 0-.888-.24-.888-.72V7.48c0-.42.21-.63.633-.63h2.134c.48 0 .692-.21.692-.633V4.083c0-.421-.21-.633-.633-.633h-2.91c-1.443 0-2.315.692-2.315 2.07v3.21c0 .48-.21.72-.693.72H9.37c-.48 0-.692.21-.692.633v2.51c0 .42.21.63.692.63h1.36c.547 0 .82.24.82.72v3.02c0 1.05-.346 1.48-1.74 1.48A10.15 10.15 0 0 1 3 13.628c-1.358-2.133-1.68-4.32-1.68-5.77C1.32 5.12 2.893 3 6.137 3c1.74 0 2.91.692 3.52 1.74a.82.82 0 0 0 .75.38h.345c.42 0 .633-.153.75-.44C12.137 3.63 13.248 3 14.93 3c3.09 0 4.742 2.05 4.742 4.685 0 1.9-.347 3.82-1.74 4.81-.347.24-.347.45 0 .66 1.422.9 2.133 2.37 2.133 4.02 0 2.22-1.56 3.84-4.685 3.84h-2.22z"/>
    </svg>
);

// --- Types ---
export interface MusicianCardProps {
  name: string;
  instrument: string;
  description: string;
  photo?: string;
  socials?: {
    instagram?: string;
    vk?: string;
  };
  className?: string;
}

// --- Component ---
export const MusicianCard: React.FC<MusicianCardProps> = React.memo(({
  name,
  instrument,
  description,
  photo,
  socials,
  className = '',
}) => {
  return (
    <GlassCard as="article" glow="purple" variant="md" className={`${styles.card} ${className}`}>
      
      <div className={styles.photoContainer}>
        <Avatar src={photo} fallback={name} size="xl" className={styles.avatar} />
        <div className={styles.photoOverlay}>
          <span className={styles.instrument}>{instrument}</span>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        
        {socials && (socials.instagram || socials.vk) && (
          <div className={styles.socials}>
            {socials.instagram && (
              <Button href={socials.instagram} target="_blank" rel="noopener noreferrer" variant="icon" size="sm" aria-label="Instagram">
                <InstagramIcon />
              </Button>
            )}
            {socials.vk && (
              <Button href={socials.vk} target="_blank" rel="noopener noreferrer" variant="icon" size="sm" aria-label="VK">
                <VkIcon />
              </Button>
            )}
          </div>
        )}
      </div>
    </GlassCard>
  );
});
