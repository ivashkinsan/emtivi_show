import React from "react"; 
import Background from "./background.tsx";
import Logo from "../logo/logo.tsx";
import Menu from '../menu/Menu.tsx';
import SoundWaveAnimation from "./SoundAnimation.tsx";
import LogogLabel from "../logo/LogoLabel.tsx";

const TV =() =>{
    const [page, setPage] = React.useState("HOME");
    const handlerPage = (inputPage)=>{
        setPage(inputPage);
    }
    return (   
        <div className="home_tv_border">
            {/* <Background /> */}
            {/* <SoundWaveAnimation heightWaves={200}/> */}
            {/* <Logo /> */}
            {/* <LogogLabel />   */}
            <Menu page={page} handlerPage={handlerPage}/>
        </div>
    )
}

export default TV;