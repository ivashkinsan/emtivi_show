import React from "react";
import "./menu.css";
const svgIcons = {
    "HOME": require("../menu/svg/HOME.svg").default,
    "INFO": require("../menu/svg/INFO.svg").default,
    "PERSONE": require("../menu/svg/PERSONE.svg").default,
    "LIST": require("../menu/svg/LIST.svg").default,
    "FOTO": require("../menu/svg/FOTO.svg").default,
    // "VIDEO": require("../menu/svg/VIDEO.svg").default,
    "PHONE": require("../menu/svg/PHONE.svg").default,
}
const selector = require("../menu/svg/SELECTOR.svg").default;
const Menu = ({page, handlerPage}) =>{
    const allIcons = Object.entries(svgIcons).map(([name, icon]) =>{
        return  <MenuButton 
        key={`menu_button_${name}`} 
        name={name} icon={icon} 
        page={page}
        handlerPage={handlerPage}
        />
    })
    return (
        <div className="menu">{allIcons}</div>
    )
}

const MenuButton = ({name, icon, page, handlerPage}) =>{
    const [hover, setHover] = React.useState(false);
    return (
        <div className="menu_button"
        onMouseEnter={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onClick={()=>handlerPage(name)}
        >   
            <img key={name} src={icon} alt={name}/>
            <div className={`menu_button_background ${hover || page === name ? "menu_button_back_hover" : ""}`}></div>
        </div>
    )
}

export default Menu;