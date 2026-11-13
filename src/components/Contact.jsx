import { PROFILE } from "../data";

export default function Contact() {
  const links = [
    ["LinkedIn", PROFILE.linkedin],
    ["GitHub", PROFILE.github],
    ["YouTube", PROFILE.youtube],
    ["Instagram", PROFILE.instagram],
  ];
  return (
    <section id="contato" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta">
          <h2>Vamos construir algo juntos ?</h2>
          <p>Estou aberto a oportunidades na área de tecnologia, novos desafios e conexões profissionais. Será um prazer conversar com você!.</p>
          <div className="row">
            {links.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
