import { ABOUT, TOOLS, EDUCATION } from "../data";

export default function About() {
  return (
    <section id="sobre" style={{ background: "var(--bg2)", borderBlock: "1px solid var(--line)" }}>
      <div className="wrap about">
        <div>
          <span className="eyebrow">{"Sobre mim  "}</span>
          <h2>Quem está por trás do código</h2>
          {ABOUT.map((t) => <p key={t}>{t}</p>)}
          <ul className="tools">{TOOLS.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
        <div>
          <span className="eyebrow">{"Formação "}</span>
          <ul className="tl">
            {EDUCATION.map((e) => (
              <li key={e.title}>
                <span className="when">{e.when}</span>
                <div><strong>{e.title}</strong><span>{e.meta}</span></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
