import { useState } from "react";
import { PROFILE, PROJECTS } from "../data";

function ProjectCard({ p }) {
  const [expanded, setExpanded] = useState(false);
  const base = import.meta.env.BASE_URL;

  return (
    <article className="card project-card">
      <div className="thumb">
        <img src={`${base}${p.cover}`} alt={p.coverAlt} loading="lazy" />
      </div>

      <div className="body">
        <div className="project-header">
          <h3>{p.title}</h3>
          <p className="project-summary">{p.summary}</p>
        </div>

        <div className="project-case">
          <div className="case-block">
            <span className="case-label">Problema</span>
            <p>{p.problem}</p>
          </div>
          <div className="case-block">
            <span className="case-label">Solução desenvolvida</span>
            <p>{p.solution}</p>
          </div>
        </div>

        {expanded && (
          <>
            <div className="case-block">
              <span className="case-label">Principais funcionalidades</span>
              <ul className="feature-list">
                {p.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            </div>

            <div className="case-block case-result">
              <span className="case-label">
                Aprendizados e resultados alcançados
              </span>
              <p>{p.results}</p>
            </div>
          </>
        )}

        <button
          type="button"
          className="details-toggle"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? "Ocultar detalhes −" : "Ver detalhes +"}
        </button>

        <div className="project-footer">
          <ul className="tags" aria-label="Tecnologias utilizadas">
            {p.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="links">
            <a href={p.repo} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer">
                Demonstração ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projetos"
      style={{ background: "var(--bg2)", borderBlock: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <div className="head">
          <div>
            <span className="eyebrow">Projetos</span>
            <h2>Projetos que resolvem problemas reais</h2>
            <p className="sub">
              Cada projeto reúne o problema resolvido, decisões técnicas e
              funcionalidades entregues.{" "}
            </p>
          </div>
          <a
            className="pill ghost"
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
          >
            Ver todos no GitHub
          </a>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}