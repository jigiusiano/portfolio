import React from "react";
import styles from "./css/Header.module.css";

const Header: React.FC = () => {
    return (
        <header id={styles.header}>
            <nav id={styles.nav}>
                <div>
                    <a className={styles.navLink} href="/">
                        <img id={styles.mainLogo} src="/src/assets/logos/main-logo.svg" />
                    </a>
                    <ol>
                        <li>
                            <a className={styles.navLink} href="#aboutMe" title="About me">
                                <img src="/src/assets/icons/aboutme.svg" />
                            </a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#" title="Skills">
                                <img src="/src/assets/icons/skills.svg" />
                            </a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#" title="Projects">
                                <img src="/src/assets/icons/projects.svg" />
                            </a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#" title="Contact">
                                <img src="/src/assets/icons/contact.svg" />
                            </a>
                        </li>
                    </ol>
                </div>
                <div className={styles.switchContainer}>
                    <label className={styles.switch}>
                        <input type="checkbox" />
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </nav>
        </header>
    );
}

export default Header;