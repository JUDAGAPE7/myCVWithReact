import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import "./styles/main.css";
import HomePage from "./pages/HomePage";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className="main-Container">
        <header>
          <nav className="general-Header">
            <ul className="header-Name">
              <li className="linkEndin1">
                <a
                  href="https://www.linkedin.com/in/juan-gachancipá-42284516a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-linkedin-square"></i>Juan Gachancipa
                </a>
              </li>
            </ul>

            <ul className="download">
              <li className="download-list">
                <a
                  href="/downloads/Hoja de vida.pdf"
                  download="Hoja_de_vida.pdf"
                >
                  <i className="bx bx-cloud-download"></i>Descarga CV
                </a>
              </li>
            </ul>

            <ul className="header-Content">
              <li>
                <Link to="/" onClick={closeMenu}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/aboutme" onClick={closeMenu}>
                  Acerca de Mí
                </Link>
              </li>
              <li>
                <Link to="/habilidades" onClick={closeMenu}>
                  Habilidades
                </Link>
              </li>
              <li>
                <Link to="/portafolio" onClick={closeMenu}>
                  Portafolio
                </Link>
              </li>
            </ul>
          </nav>
          <div className="toggle_menu" onClick={handleClick}>
            <i className="bx bx-menu open"></i>
          </div>
          <div className={`dropdown_menu ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/aboutme" onClick={closeMenu}>
                  Acerca de Mí
                </Link>
              </li>
              <li>
                <Link to="/habilidades" onClick={closeMenu}>
                  Habilidades
                </Link>
              </li>
              <li>
                <Link to="/portafolio" onClick={closeMenu}>
                  Portafolio
                </Link>
              </li>
            </ul>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/habilidades" element={<Skills />} />
            <Route path="/portafolio" element={<Portfolio />} />
          </Routes>
        </main>

        <div className="footer">
          <div>
            <h3>Información de Contacto</h3>

            <address className="contact__info-data">
              <div className="contact__info-item1">
                <i className="bx bxl-whatsapp-square"></i>
                <span className="contact__info-number">
                  <a
                    href="https://wa.me/573204578187?text=Tu%20Mensaje%20De%20Texto"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    Enviar mensaje a WhatsApp
                  </a>
                </span>
              </div>

              <div className="contact__info-item2">
                <i className="bx bx-phone"></i>
                <span className="contact__info-number">
                  <a
                    href="tel:1-234-567-8910"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    +57 320 457 8187
                  </a>
                </span>
              </div>

              <div className="contact__info-item3">
                <i className="bx bx-envelope"></i>
                <span className="contact__info-mail">
                  <a
                    id="mail"
                    href="mailto:juandagacha@gmail.com"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    juandagacha@gmail.com
                  </a>
                </span>
              </div>
            </address>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
