import React from 'react';
const baseUrl = import.meta.env.BASE_URL;
const logos = [
  { name: 'SOLANA', image: `${baseUrl}/projects/solana.webp` },
  { name: 'Arweave', image: `${baseUrl}/projects/arweave.webp` },
  { name: 'Bittensor', image: `${baseUrl}/projects/bittensor.webp` },
  { name: 'Unknown 1', image: `${baseUrl}/projects/unknown1.webp` },
  { name: 'Unknown 2', image: `${baseUrl}/projects/unknown2.webp` }
];

export const IntegratedProjects: React.FC = () => {
  return (
    <section id='projects' className="section">
      <div className="container flex flex-col gap-2 md:justify-center md:h-full">
        <h3 className="text-center">Projects integrated into the Arrakis AI Ecosystem</h3>

        <div className="carousel-wrapper mt-1">
          <div className="carousel-track">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="logo-item">
                <div className="logo-image">
                  <img src={logo.image} alt={logo.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

