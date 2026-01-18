import React from "react";
import { Button } from "@components/ui-kit/button/Button";
import "./HeaderSection.scss";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="section">
      <div className="hero-nav flex justify-center gap-5 z-50 md:absolute md:top-0 md:left-0 md:w-full">
        <Button>How it works</Button>
        <Button bg>Buy Salt AI</Button>
      </div>

      <div className="container flex flex-col text-center md:text-left justify-center md:justify-start md:h-full gap-10">
        <header className='flex flex-col gap-2'>
          <h1 className="gradient-text">
            A new economic primitive for funding decentralized AI
          </h1>

          <p className="text-lead">
            We track, rank and pay for the best open source decentralized LLMs
            to compete against OpenAI
          </p>

          <div className="flex gap-5 mt-4 justify-center md:justify-start">
            <Button size="big" bg>
              Buy Salt AI
            </Button>
            <Button size="big">Try Now</Button>
          </div>
        </header>

        <div className='stats-grid'>
          <div className="stat-card">
            <div className="stat-number">10,873</div>
            <div className="stat-label">LLM models</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">$72,470,728</div>
            <div className="stat-label">paid to data scientists</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">6,557</div>
            <div className="stat-label">members community</div>
          </div>
        </div>
      </div>
    </section>
  );
};
