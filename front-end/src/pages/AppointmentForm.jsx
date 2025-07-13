import { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/AppointmentForm.css";

import img1 from "../assets/picture/clinique/clinique1.png";
import img2 from "../assets/picture/clinique/clinique2.png";
import img3 from "../assets/picture/clinique/clinique3.png";

const specialties = [
  "Rhumatologie", "Dermatologie", "Dentiste", "Bloc opératoire", "Chirurgie",
  "Laboratoire", "Pro-pharmacie", "Échographie", "Pneumologie", "Médecine Générale",
  "Urologie", "Médecine du Travail", "Suivi Infertilité", "Ambulance", "Cardiologie",
  "Gynécologie", "Pédiatrie", "Gastro-entérologie", "Diabétologie", "Kinésithérapie"
];

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    nom: "", prenom: "", email: "", telephone: "",
    date: "", heure: "", specialite: specialties[0]
  });

  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderImages = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % sliderImages.length);
    }, 10000); // 10 secondes
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Rendez-vous enregistré !");
  };

  return (
    <>
      <Header />
      <div className="appointment-container">

        {/* Slider intégré directement ici */}
        <div className="slider-container">
          {sliderImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`clinique-${i}`}
              className={`slider-image ${sliderIndex === i ? "active" : ""}`}
            />
          ))}
        </div>

        {/* Formulaire */}
        <form className="appointment-form" onSubmit={handleSubmit}>
          <h2>Prendre rendez-vous</h2>

          <label>Nom</label>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />

          <label>Prénom</label>
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Téléphone (Cameroun)</label>
          <input type="tel" name="telephone" pattern="(6|2)[0-9]{8}" value={formData.telephone} onChange={handleChange} required />

          <label>Spécialité</label>
          <select name="specialite" value={formData.specialite} onChange={handleChange}>
            {specialties.map((spec, i) => (
              <option key={i} value={spec}>{spec}</option>
            ))}
          </select>

          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />

          <label>Heure</label>
          <input type="time" name="heure" value={formData.heure} onChange={handleChange} required />

          <button type="submit">Valider</button>
        </form>
      </div>
    </>
  );
}
