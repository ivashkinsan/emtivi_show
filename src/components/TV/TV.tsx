import React from "react";
import styles from "./TV.module.css";
import Background from "../Background/Background.tsx";
import Logo from "../Logo/Logo.tsx";
import Menu from '../Menu/Menu.tsx';
import SoundWaveAnimation from "../SoundWaveAnimation/SoundWaveAnimation.tsx";
import LogogLabel from "../Logo/LogoLabel.tsx";
import Persons from "../Persons/Persons.tsx"; // Import Persons component

const PageContent = ({ page }: { page: string }) => {
    // A simple placeholder for page content
    const pageStyle: React.CSSProperties = {
        color: 'white',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '2rem',
        marginTop: '20px',
        zIndex: 10, // Ensure it's above background elements
        textAlign: 'center',
    };

    switch (page) {
        case "HOME":
            return <div style={pageStyle}>Добро пожаловать на канал EMTIVI!</div>;
        case "FOTO":
            return <div style={pageStyle}>Фотогалерея скоро будет здесь.</div>;
        case "INFO":
            return <div style={pageStyle}>Информация о проекте.</div>;
        case "LIST":
            return <div style={pageStyle}>Список передач.</div>;
        case "MUSIC":
            return <div style={pageStyle}>Музыкальный канал.</div>;
        case "PERSONE":
            return <Persons />; // Render Persons component
        case "PHONE":
            return <div style={pageStyle}>Свяжитесь с нами!</div>;
        case "VIDEO":
            return <div style={pageStyle}>Видеоархив.</div>;
        default:
            return <div style={pageStyle}>Страница не найдена.</div>;
    }
};

const TV =() =>{
    const [page, setPage] = React.useState("HOME");

    const handlerPage = (inputPage: string)=>{
        if (page === inputPage) return; // Prevent re-render if already on the same page
        setPage(inputPage);
    }

    return (   
        <div className={styles.homeTvBorder}>
            <Background />
            <SoundWaveAnimation heightWaves={200}/>
            <div className={styles.logoContainerWrapper}>
                <Logo />
                <LogogLabel />
            </div>
            {/* The key={page} prop is crucial. It tells React to re-mount the component when the page changes, which re-triggers the CSS animation. */}
            <div key={page} className={`${styles.pageContentContainer} ${styles.channelTransition}`}>
                <PageContent page={page} />
            </div>
            <Menu page={page} handlerPage={handlerPage}/>
        </div>
    )
}

export default TV;
