import React from "react";
import './css/Header.css';

const Header: React.FunctionComponent = () => {
    return (
        <header id="header">
            <nav id="nav">
                <div>
                    <a className="nav-link" href="#">
                        <img id="main-logo" src="/src/assets/logos/main-logo.svg" />
                    </a>
                    <ol>
                        <li>
                            <a className="nav-link" href="#" title="About me">
                                <img src="/src/assets/icons/aboutme.svg" />
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#" title="Skills">
                                <img src="/src/assets/icons/skills.svg" />
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#" title="Projects">
                                <img src="/src/assets/icons/projects.svg" />
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#" title="Contact">
                                <img src="/src/assets/icons/contact.svg" />
                            </a>
                        </li>
                    </ol>
                </div>
                <div className="switch-container">
                    <label className="switch">
                        <input type="checkbox" id="toggleSwitch" />
                        <span className="slider"></span>
                    </label>
                </div>
            </nav>
        </header>
    );
}

export default Header;