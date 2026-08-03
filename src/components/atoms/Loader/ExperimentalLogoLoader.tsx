import React, { useState, useEffect } from 'react';
import styles from './Loader.module.css';

export const ExperimentalLogoLoader: React.FC = () => {
  const [isShrinking, setIsShrinking] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShrinking(true);
    }, 3000); // Показываем 3 секунды
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.experimentalLoaderContainer} ${isShrinking ? styles.shrinking : ''}`}>
      <svg viewBox="0 0 1000 164" xmlns="http://www.w3.org/2000/svg" className={styles.experimentalLogo}>
        <defs>
          <clipPath id="fillClip">
            <rect x="0" y="0" width="0" height="164">
              <animate attributeName="width" from="0" to="1000" dur="2.5s" fill="freeze" />
            </rect>
          </clipPath>
        </defs>

        {/* Контур логотипа (серый) */}
        <g fill="#28263D">
            <path d="M0 0 h164 v39 h-164 z M0 64 h164 v39 h-164 z M0 128 h164 v39 h-164 z" />
            <path transform="translate(194, 0)" d="M0 0 L 39 0 L 106 85 L 174 0 L 213 0 L 213 164 L 174 164 L 174 61 L 106 146 L 39 61 L 39 164 L 0 164 Z" />
            <path transform="translate(437, 0)" d="M0 0 L 164 0 L 164 39 L 102 39 L 102 164 L 63 164 L 63 39 L 0 39 Z" />
            <path transform="translate(631, 0)" d="M0 0 L 82 164 L 0 164 Z" />
            <path transform="translate(713, 0)" d="M0 0 L 42 0 L 101 119 L 158 0 L 200 0 L 123 164 L 78 164 Z" />
            <path transform="translate(913, 0)" d="M82 0 L 0 164 L 82 164 Z" />
        </g>

        {/* Заливка логотипа (цветная) */}
        <g fill="#8B5CF6" clipPath="url(#fillClip)">
            <path d="M0 0 h164 v39 h-164 z M0 64 h164 v39 h-164 z M0 128 h164 v39 h-164 z" />
            <path transform="translate(194, 0)" d="M0 0 L 39 0 L 106 85 L 174 0 L 213 0 L 213 164 L 174 164 L 174 61 L 106 146 L 39 61 L 39 164 L 0 164 Z" />
            <path transform="translate(437, 0)" d="M0 0 L 164 0 L 164 39 L 102 39 L 102 164 L 63 164 L 63 39 L 0 39 Z" />
            <path transform="translate(631, 0)" d="M0 0 L 82 164 L 0 164 Z" />
            <path transform="translate(713, 0)" d="M0 0 L 42 0 L 101 119 L 158 0 L 200 0 L 123 164 L 78 164 Z" />
            <path transform="translate(913, 0)" d="M82 0 L 0 164 L 82 164 Z" />
        </g>
      </svg>
    </div>
  );
};
