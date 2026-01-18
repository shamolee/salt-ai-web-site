import React from "react";
import { Button } from "@/components/ui-kit/button/Button";

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="info" className="section">
      <div className="container flex flex-col text-center md:text-left gap-5 h-full justify-center">
        <div>
          <h3>Crowdsourcing our collective</h3>
          <h3>intelligence to build the best AI</h3>
        </div>

        <div className="flex flex-col w-full md:w-[50%]">
          <p className="mb-5">
            Open source AIs have been lagging in development behind OpenAI with
            billions of dollars.
          </p>
          <p>
            Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars. Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. We run competitions between AI models to find and reward the best AI models. As a result, our users will be able to access the latest cutting edge AI models.
          </p>
        </div>

        <Button bg size="big" className="md:self-start">
          Use The Cutting Edge AI
        </Button>
      </div>
    </section>
  );
};
