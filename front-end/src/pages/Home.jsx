import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Home.css";
import BackgroundCarousel from "../components/BackgroundCarousel";


export default function Home() {
  return (
    <div className="home">
      <Header />

      <main className="home__main">
        
          <BackgroundCarousel />
        

        {/* Services preview */}
        <section className="home__services">
          <h2>Nos spécialités médicales</h2>
          <div className="home__services-grid">
            {[
              { title: "Rhumatologie", icon: "🦴" },
              { title: "Neurologie", icon: "🌞" },
              { title: "Dentiste", icon: "🦷" },
              { title: "Bloc opératoire", icon: "🏥" },
              { title: "Chirurgie", icon: "🔪" },
              { title: "Laboratoire", icon: "🔬" },
              { title: "Pro-pharmacie", icon: "💊" },
              { title: "Échographie", icon: "🖥️" },
              { title: "Pneumologie", icon: "💨" },
              { title: "Médecine Générale", icon: "🩺" },
              { title: "Urologie", icon: "🚻" },
              { title: "Médecine du Travail", icon: "📋" },
              { title: "Suivi Infertilité", icon: "🧬" },
              { title: "Ambulance", icon: "🚑" },
              { title: "Cardiologie", icon: "❤️" },
              { title: "Gynécologie", icon: "👩‍⚕️" },
              { title: "Pédiatrie", icon: "🧸" },
              { title: "Gastro-entérologie", icon: "🍽️" },
              { title: "Diabétologie", icon: "🩸" },
              { title: "Kinésithérapie", icon: "🏃" }
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
