import { FAQ } from "../data";

export default function Faq() {
  return (
    <section id="faq" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head">
          <div>
            <span className="eyebrow">{"FAQ"}</span>
            <h2>Perguntas frequentes</h2>
          </div>
        </div>
        {FAQ.map((f) => (
          <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
        ))}
      </div>
    </section>
  );
}
