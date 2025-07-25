import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/BackgroundCarousel.css";
import { Link } from "react-router-dom";

export default function BackgroundCarousel() {
  return (
    <Carousel
      autoPlay={false}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      emulateTouch={true}
      showIndicators={true}
    >
      {[
        {
          src: "src/assets/picture/clinique/clinique1.png",
          alt: "Clinique extérieure",
        },
        {
          src: "src/assets/picture/clinique/clinique2.png",
          alt: "Salle d'attente",
        },
        {
          src: "src/assets/picture/clinique/clinique3.png",
          alt: "Salle de consultation",
        }
      ].map((item, index) => (
        <div key={index} className="carousel-slide">
          <img src={item.src} alt={item.alt} />
          <div className="carousel-overlay">
            <h1>Bienvenue à la Clinique Compassion</h1>
            <p>Des soins de qualité, une équipe humaine, et une prise en charge rapide.</p>
            <Link to="/form" className="carousel-button">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
