import { PROFILE } from "../data";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(
    PROFILE.whatsappMessage,
  )}`;
  const emailUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    "Oportunidade / Contato via Portfólio",
  )}`;

  return (
    <section id="contato" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta">
          <h2>Vamos construir algo juntos?</h2>

          <div className="row">
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={emailUrl}>E-mail</a>
          </div>
        </div>
      </div>
    </section>
  );
}