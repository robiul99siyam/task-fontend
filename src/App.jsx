import { useEffect, useState } from "react";
import bg5 from "./assets/backgrounds/ctaMobileWaveLines.svg";
import bg1 from "./assets/backgrounds/WaveLinesDesktop1.svg";
import bg2 from "./assets/backgrounds/WaveLinesDesktop2.svg";
import bg3 from "./assets/backgrounds/WaveLinesDesktop3.svg";
import bg4 from "./assets/backgrounds/WaveLinesDesktop4.svg";
import Benner from "./components/Benner/Benner";
import Section from "./components/Finance Section/Section";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SectionPhilosophy from "./components/PHILOSOPHY/SectionPhilosophy";
import Technology from "./components/PHILOSOPHY/Technology";
import BankLogo from "./components/Trusted/BankLogo";
import Legacy from "./components/Trusted/Legacy";
import Trusted from "./components/Trusted/Trusted";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{ clipPath: "polygon(0 1%, 100% 0, 100% 86%, 0% 100%)" }}
        className="relative w-full border-style h-[calc(115vh-80px)] bg-cover bg-center bg-radial bg-[radial-gradient(at_15%_75%,_#3c9dca,_#0054BF,_#4f46e5)] overflow-hidden"
      >
        {/* Background Images with Continuous Sway Animation */}
        <div className="absolute inset-0 z-0">
          <img
            src={bg3}
            alt="background"
            className="absolute top-0 left-0 w-50 h-auto object-cover animate-sway"
          />
          <img
            src={bg4}
            alt="background"
            className="absolute top-0 left-0 w-full h-full object-cover animate-sway"
          />
          <img
            src={bg5}
            alt="background"
            className="absolute  top-0 left-0 w-full h-full object-cover animate-swayY"
          />
          <img
            src={bg2}
            alt="background"
            className="absolute  top-0 left-0 w-full h-full object-cover animate-sway"
          />
          <img
            src={bg1}
            alt="background"
            className="absolute  top-0 left-0 w-full h-full object-cover animate-sway"
          />
        </div>

        {/* Content (Navbar & Benner) */}
        <div className="relative z-10">
          {" "}
          <Navbar scrolled={scrolled} />
          <Benner />
        </div>
      </div>
      <Section scrolled={scrolled} />
      <SectionPhilosophy />
      <Technology />
      <Trusted />
      <BankLogo />
      <Legacy />
      <Footer />
    </>
  );
}
