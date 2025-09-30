import React, { useEffect, useState } from "react";
import styles from "./css/Header.module.css";
import breakpoints from "../../constants/breakpoints";

interface SidebarProps {
    showSidebar: boolean;
    handleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const { showSidebar, handleSidebar } = props;

    return (
        <nav className={`${styles.verticalNav} ${showSidebar ? styles.closeVerticalNav : ''}`}>
            <div id={styles.sidebarTop}>
                <ul id={styles.verticalNavList}>
                    <li id={styles.iconCloseItem}>
                        <img id={styles.iconClose} src="/src/assets/icons/close.svg" onClick={handleSidebar} />
                    </li>
                    <li>
                        <a className={styles.navLink} href="#aboutMe" title="Sobre mi">
                            Sobre mi
                        </a>
                    </li>
                    <li>
                        <a className={styles.navLink} href="#skills" title="Tecnologías">
                            Tecnologías
                        </a>
                    </li>
                    <li>
                        <a className={styles.navLink} href="#projects" title="Proyectos">
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a className={styles.navLink} href="#contact" title="Contacto">
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
            <div id={styles.sidebarBottom}>
                <div className={styles.switchContainer}>
                    <label className={styles.switch}>
                        <input type="checkbox" />
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </div>
        </nav>
    );
}

const Header: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [renderSidebar, setRenderSidebar] = useState<boolean>(false);
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    const handleSidebar = () => {
        setShowSidebar((prev) => !prev);
    }

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenWidth < breakpoints.MD) {
            setRenderSidebar(true);
        } else {
            setRenderSidebar(false)
        }
    }, [screenWidth]);

    return (
        <>
            <header id={styles.header}>
                <nav id={styles.horizontalNav}>
                    <a id={styles.headerLeftSide} href="/">
                        <img id={styles.mainLogo} src="/src/assets/logos/main-logo.svg" />
                        <p id={styles.logoFullname}>Juan Ignacio Giusiano</p>
                    </a>
                    <div id={styles.headerRightSide}>
                        {
                            !renderSidebar && (
                                <>
                                    <ul id={styles.navList}>
                                        <li>
                                            <a className={styles.navLink} href="#aboutMe" title="Sobre mi">
                                                Sobre mi
                                            </a>
                                        </li>
                                        <li>
                                            <a className={styles.navLink} href="#skills" title="Tecnologías">
                                                Tecnologías
                                            </a>
                                        </li>
                                        <li>
                                            <a className={styles.navLink} href="#projects" title="Proyectos">
                                                Proyectos
                                            </a>
                                        </li>
                                        <li>
                                            <a className={styles.navLink} href="#contact" title="Contacto">
                                                Contacto
                                            </a>
                                        </li>
                                    </ul>
                                    <div className={styles.switchContainer}>
                                        <label className={styles.switch}>
                                            <input type="checkbox" />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>
                                </>
                            )
                        }
                        {
                            renderSidebar &&
                            <img id={styles.iconMenu} src="/src/assets/icons/menu.svg" onClick={handleSidebar} />
                        }
                    </div>
                </nav>
            </header>
            {
                renderSidebar && (
                    <Sidebar showSidebar={showSidebar} handleSidebar={handleSidebar} />
                )
            }
        </>
    );
}

export default Header;