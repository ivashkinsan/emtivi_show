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
  "DSCN1755.JPG",
  "DSCN2790.JPG",
  "DSC_0028.JPG",
  "DSC_0069.JPG",
  "DSC_0661.JPG",
  "DSC_0834.jpg",
  "IMG_0042.jpg",
  "IMG_0159.jpg",
  "IMG_0160.jpg",
  "IMG_1285.jpg",
  "IMG_1668.jpg",
  "IMG_20171231_184831_1.jpg",
  "IMG_20180121_125729.jpg",
  "IMG_20180121_133058.jpg",
  "IMG_20180324_213218.jpg",
  "IMG_20180530_173050.jpg",
  "IMG_20180530_173202.jpg",
  "IMG_20180710_195155.jpg",
  "IMG_20180725_174929.jpg",
  "IMG_20180727_143907.jpg",
  "IMG_20180729_153338.jpg",
  "IMG_20180730_192108.jpg",
  "IMG_20180802_172025.jpg",
  "IMG_20180901_074417.jpg",
  "IMG_20181014_160929.jpg",
  "IMG_20181231_175317.jpg",
  "IMG_20190110_150621.jpg",
  "IMG_20190118_124028.jpg",
  "IMG_20190310_165826.jpg",
  "IMG_20190616_184556.jpg",
  "IMG_20190728_202140.jpg",
  "IMG_20190801_180051.jpg",
  "IMG_20190804_091154.jpg",
  "IMG_20190825_162212.jpg",
  "IMG_20190902_085134.jpg",
  "IMG_20190929_130032.jpg",
  "IMG_20191230_225350.jpg",
  "IMG_20191231_183941.jpg",
  "IMG_20200216_153855.jpg",
  "IMG_20200420_202102.jpg",
  "IMG_20200601_154518.jpg",
  "IMG_20200720_195424.jpg",
  "IMG_20200731_183623.jpg",
  "IMG_20210425_114225.jpg",
  "IMG_20210729_164350.jpg",
  "IMG_20210730_200338.jpg",
  "IMG_20210804_192758.jpg",
  "IMG_3738.jpg",
  "IMG_5783.jpg",
  "IMG_6862.jpg",
  "IMG_6942.jpg",
  "IMG_7144.jpg",
  "IMG_7944.jpg",
  "IMG_9059.jpg",
  "IMG_9077.jpg",
  "IMG_9113.jpg",
  "IMG_9132.jpg",
  "IMG_9158.jpg",
  "IMG_9416.jpg",
  "IMG_9452.jpg",
  "IMG_9469.jpg",
  "P1000194.JPG",
  "P1000237.JPG",
  "P_20170611_142654_BF.jpg",
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

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
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
      <audio
        ref={audioRef}
        src="/Pesnya.mp3"
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      <motion.button
        onClick={togglePlayPause}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 100,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          color: "white",
          fontSize: "1.5rem",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          padding: 0,
        }}
      >
        {isPlaying ? "⏸" : "▶"}
      </motion.button>
    </div>
  );
};
