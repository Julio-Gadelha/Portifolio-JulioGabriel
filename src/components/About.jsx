import { ABOUT, EDUCATION, LANGUAGES } from "../data";

export default function About() {
  return (
    <section
      id="sobre"
      style={{ background: "var(--bg2)", borderBlock: "1px solid var(--line)" }}
    >
      <div className="wrap about">
        <div>
          <span className="eyebrow">Sobre mim</span>
          <h2>Qualidade técnica e compromisso com resultados</h2>
          {ABOUT.map((t) => (
            <p key={t}>{t}</p>
          ))}

          <div className="languages-box">
            <span className="eyebrow" style={{ marginBottom: "12px" }}>
              Idiomas
            </span>
            <div className="languages-grid">
              {LANGUAGES.map((lang) => (
                <div key={lang.name} className="lang-card">
                  <div className="lang-top">
                    <strong>{lang.name}</strong>
                    <span className="lang-level">{lang.level}</span>
                  </div>
                  <p>{lang.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow">Formação & Certificações</span>
          <ul className="tl">
            {EDUCATION.map((e) => (
              <li key={e.title}>
                <span className="when">{e.when}</span>
                <div>
                  <strong>{e.title}</strong>
                  <span>{e.meta}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
