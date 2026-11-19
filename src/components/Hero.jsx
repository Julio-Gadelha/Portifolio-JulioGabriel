import { PROFILE } from "../data";

export default function Hero() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="wrap hero hero-grid">
      <div className="hero-content">
        <div className="status">
          <span className="dot" aria-hidden="true" />
          <span className="mono">{PROFILE.roleBadge || "JULIO GABRIEL · PORTFÓLIO"}</span>
        </div>

        <h1 className="hero-title">{PROFILE.headline}</h1>

        <p className="lead">{PROFILE.lead}</p>

        <ul className="hero-tags" aria-label="Principais tecnologias">
          {PROFILE.heroTags?.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="actions">
          <a
            className="pill ghost"
            href={`${base}curriculo-julio-gabriel.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Currículo (PDF)
          </a>
        </div>
      </div>

      <img
        className="avatar"
        src={`${base}foto.jpg`}
        alt="Foto de Julio Gabriel"
      />
    </div>
  );
}