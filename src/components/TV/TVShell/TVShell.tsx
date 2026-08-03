import React from "react";
import styles from "./TVShell.module.css";
import { AmbientBackground } from './AmbientBackground';
import { NoiseLayer } from './NoiseLayer';
import { ImageBackground } from './ImageBackground';
import { useParallax } from "../../../hooks/useParallax";

export interface TVShellProps {
  children: React.ReactNode;
  className?: string;
  ambientColor?: "purple" | "gold" | "blue" | "red" | "white";
  channelId: string;
}

export const TVShell: React.FC<TVShellProps> = ({
  children,
  className = "",
  ambientColor = "purple",
  channelId,
}) => {
  const shellClassName = [styles.shell, className].filter(Boolean).join(" ");
  const bgOffset = useParallax(10);

  return (
    <div className={shellClassName}>
      {channelId !== 'CH01' && (
        <>
          <AmbientBackground color={ambientColor} />
          <NoiseLayer />
        </>
      )}
      <div className={styles.frame}>
        <div className={styles.bezel}>
          <div className={styles.screen}>
            {channelId === 'CH01' && (
              <div 
                className={styles.parallaxBackground}
                style={{ transform: `translate(${bgOffset.x}px, ${bgOffset.y}px)` }}
              />
            )}
            {channelId !== 'CH01' && <ImageBackground isActive={true} />}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
