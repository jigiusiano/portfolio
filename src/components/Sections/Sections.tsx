import type { PropsWithChildren } from "react";
import type React from "react";
import styles from "./css/Sections.module.css";

const Sections: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <section className={styles.section}>
            {children}
        </section>
    );
}

export default Sections;