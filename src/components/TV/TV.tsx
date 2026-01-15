import React from "react"; 
import styles from "./TV.module.css";
import Background from "../Background/Background.tsx";
import Logo from "../Logo/Logo.tsx";
import Menu from '../Menu/Menu.tsx';
import SoundWaveAnimation from "../SoundWaveAnimation/SoundWaveAnimation.tsx";
import LogogLabel from "../Logo/LogoLabel.tsx";

const TV =() =>{
    const [page, setPage] = React.useState("HOME");
    const handlerPage = (inputPage)=>{
        setPage(inputPage);
    }
    return (   
        <div className={styles.homeTvBorder}>
            {/* <Background /> */}
            {/* <SoundWaveAnimation heightWaves={200}/> */}
            <Logo />
            <LogogLabel />   
            <Menu page={page} handlerPage={handlerPage}/>
        </div>
    )
}

export default TV;