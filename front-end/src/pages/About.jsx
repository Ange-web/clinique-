import React from "react";
import Header from "../components/Header";
import "../styles/About.css";

export default function About() {
  return (
    <>
      <Header />

      <section className="about">
        {/* Bloc 1 */}
        <div className="about__block">
          <div className="about__text">
            <h2>Notre Histoire</h2>
            <p>
              La Clinique Compassion a été fondée avec un objectif clair :
              offrir des soins de qualité dans un cadre humain et chaleureux.
              Depuis notre création, nous plaçons le patient au cœur de nos
              priorités.
            </p>
          </div>
          <div className="about__image">
            <img src="src/assets/picture/clinique/clinique1.png" alt="Clinique Compassion" />
          </div>
        </div>

        {/* Bloc 2 */}
        <div className="about__block">
          <div className="about__image">
            <img src="src/assets/picture/clinique/clinique4.png" alt="Équipe médicale" />
          </div>
          <div className="about__text">
            <h2>Notre Engagement</h2>
            <p>
              Nos équipes médicales et paramédicales s'engagent chaque jour à
              accompagner les patients avec professionnalisme, écoute et
              bienveillance, tout en intégrant les dernières avancées
              médicales.
            </p>
          </div>
        </div>

        {/* Bloc 3 */}
        <div className="about__block">
          <div className="about__text">
            <h2>Des Technologies Modernes</h2>
            <p>
              Nous investissons dans des technologies médicales avancées pour
              garantir des diagnostics précis et des traitements efficaces,
              dans les meilleures conditions de sécurité.
            </p>
          </div>
          <div className="about__image">
            <img src="src/assets/picture/clinique/clinique5.png" alt="Technologie médicale" />
          </div>
        </div>

        {/* Bloc 4 */}
        <div className="about__block">
          <div className="about__image">
            <img src="src/assets/picture/clinique/clinique6.jpg" alt="Service patient" />
          </div>
          <div className="about__text">
            <h2>Une Relation de Confiance</h2>
            <p>
              Chaque patient est unique. C’est pourquoi nous privilégions une
              approche personnalisée et humaine, dans le respect total de la
              confidentialité et du bien-être.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
