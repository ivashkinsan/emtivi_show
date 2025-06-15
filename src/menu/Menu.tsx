import React from "react";
import "./menu.css";

import { svgIcons } from "../menu/svg/IconsAll";

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
        <div className="menu">{allIcons}</div>
    );
};

const MenuButton = ({ name, IconComponent, page, handlerPage }) => {
    const [hover, setHover] = React.useState(false);
    
    return (
        <div 
            className="menu_button"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => handlerPage(name)}
        >   
            <IconComponent className="menu-icon" color={hover || page === name ? "white" : "#A0A0A0"} hover={hover || page === name}/>
            <div className={`menu_button_background ${hover || page === name ? "menu_button_back_hover" : ""}`}></div>
        </div>
    );
};

export default Menu;