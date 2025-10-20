import type React from "react";
import styles from "./css/AboutMe.module.css";

const AboutMe: React.FC = () => {
    return (
        <div id="aboutMe" className={`${styles.aboutMe} ${styles.desktop}`}>
            <img
                className={styles.pictureDesktop}
                src="/src/assets/photos/aboutme-picture-1.png"
                alt="About me"
            />
            <div className={styles.aboutMeBio}>
                <h2 className={styles.aboutMeDesktopTitle}>
                    Hola <span className={styles.emoji}>👋🏻</span> Soy{" "}
                    <span className={styles.name}>Juan Ignacio Giusiano</span>
                </h2>
                <p className={styles.aboutMeDesktopDescription}>
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
