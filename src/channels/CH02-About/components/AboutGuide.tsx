import React, { useState } from "react";
import styles from "./AboutGuide.module.css";

import img2010 from "../../../img/Cards/2010.png";
import imgSHOW from "../../../img/Cards/SHOW.png";
import imgARR from "../../../img/Cards/ARR.png";
import imgTECH from "../../../img/Cards/TECH.jpg";
import imgGEAR from "../../../img/Cards/GEAR.png";
import imgPRO from "../../../img/Cards/PRO.jpg";
import imgSOUND from "../../../img/Cards/SOUND.png";
import imgHITS from "../../../img/Cards/HITS.jpg";

const CONTENT = [
  {
    id: "A01",
    title: "2010",
    label: "Основание",
    text: "Основан в 2010 году, огромный опыт выступлений на различных концертных площадках — от небольших клубов до крупных фестивалей. За плечами группы более 500 концертов и 14 лет непрерывной творческой эволюции.",
    image: img2010,
    stat: "14+ лет",
    statLabel: "на сцене",
    tag: "С 2010 в эфире",
    glow: "gold",
  },
  {
    id: "A02",
    title: "SHOW",
    label: "Свет",
    text: "Световое шоу с автоматизированной световой партитурой, синхронизированной с музыкой в реальном времени. Каждая композиция имеет собственную световую архитектуру, превращая выступление в полноценное визуальное путешествие. Мы создаём настроение светом.",
    image: imgSHOW,
    stat: "100%",
    statLabel: "автоматизация",
    tag: "Световая партитура",
    glow: "purple",
  },
  {
    id: "A03",
    title: "ARR",
    label: "Аранжировки",
    text: "Уникальные аранжировки и переосмысление хитов. Мы не просто копируем песни — мы создаём их заново, наполняя свежим звучанием и авторским видением. Каждый трек в нашем репертуаре проходит через творческую лабораторию группы.",
    image: imgARR,
    stat: "50+",
    statLabel: "авторских версий",
    tag: "Переосмысление",
    glow: "blue",
  },
  {
    id: "A04",
    title: "TECH",
    label: "Технологии",
    text: "Передовые цифровые технологии в музыкальном обеспечении: современные процессоры эффектов, цифровые микшерные пульты, мониторинг с персональными миксами, системы автоматизации звука. Мы используем всё лучшее, что есть в индустрии.",
    image: imgTECH,
    stat: "100%",
    statLabel: "цифровой звук",
    tag: "Hi-Tech",
    glow: "purple",
  },
  {
    id: "A05",
    title: "GEAR",
    label: "Бэклайн",
    text: "Свой бэклайн и возможность работы на тихой сцене. Мы привозим с собой полный комплект оборудования для мониторинга и поддержки звука. Это позволяет нам работать даже на площадках с ограниченными техническими возможностями.",
    image: imgGEAR,
    stat: "100%",
    statLabel: "своё оборудование",
    tag: "Мобильность",
    glow: "gold",
  },
  {
    id: "A06",
    title: "PRO",
    label: "Профессионалы",
    text: "Музыканты с профессиональным музыкальным образованием и огромным опытом работы на сцене. Каждый участник группы прошёл все ступени музыкальной школы: от классического образования до современных исполнительских техник. Это команда высочайшего уровня.",
    image: imgPRO,
    stat: "5",
    statLabel: "профессионалов",
    tag: "Мастера своего дела",
    glow: "purple",
  },
  {
    id: "A07",
    title: "SOUND",
    label: "Звук",
    text: "Штатный звукорежиссер — 90% успеха звучания группы. Это человек, который знает каждый нюанс звука, каждого музыканта и каждую песню. Он создаёт идеальный баланс на сцене, превращая выступление в безупречное звуковое событие.",
    image: imgSOUND,
    stat: "90%",
    statLabel: "успеха звучания",
    tag: "Звуковой маэстро",
    glow: "blue",
  },
  {
    id: "A08",
    title: "HITS",
    label: "Репертуар",
    text: "Качественный репертуар для всех возрастов — произведения, проверенные временем. Мы играем музыку, которая знакома каждому: от золотых хитов прошлых лет до современных композиций, которые уже стали классикой. Наш сет-лист — это музыкальная машина времени.",
    image: imgHITS,
    stat: "100%",
    statLabel: "хитовый репертуар",
    tag: "Для всех поколений",
    glow: "gold",
  },
];

export const AboutGuide: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = CONTENT[activeIndex];

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        {CONTENT.map((item, index) => (
          <div
            key={index}
            className={`${styles.listItem} ${activeIndex === index ? styles.active : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <span className={styles.itemId}>{item.id}</span>
            <h3 className={styles.itemTitle}>{item.title}</h3>
          </div>
        ))}
      </div>
      <div className={styles.mainView}>
        <div className={styles.imageContainer}>
          <img
            src={activeItem.image}
            alt={activeItem.title}
            className={styles.image}
          />
        </div>
        <h2 className={styles.mainTitle}>{activeItem.title}</h2>
        <p className={styles.mainText}>{activeItem.text}</p>
      </div>
    </div>
  );
};
