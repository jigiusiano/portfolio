import type React from "react";
import Header from "./components/Header/Header";
import styles from "./css/App.module.css";
import { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      window.dispatchEvent(new CustomEvent("externalMouseMove", { detail: { offsetX: e.clientX, offsetY: e.clientY } }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default App;