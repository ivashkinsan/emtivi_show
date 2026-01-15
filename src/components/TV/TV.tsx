import React from "react"; 
import styles from "./TV.module.css";
import Background from "../Background/Background.tsx";
import Logo from "../Logo/Logo.tsx";
import Menu from '../Menu/Menu.tsx';
import SoundWaveAnimation from "../SoundWaveAnimation/SoundWaveAnimation.tsx";
import LogogLabel from "../Logo/LogoLabel.tsx";
import Persons from "../Persons/Persons.tsx"; // Import Persons component

const PageContent = ({ page }) => {
    // A simple placeholder for page content
    const pageStyle = {
        color: 'white',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '2rem',
        marginTop: '20px',
        zIndex: 10 // Ensure it's above background elements
    };

    const defaultPageContentStyle = {
        ...pageStyle,
        fontSize: '2rem',
        textAlign: 'center',
    };

    switch (page) {
        case "HOME":
            return <div style={defaultPageContentStyle}>Добро пожаловать на канал EMTIVI!</div>;
        case "FOTO":
            return <div style={defaultPageContentStyle}>Фотогалерея скоро будет здесь.</div>;
        case "INFO":
            return <div style={defaultPageContentStyle}>Информация о проекте.</div>;
        case "LIST":
            return <div style={defaultPageContentStyle}>Список передач.</div>;
        case "MUSIC":
            return <div style={defaultPageContentStyle}>Музыкальный канал.</div>;
        case "PERSONE":
            return <Persons />; // Render Persons component
        case "PHONE":
            return <div style={defaultPageContentStyle}>Свяжитесь с нами!</div>;
        case "VIDEO":
            return <div style={defaultPageContentStyle}>Видеоархив.</div>;
        default:
            return <div style={defaultPageContentStyle}>Страница не найдена.</div>;
    }
};

const TV =() =>{
    const [page, setPage] = React.useState("HOME");

    const handlerPage = (inputPage)=>{
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