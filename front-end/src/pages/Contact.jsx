import Header from "../components/Header";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-info">
          <h2>Nous contacter</h2>
          <p>📍 Clinique compassion 3s – Douala, Cameroun</p>
          <p>📞 +237 6 57 40 24 90</p>
          <p>✉️ lacliniquecompassions@gmail.com</p>
          <p>🕐 24h/24h</p>
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
