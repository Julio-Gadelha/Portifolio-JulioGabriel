import { PROFILE } from "../data";

export default function Header() {
  const [first, last] = PROFILE.name.split(" ");
  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#home">{"<"} {first}<b>{last}</b> {"/>"}</a>
        <nav aria-label="Principal">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Atuação</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="pill" href="#contato">Contato</a>
      </div>
    </header>
  );
}
