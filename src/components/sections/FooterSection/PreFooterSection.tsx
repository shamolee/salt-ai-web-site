import React, { useRef } from "react";

const baseUrl = import.meta.env.BASE_URL;

export const PreFooterSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="section footer-section">
      <div className="container grid grid-cols-1 text-center md:text-left md:grid-cols-2 items-center grow">
        <div className="flex flex-col gap-2">
          <h3>Join our community</h3>

          <p className="my-5">
            Join us on our mission to to the moon & revolutionize open source AI development so that we can build a permissionless, democratized, and decentralized AI. Let the fate of AI be in our hands and not that of big tech companies.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a target="_blank" className="social-link-img" href="https://telegram.me/salt_ai">
              <img src={`${baseUrl}/tg.png`} alt="Telegram" />
            </a>
            <a target="_blank" className="social-link-img" href="https://x.com/salt_ai">
              <img src={`${baseUrl}/x.png`} alt="X" />
            </a>
          </div>
        </div>



        <img
          src={`${baseUrl}/moon.png`}
          alt="Footer Background Image 2"
          className="hidden md:block justify-self-end footer-bg-img-2 "
        />
      </div>
    </section>
  );
};
