import type React from "react";
import styles from "./css/Contact.module.css";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "TU_SERVICE_ID",
                "TU_TEMPLATE_ID",
                e.currentTarget,
                "TU_PUBLIC_KEY"
            )
            .then(
                () => {
                    e.currentTarget.reset();
                },
                () => {
                }
            );
    };

    return (
        <div id="contact" className={styles.contact}>
            <h2 className={styles.title}>Contacto</h2>

            <form className={styles.form} onSubmit={sendEmail}>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Tu nombre"
                    required
                    className={styles.input}
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Tu email"
                    required
                    className={styles.input}
                />
                <textarea
                    name="message"
                    placeholder="Tu mensaje"
                    required
                    className={styles.textarea}
                />
                <button type="submit" className={styles.button}>
                    <FaEnvelope /> Enviar Email
                </button>
            </form>

            <div className={styles.socials}>
                <a
                    href="https://wa.me/+5492665033003"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialBtn}
                >
                    <FaWhatsapp /> WhatsApp
                </a>
                <a
                    href="https://t.me/juan_ignacio_giusiano"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialBtn}
                >
                    <FaTelegramPlane /> Telegram
                </a>
            </div>
        </div>
    );
};

export default Contact;
