import React from "react";
import styles from "./Menu.module.css";

import { svgIcons } from "./svg/IconsAll";

const Menu = ({ page, handlerPage }) => {
    const allIcons = Object.entries(svgIcons).map(([name, IconComponent]) => {
        return (
            <MenuButton 
                key={`menu_button_${name}`} 
                name={name} 
                IconComponent={IconComponent} 
                page={page}
                handlerPage={handlerPage}
            />
        );
    });
    
    return (
        <div className={styles.menu}>{allIcons}</div>
    );
};

const MenuButton = ({ name, IconComponent, page, handlerPage }) => {
    const [hover, setHover] = React.useState(false);
    
    return (
        <div 
            className={styles.menuButton}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => handlerPage(name)}
        >   
            <IconComponent className="menu-icon" color={hover || page === name ? "white" : "#A0A0A0"} hover={hover || page === name}/>
            <div className={`${styles.menuButtonBackground} ${hover || page === name ? styles.menuButtonBackHover : ""}`}></div>
        </div>
    );
};

export default Menu;