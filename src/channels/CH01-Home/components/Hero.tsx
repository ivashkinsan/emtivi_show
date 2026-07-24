import React from "react";
import styles from "./Hero.module.css";
import Button from "../../../components/atoms/Button/Button";
import Logo from "../../../components/Logo/Logo";
import { YearsCounter } from "./YearsCounter";
import { Equalizer } from "./Equalizer";
import { useScrollReveal } from "../../../hooks";
export const Hero = () => {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    triggerOnce: true,
  });
  const heroClassName = `${styles.hero} ${isVisible ? styles.visible : ""}`;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={heroClassName}
    >
      <div className={styles.logo}>
        <Logo />
      </div>
      <p className={styles.slogan}>музыка | культура | технологии</p>
      <div className={styles.subheading}>
        <YearsCounter />
        <Equalizer />
      </div>

      <Button variant="hero" size="hero">
        Заказать выступление
      </Button>
    </section>
  );
};
