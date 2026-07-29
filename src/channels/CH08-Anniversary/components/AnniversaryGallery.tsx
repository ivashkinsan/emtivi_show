import { useState, useEffect, useMemo, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import styles from "../Background.module.css";
import { HeartParticles } from "./HeartParticles";
import { AnniversaryCounter } from "./AnniversaryCounter";

const images = [
  "000.jpg",
  "001.jpg",
  "002.jpg",
  "003.JPG",
  "004.JPG",
  "005.JPG",
  "006.JPG",
  "007.JPG",
  "008.jpg",
  "012.JPG",
  "013.jpg",
  "014.JPG",
  "015.jpg",
  "016.jpg",
  "017.jpg",
  "018.jpg",
  "019.jpg",
  "020.jpg",
  "021.jpg",
  "022-.JPG",
  "022.jpg",
  "023.jpg",
  "024.jpg",
  "025.jpg",
  "026.jpg",
  "027.jpg",
  "028.jpg",
  "029.jpg",
  "030.jpg",
  "031.jpg",
  "032.jpg",
  "033.jpg",
  "034.jpg",
  "035.jpg",
  "036.jpg",
  "037.jpg",
  "038.jpg",
  "039.jpg",
  "040.jpg",
  "041.jpg",
  "042.jpg",
  "043.jpg",
  "044.jpg",
  "045.jpg",
  "046.jpg",
  "047.jpg",
  "048.jpg",
  "049.jpg",
  "050-.jpg",
  "050.jpg",
  "051-.jpg",
  "051.jpg",
  "052.jpg",
  "053.jpg",
  "054.jpg",
  "055.jpg",
  "056.jpg",
  "057.jpg",
  "058.jpg",
  "059.jpg",
  "060.jpg",
  "061.jpg",
  "062.jpg",
  "063.jpg",
  "064.jpg",
  "065.jpg",
  "066.jpg",
];

const heartShape = (t: number) => {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t)
  );
  return { x, y };
};

export const AnniversaryGallery = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [bgImage, setBgImage] = useState<string | null>(null);
  const masterProgress = useMotionValue(0);

  const collageItems = useMemo(
    () =>
      images.map((img, i) => {
        const t = (i / images.length) * 2 * Math.PI;
        const { x, y } = heartShape(t);
        return {
          id: img,
          x: x * 30 + 500 - 45,
          y: y * 30 + 225 - 45,
          rotate: Math.random() * 20 - 10,
        };
      }),
    [],
  );

  useEffect(() => {
    if (selectedId) {
      setBgImage(selectedId);
    }
  }, [selectedId]);

  useEffect(() => {
    const totalDuration = 540; // 9 minutes for the whole show
    const timePerImage = totalDuration / images.length;
    const onTime = timePerImage * 0.75; // 75% of the time the image is visible

    const controls = animate(masterProgress, 1, {
      duration: totalDuration,
      ease: "linear",
    });

    const unsubscribe = masterProgress.on("change", (latest) => {
      const currentImageIndex = Math.floor(latest * images.length);
      const timeIntoCurrentImage = (latest * totalDuration) % timePerImage;

      if (timeIntoCurrentImage < onTime) {
        setSelectedId(images[currentImageIndex]);
      } else {
        setSelectedId(null);
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [masterProgress]);

  const handleSkip = (progress: number) => {
    masterProgress.set(progress);
  };

  const selectedItem = selectedId
    ? collageItems.find((item) => item.id === selectedId)
    : null;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "5rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          zIndex: 5,
          textShadow: "0 0 10px rgba(0,0,0,0.8)",
          pointerEvents: "none",
        }}
      >
        20 ЛЕТ ВМЕСТЕ
      </div>
      <AnniversaryCounter masterProgress={masterProgress} onSkip={handleSkip} />

      <div className={styles.background}>
        <AnimatePresence>
          {bgImage && (
            <motion.img
              key={bgImage}
              src={`foto_collage/${encodeURIComponent(bgImage)}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className={styles.bgImage}
              style={{ position: "absolute" }}
            />
          )}
        </AnimatePresence>
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1000px",
          height: "600px",
          zIndex: 1,
        }}
      >
        {collageItems.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "absolute",
              left: item.x,
              top: item.y,
              rotate: item.rotate,
              width: "90px",
              height: "90px",
            }}
          >
            <img
              src={`foto_collage/${encodeURIComponent(item.id)}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                border: "2px solid white",
                opacity: 0.6,
                filter: "sepia(0.3) contrast(1.1) brightness(1.1)",
              }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            layoutId={selectedItem.id}
            transition={{ type: "spring", stiffness: 100, damping: 50 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 30,
            }}
          >
            {/* Removed the background blur div */}
            <motion.img
              src={`foto_collage/${encodeURIComponent(selectedItem.id)}`}
              style={{
                position: "relative",
                zIndex: 31,
                maxWidth: "70vw",
                maxHeight: "70vh",
                objectFit: "contain",
                border: "10px solid white",
                filter: "sepia(0.3) contrast(1.1) brightness(1.1)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.0, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};