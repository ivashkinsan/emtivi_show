import styles from './AboutBackground.module.css';

export const AboutBackground = () => (
  <div className={styles.container}>
    <svg className={styles.svg} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 0.5 }} />
        </linearGradient>
      </defs>
      
      {/* Complex Labyrinth */}
      <g className={styles.labyrinth}>
        <path d="M100 100 H 400 V 300 H 200 V 500 H 600 V 200" stroke="url(#glow)" strokeWidth="2" fill="none" />
        <path d="M900 900 H 600 V 700 H 800 V 500 H 400 V 800" stroke="url(#glow)" strokeWidth="2" fill="none" />
        <path d="M150 150 V 400 H 300 V 600 H 100" stroke="url(#glow)" strokeWidth="2" fill="none" />
        <path d="M850 150 H 600 V 300 H 750 V 100" stroke="url(#glow)" strokeWidth="2" fill="none" />
        <path d="M200 700 H 300 V 900 H 500 V 600" stroke="url(#glow)" strokeWidth="2" fill="none" />
        <path d="M500 100 V 200 H 700 V 400" stroke="url(#glow)" strokeWidth="2" fill="none" />
        {/* Added paths */}
        <path d="M300 200 H 500 V 400 H 700" stroke="url(#glow)" strokeWidth="2" fill="none" />
        <path d="M50 500 H 200 V 800 H 100" stroke="url(#glow)" strokeWidth="2" fill="none" />
        <path d="M700 800 H 900 V 600 H 800" stroke="url(#glow)" strokeWidth="2" fill="none" />
        <path d="M100 800 V 900 H 200" stroke="url(#glow)" strokeWidth="2" fill="none" />
        
        {/* Original nodes */}
        <circle cx="100" cy="100" r="6" fill="#F5F7FA" />
        <circle cx="600" cy="500" r="6" fill="#F5F7FA" />
        <circle cx="800" cy="500" r="6" fill="#F5F7FA" />
        <circle cx="400" cy="800" r="6" fill="#F5F7FA" />
        <circle cx="500" cy="100" r="6" fill="#F5F7FA" />
        <circle cx="750" cy="100" r="6" fill="#F5F7FA" />
        {/* Added more nodes */}
        <circle cx="300" cy="200" r="4" fill="#F5F7FA" />
        <circle cx="700" cy="400" r="4" fill="#F5F7FA" />
        <circle cx="900" cy="600" r="4" fill="#F5F7FA" />
        <circle cx="200" cy="900" r="4" fill="#F5F7FA" />
        <circle cx="500" cy="600" r="4" fill="#F5F7FA" />
        <circle cx="150" cy="350" r="4" fill="#F5F7FA" />
        <circle cx="850" cy="200" r="4" fill="#F5F7FA" />
        <circle cx="400" cy="400" r="5" fill="#3B82F6" />
        <circle cx="600" cy="800" r="5" fill="#8B5CF6" />
      </g>
    </svg>
  </div>
);
