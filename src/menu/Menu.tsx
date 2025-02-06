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
const Menu = () =>{
    const allIcons = Object.entries(svgIcons).map(([key, icon]) =>{
        return <img key={key} src={icon} alt={key}/>
    })
    return (
        <div className="menu">{allIcons}</div>
    )
}

export default Menu;