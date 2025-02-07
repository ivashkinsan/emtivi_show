import React from "react";
import "./menu.css";
const svgIcons = {
    "INFO": require("../menu/svg/INFO.svg").default,
    "FOTO": require("../menu/svg/FOTO.svg").default,
    "LIST": require("../menu/svg/LIST.svg").default,
    "MUSIC": require("../menu/svg/MUSIC.svg").default,
    "PHONE": require("../menu/svg/PHONE.svg").default,
    "VIDEO": require("../menu/svg/VIDEO.svg").default,
}
const selector = require("../menu/svg/SELECTOR.svg").default;
const Menu = () =>{
    const allIcons = Object.entries(svgIcons).map(([key, icon]) =>{
        return  <MenuButton key={key} icon={icon}/>
    })
    return (
        <div className="menu">{allIcons}</div>
    )
}

const MenuButton = ({key, icon}) =>{
    const [hover, setHover] = React.useState(false);
    return (
        <div className="menu_button"
        onMouseEnter={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        >   
            <img key={key} src={icon} alt={key}/>
            <div className={`menu_button_background ${hover ? "menu_button_back_hover" : ""}`}></div>
        </div>
    )
}

export default Menu;