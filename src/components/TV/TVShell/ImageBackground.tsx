import React from "react";
import styles from "./ImageBackground.module.css";
import backgroundImage from "../../../img/emtivi_background_1.jpeg";

export const ImageBackground: React.FC<{ isActive: boolean }> = ({
  isActive,
}) => {
  if (!isActive) return null;
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={backgroundImage} alt="Background" />
      <div className={styles.overlay} />
    </div>
  );
};
