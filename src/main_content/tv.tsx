import React from "react"; 
import Logo from "../logo/logo.tsx";
import Menu from '../menu/Menu.tsx';
import SoundWaveAnimation from "./SoundAnimation.tsx";
import LogogLabel from "../logo/LogoLabel.tsx";
const TV =() =>{
    return (   
        <div className="home_tv_border">
            <SoundWaveAnimation heightWaves={200}/>
            <Logo />
            <LogogLabel />  
            <Menu />
        </div>
    )
}

export default TV;