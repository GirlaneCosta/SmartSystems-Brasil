import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Avatar from "../assets/favicon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <a href="#inicio">
            <img src={Avatar} alt="Logo Smart systems" />
          </a>
          <h2>Smart Systems</h2>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes color="#003325" size={24} /> : <FaBars color="#003325" size={24} />}
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a className="link" href="#inicio">
              Inicio
            </a>
          </li>
          <li>
            <a className="link" href="#produtos">
              Produtos
            </a>
          </li>
          <li>
            <a className="link" href="#servicos">
              Serviços
            </a>
          </li>
          <li>
            <a className="link" href="#instalacoesgaleria">
              Instalações
            </a>
          </li>
          <li>
            <a className="link" href="#contato">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
