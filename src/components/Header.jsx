import { useState } from "react";
import { PROFILE } from "../data";

export default function Header() {
  const [first, last] = PROFILE.name.split(" ");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="logo" href="#home" onClick={closeMenu}>
          {first}
          <b>{last}</b>
        </a>

        <nav
          id="mobile-navigation"
          className={`header-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Navegação principal"
        >
          <a href="#home" onClick={closeMenu}>
            Início
          </a>
          <a href="#projetos" onClick={closeMenu}>
            Projetos
          </a>
          <a href="#tecnologias" onClick={closeMenu}>
            Tecnologias
          </a>
          <a href="#sobre" onClick={closeMenu}>
            Sobre mim 
          </a>
          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>
        
        
        </nav>

        <a className="pill header-contact" href="#contato">
          Vamos conversar <span>➞</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
