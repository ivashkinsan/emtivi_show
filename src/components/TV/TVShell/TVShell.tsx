import React from "react";
import styles from "./TVShell.module.css";
import { AmbientBackground } from "./AmbientBackground";
import { NoiseLayer } from "./NoiseLayer";

export interface TVShellProps {
  children: React.ReactNode;
  className?: string;
  ambientColor?: "purple" | "gold" | "blue" | "red" | "white";
}

export const TVShell: React.FC<TVShellProps> = ({
  children,
  className = "",
  ambientColor = "purple",
}) => {
  const shellClassName = [styles.shell, className].filter(Boolean).join(" ");

  return (
    <div className={shellClassName}>
      <AmbientBackground color={ambientColor} />
      <NoiseLayer />
      <div className={styles.frame}>
        <div className={styles.bezel}>
          <div className={styles.screen}>{children}</div>
        </div>
      </div>
    </div>
  );
};
