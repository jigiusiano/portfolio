import type React from "react";
import styles from "./css/AboutMe.module.css";
import breakpoints from "../../constants/breakpoints";
import { useEffect, useState } from "react";

const AboutMe: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = screenWidth < breakpoints.SM;

    return (
        <div id="aboutMe" className={`${styles.aboutMe} ${isMobile ? styles.mobile : styles.desktop}`}>
            {!isMobile && (
                <img
                    className={styles.pictureDesktop}
                    src="/src/assets/photos/aboutme-picture-1.jpg"
                    alt="About me"
                />
            )}
            <div className={styles.aboutMeBio}>
                <h2 className={`${isMobile ? styles.aboutMeMobileTitle : styles.aboutMeDesktopTitle}`}>
                    Hola <span className={styles.emoji}>👋🏻</span> Soy{" "}
                    <span className={styles.name}>Juan Ignacio Giusiano</span>
                </h2>
                <p className={`${isMobile ? styles.aboutMeMobileDescription : styles.aboutMeDesktopDescription}`}>
                    <span className={styles.role}>Desarrollador FullStack</span> con más de 2 años de experiencia en aplicaciones web y móviles. Con conocimientos en frontend y backend, enfocado en crear soluciones escalables y eficientes. Busco un entorno donde pueda aportar valor, asumir nuevos desafíos y continuar aprendiendo.
                </p>
                <button
                    className={styles.downloadCv}
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/src/assets/files/CV.pdf";
                        link.download = "CV.pdf";
                        link.click();
                    }}
                >
                    Descargar CV
                </button>
            </div>
        </div>
    );
};

export default AboutMe;
