import type React from "react";
import styles from "./css/Projects.module.css";
import breakpoints from "../../constants/breakpoints";
import { useEffect, useState } from "react";

const projects = [
    {
        name: "Cambista",
        img: "/src/assets/banners/cambista.png",
        description: "Plataforma digital para el cambio de divisas de forma rápida y segura.",
        link: "https://evatechno.com/en/cambista-modulo-asistente-de-acreditacion/"
    },
    {
        name: "Boxie",
        img: "/src/assets/banners/boxie.png",
        description: "Aplicación innovadora para la gestión de almacenamiento inteligente.",
        link: "https://evatechno.com/en/boxie/"
    },
    {
        name: "EVA Chip",
        img: "/src/assets/banners/eva-chip.png",
        description: "Proyecto de tecnología que integra un chip de identificación y seguridad.",
        link: "https://evatechno.com/en/eva-chip/"
    },
    {
        name: "Diseños de Sitios Web - UNSL",
        img: "/src/assets/banners/disenio-de-sitios-web.png",
        description: "Colección de diseños web desarrollados para la Universidad Nacional de San Luis.",
        link: "http://dweb.dirinfo.unsl.edu.ar/"
    }
];

const Projects: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = screenWidth < breakpoints.SM;

    return (
        <div id="projects" className={styles.projects}>
            <h2 className={styles.title}>Proyectos</h2>
            <div className={isMobile ? styles.gridMobile : styles.gridDesktop}>
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <div className={styles.banner}>
                            <img src={project.img} alt={project.name} />
                        </div>
                        <div className={styles.info}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
