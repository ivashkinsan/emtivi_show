import React from "react";
import styles from "./Menu.module.css";
import { svgIcons } from "./svg/IconsAll.tsx";

const menuConfig = [
    { name: "HOME", IconComponent: svgIcons.HOME },
    { name: "FOTO", IconComponent: svgIcons.FOTO },
    { name: "INFO", IconComponent: svgIcons.INFO },
    { name: "LIST", IconComponent: svgIcons.LIST },
    { name: "MUSIC", IconComponent: svgIcons.MUSIC },
    { name: "PERSONE", IconComponent: svgIcons.PERSONE },
];

interface MenuProps {
    page: string;
    handlerPage: (page: string) => void;
}

const Menu = ({ page, handlerPage }: MenuProps) => {
    return (
        <div className={styles.menuContainer}>
            {menuConfig.map(({ name, IconComponent }) => (
                <MenuButton key={name} name={name} IconComponent={IconComponent} page={page} handlerPage={handlerPage} />
            ))}
        </div>
    );
};

interface MenuButtonProps {
    name: string;
    IconComponent: React.ElementType;
    page: string;
    handlerPage: (page: string) => void;
}

const MenuButton = ({ name, IconComponent, page, handlerPage }: MenuButtonProps) => {
    const isActive = page === name;
    return (
        <div className={styles.menuButtonWrapper} onClick={() => handlerPage(name)}>
            <div className={`${styles.icon} ${isActive ? styles.activeIcon : ''}`}>
                <IconComponent />
            </div>
            {/* Selector might be added back later if designed */}
        </div>
    );
};

export default Menu;
