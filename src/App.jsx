import { PROFILE } from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import About from "./components/About";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Services />
        <Faq />
        <Contact />
      </main>
      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} {PROFILE.name}</span>
          <span className="mono">{PROFILE.city}</span>
        </div>
      </footer>
    </>
  );
}
