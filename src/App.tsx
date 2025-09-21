//import { useState } from "react";
// import "./css/Header.css";

import Header from "./components/Header/Header";

// function Header() {
//   const [open, setOpen] = useState(false);

//   const toggleMenu = () => setOpen(!open);

//   return (
//     <header className="header">
//       <nav className="nav">
//         <div className="nav-container">
//           {/* Logo / Brand */}
//           <a href="#" className="logo">
//             <div className="logo-box">GI</div>
//             <span className="logo-text">Juan Ignacio Giusiano</span>
//           </a>

//           {/* Desktop links */}
//           <ul className="nav-links">
//             <li><a href="#about">About me</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>

//           {/* Mobile controls */}
//           <div className="nav-controls">
//             <a href="#contact" className="btn-contact">Contact</a>

//             {/* Hamburger */}
//             <button
//               onClick={toggleMenu}
//               aria-expanded={open}
//               aria-controls="mobile-menu"
//               className="hamburger"
//             >
//               {open ? (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {open && (
//           <div id="mobile-menu" className="mobile-menu">
//             <div className="mobile-container">
//               <ul className="mobile-links">
//                 <li><a href="#about" onClick={() => setOpen(false)}>About me</a></li>
//                 <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
//                 <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
//                 <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
//               </ul>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

const App = () => (
  <>
    <Header />
  </>
);

export default App;