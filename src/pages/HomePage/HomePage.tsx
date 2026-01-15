import React from "react";
import styles from "./HomePage.module.css"
import TV from "../../components/TV/TV.tsx"; // Updated path
import SoundWaveAnimation from "../../components/SoundWaveAnimation/SoundWaveAnimation.tsx"; // Updated path
// import Background from "../background_animate/background.tsx"; // This was commented out and its component deleted, so it's irrelevant

const HomePage =() =>{
    return <section className={styles.home}>
        <TV />
        {/* <SoundWaveAnimation heightWaves={100}/> */}
        {/* <SoundWaveAnimation heightWaves={500}/> */}
        {/* <SoundWaveAnimation heightWaves={100}/> */}
    </section>
}
export default HomePage;