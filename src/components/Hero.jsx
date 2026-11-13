
import { useEffect, useState } from "react";
import { PROFILE, ROTATING_WORDS } from "../data";

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(
      () => setI((n) => (n + 1) % ROTATING_WORDS.length),
      2200
    );

    return () => clearInterval(id);
  }, []);

  return (
    <div className="wrap hero">
      <div className="status">
        <span className="dot" />
        {PROFILE.status}
      </div>

      <h1>
        Construo <span className="swap">{ROTATING_WORDS[i]}</span>
        <span className="caret" /> em Java.
      </h1>

      <p className="lead">{PROFILE.lead}</p>

      <div className="actions">
        <a className="pill" href="#projetos">
          Ver projetos
        </a>

        <a className="pill ghost" href="#contato">
          Falar comigo
        </a>

        <a
          className="pill ghost"
          href="/curriculo-julio-gabriel.pdf"
          download="Julio-Gabriel-Curriculo.pdf"
        >
          ↓ Baixar currículo
        </a>
      </div>
    </div>
  );
}
