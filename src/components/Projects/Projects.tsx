import type React from "react";
import styles from "./css/Projects.module.css";
import breakpoints from "../../constants/breakpoints";
import { useEffect, useState } from "react";

const projects = [
    {
        name: "Cambista",
        img: "/src/assets/banners/cambista.png",
        description: "Cambista es una aplicación asociada al Sistema Eva, que permite la acreditación de máquinas tragamonedas, ruletas electrónicas y Eva Cash.",
        link: "https://evatechno.com/en/cambista-modulo-asistente-de-acreditacion/"
    },
    {
        name: "Boxie",
        img: "/src/assets/banners/boxie.png",
        description: "Boxie es una app de beneficios que acumula y canjea puntos, para premiar a los clientes de forma segura y personalizada.",
        link: "https://evatechno.com/en/boxie/"
    },
    {
        name: "EVA Chip",
        img: "/src/assets/banners/eva-chip.png",
        description: "EVA Chip es una app que registra todas las operaciones realizadas en los juegos de mesa con dinero en efectivo en el casino y cuenta la cantidad de fichas utilizadas en cada mesa de juego.",
        link: "https://evatechno.com/en/eva-chip/"
    },
    {
        name: "Diseños de Sitios Web - UNSL",
        img: "/src/assets/banners/disenio-de-sitios-web.png",
        description: "Landing page de la materia \"Diseños de Sitios Web\" de la Universidad Nacional de San Luis.",
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
