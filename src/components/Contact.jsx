import { PROFILE } from "../data";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(
    PROFILE.whatsappMessage
  )}`;
  const emailUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    "Oportunidade / Contato via Portfólio"
  )}`;

  return (
    <section id="contato" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta cta-split">
          <div className="cta-left">
            <h2>Vamos construir algo juntos?</h2>
            <p>
              Estou disponível para oportunidades de estágio em desenvolvimento
              Back-end ou áreas afins , novos desafios técnicos e conexões profissionais.
            </p>

            <div className="row">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="cta-right">
            <div className="contact-cards">
              <a className="contact-primary" href={emailUrl}>
                <strong>E-mail</strong>
                <span>
                  Contato profissional e recrutamento  {PROFILE.email}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}