import { SERVICES } from "../data";

export default function Services() {
  return (
    <section id="servicos">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="eyebrow">Especialidades</span>
            <h2>No que posso ajudar</h2>
            <p className="sub">O que eu faço bem hoje e quero fazer cada vez melhor.</p>
          </div>
        </div>
        <div className="svc">
          {SERVICES.map((s) => (
            <div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
