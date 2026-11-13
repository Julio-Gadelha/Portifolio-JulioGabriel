import { PROFILE, PROJECTS } from "../data";

function Card({ p }) {
  return (
    <article className="card">
      <div className="thumb" aria-hidden="true">{p.letter}</div>
      <div className="body">
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="links">
          {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Online</a>}
          <a href={p.repo} target="_blank" rel="noreferrer">Código</a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projetos">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="eyebrow">{"Projetos "}</span>
            <h2>Projeto</h2>
            <p className="sub">Alguns dos meus projetos, do código ao navegador.</p>
          </div>
          <a className="pill ghost" href={PROFILE.github} target="_blank" rel="noreferrer">Ver todos no GitHub</a>
        </div>
        <div className="grid">{PROJECTS.map((p) => <Card key={p.title} p={p} />)}</div>
      </div>
    </section>
  );
}
