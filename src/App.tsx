import { HeroSection } from "./components/sections/HeaderSection/HeaderSection";
import { HowItWorksSection } from "./components/sections/HowItWorksSection/HowItWorksSection";
import { IntegratedProjects } from "./components/sections/IntegratedProjectsSection/IntegratedProjectsSection";
import { LeaderboardSection } from "./components/sections/LeaderboardSection/LeaderboardSection";
import { PreFooterSection } from "./components/sections/FooterSection/PreFooterSection";
import { FooterSection } from "./components/sections/FooterSection/FooterSection";
import { useRef } from "react";
import { useParallax } from "./hooks/useParallax";
import "./App.scss";

const baseUrl = import.meta.env.BASE_URL;

function App() {
  const bgRef1 = useRef<HTMLImageElement>(null);
  const bgRef2 = useRef<HTMLImageElement>(null);
  const bgRef3 = useRef<HTMLImageElement>(null);

  const parallaxStyle1 = useParallax(bgRef1, {
    speed: 0.2,
    fadeStart: window.innerHeight * 3,
    fadeEnd: window.innerHeight * 4,
  });

  const parallaxStyle2 = useParallax(bgRef2, {
    speed: 0.2,
    fadeStart: window.innerHeight * 3,
    fadeEnd: window.innerHeight * 4,
  });

  const parallaxStyle3 = useParallax(bgRef2, {
    speed: 0.2,
    fadeStart: window.innerHeight * 3,
    fadeEnd: window.innerHeight * 4,
  });

  return (
    <div className="App">
      <img
        ref={bgRef1}
        className="fade-in-bg"
        src={`${baseUrl}/planet.png`}
        alt="Parallax Background"
        style={{
          position: "fixed",
          bottom: "-10%",
          right: 0,
          width: "auto",
          height: "100%",
          objectFit: "contain",
          zIndex: -1,
          transform: `scale(1) translateY(${-window.scrollY * 0.3}px)`,
          transformOrigin: "bottom right",
          opacity: parallaxStyle1.opacity,
        }}
      />

      <img
        ref={bgRef2}
        className="fade-in-bg"
        src={`${baseUrl}/reddish-cloud.png`}
        alt="Parallax Background"
        style={{
          position: "fixed",
          bottom: "-50%",
          left: "10%",
          width: "auto",
          height: "100%",
          objectFit: "contain",
          zIndex: -1,
          transform: `scale(1) translateY(${-window.scrollY * 0.3}px)`,
          transformOrigin: "bottom right",
          opacity: parallaxStyle2.opacity,
        }}
      />

      <img
        ref={bgRef3}
        className="fade-in-bg"
        src={`${baseUrl}/meteorid.png`}
        alt="Parallax Background"
        style={{
          position: "fixed",
          top: "-75%",
          left: "-25%",
          width: "25%",
          objectFit: "contain",
          zIndex: -1,
          transform: `scale(1) translateY(${window.scrollY * 0.5}px) translateX(${window.scrollY * 0.5}px)`,
          transformOrigin: "bottom right",
          opacity: parallaxStyle3.opacity,
        }}
      />


      {/* Sections */}
      <HeroSection />
      <HowItWorksSection />
      <LeaderboardSection />
      <IntegratedProjects />
      <PreFooterSection />
      <FooterSection />
    </div>
  );
}

export default App;
