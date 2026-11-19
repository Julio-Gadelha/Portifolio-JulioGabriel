import { TECH_GROUPS } from "../data";

export default function Technologies() {
  return (
    <section id="tecnologias">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="eyebrow">Stack Técnica</span>
            <h2>Tecnologias por contexto</h2>
            <p className="sub">
              Ferramentas e linguagens aplicadas na construção de APIs, regras de negócio e persistência de dados.
            </p>
          </div>
        </div>

        <div className="tech-grid">
          {TECH_GROUPS.map((group) => (
            <div
              key={group.category}
              className={`tech-card ${group.featured ? "tech-featured" : ""}`}
            >
              <div className="tech-card-head">
                <h3>{group.category}</h3>
                {group.featured && <span className="focus-badge">Foco principal</span>}
              </div>

              <ul className="tech-list">
                {group.items.map((tech) => (
                  <li
                    key={tech.name}
                    className={tech.highlight ? "tech-highlight" : ""}
                  >
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}