import { MARQUEE } from "../data";

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {items.map((t, k) => <span key={k}>{t}</span>)}
      </div>
    </div>
  );
}
