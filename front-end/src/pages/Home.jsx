import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />

      <main className="home__main">
        {/* Hero section */}
        <section className="home__hero">
          <div className="home__hero-content">
            <h1>Bienvenue à la Clinique Santé+</h1>
            <p>Des soins de qualité, une équipe humaine, et une prise en charge rapide.</p>
            <Link to="/appointment" className="home__cta-button">
              Prendre rendez-vous
            </Link>
          </div>
        </section>

        {/* Services preview */}
        <section className="home__services">
          <h2>Nos spécialités médicales</h2>
          <div className="home__services-grid">
            {[
              { title: "Cardiologie", icon: "❤️" },
              { title: "Pédiatrie", icon: "🧸" },
              { title: "Imagerie médicale", icon: "🩻" },
            ].map((service, index) => (
              <div key={index} className="home__service-card">
                <div className="home__service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>Consultation, suivi, bilan complet avec nos spécialistes.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Témoignage */}
        <section className="home__testimonial">
          <div className="home__testimonial-content">
            <h3>Pourquoi choisir notre clinique ?</h3>
            <p>
              “L’équipe est attentionnée, les soins sont rapides et efficaces. Je recommande vivement.”
              – <em>Camille D.</em>
            </p>
            <Link to="/about" className="home__testimonial-link">
              En savoir plus sur notre équipe
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
