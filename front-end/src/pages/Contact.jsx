import Header from "../components/Header";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-info">
          <h2>Nous contacter</h2>
          <p>📍 Clinique Santé+ – Douala, Cameroun</p>
          <p>📞 +237 6XX XX XX XX</p>
          <p>✉️ contact@cliniquesanteplus.cm</p>
          <p>🕐 Lundi - Vendredi : 8h à 18h</p>
        </div>

        <form className="contact-form" onSubmit={(e) => {
          e.preventDefault();
          alert("Message envoyé !");
        }}>
          <h3>Envoyer un message</h3>

          <label>Nom</label>
          <input type="text" name="nom" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <label>Message</label>
          <textarea name="message" rows="5" required />

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </>
  );
}
