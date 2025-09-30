import type React from "react";
import styles from "./css/Skills.module.css";
import breakpoints from "../../constants/breakpoints";
import { useEffect, useState } from "react";

import jsLogo from "../../assets/logos/js.png";
import tsLogo from "../../assets/logos/ts.svg";
import reactLogo from "../../assets/logos/react.svg";
import rnLogo from "../../assets/logos/react.svg";
import nodeLogo from "../../assets/logos/nodejs.svg";
import pgLogo from "../../assets/logos/postgresql.svg";
import gitLogo from "../../assets/logos/git.svg";
import gitlabLogo from "../../assets/logos/gitlab.svg";
import dockerLogo from "../../assets/logos/docker.png";

const technologies = [
    { name: "JavaScript", logo: jsLogo },
    { name: "TypeScript", logo: tsLogo },
    { name: "ReactJS", logo: reactLogo },
    { name: "React Native", logo: rnLogo },
    { name: "NodeJS", logo: nodeLogo },
    { name: "PostgreSQL", logo: pgLogo },
    { name: "Git", logo: gitLogo },
    { name: "Gitlab", logo: gitlabLogo },
    { name: "Docker", logo: dockerLogo },
];

const Skills: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = screenWidth < breakpoints.SM;

    return (
        <div id="skills" className={styles.skills}>
            <h2 className={styles.title}>Tecnologías</h2>
            <div className={isMobile ? styles.gridMobile : styles.grid}>
                {technologies.map((tech) => (
                    <div key={tech.name} className={styles.techCard}>
                        <img src={tech.logo} alt={tech.name} className={styles.techLogo} />
                        <span className={styles.techName}>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
