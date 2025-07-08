import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css"; // Assure-toi que ce fichier existe

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          Clinique Compassion
        </Link>

        {/* Menu navigation */}
        <nav className="header__nav">
          <NavLink to="/" className="header__link">Accueil</NavLink>
          <NavLink to="/services" className="header__link">Services</NavLink>
          <NavLink to="/appointment" className="header__link">Rendez-vous</NavLink>
          <NavLink to="/about" className="header__link">À propos</NavLink>
          <NavLink to="/contact" className="header__link">Contact</NavLink>
        </nav>

        {/* Bouton RDV */}
        <Link to="/appointment" className="header__cta">
          Prendre RDV
        </Link>
      </div>
    </header>
  );
}
