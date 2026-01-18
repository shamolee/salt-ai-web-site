import React, { useRef } from "react";
import { Divider } from "@/components/ui-kit/divider/Divider";
import { Button } from "@/components/ui-kit/button/Button";
import { useFixedVisibility } from "@/hooks/useFixedVisibility";
import "./FooterSection.scss";

const baseUrl = import.meta.env.BASE_URL;

export const FooterSection: React.FC = () => {
  const preFooterTriggerRef = useRef<HTMLElement>(null);

  const { visible, style } = useFixedVisibility(preFooterTriggerRef, {
    enterThreshold: 200,
    speed: 0.15,
  });

  const footerLinks = {
    legal: [
      { label: "Terms of Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Global Policy", href: "#" },
    ],
  };

  return (
    <>
      <section ref={preFooterTriggerRef} className="h-[1px]" />

      <footer className="section footer-section">
        {visible && (
          <img
            src={`${baseUrl}/earth.png`}
            alt="Earth Background"
            className="footer-bg-img-1"
            style={{
              ...style,
              position: "fixed",
              bottom: "-40%",
              left: 0,
              zIndex: -1,
              pointerEvents: "none",
            }}
          />
        )}

        <div className="container flex items-center justify-center h-[250px]">
          <h4>Join our community and harvest $SALT</h4>
        </div>

        <div className="bottom-navigation">
          <div className="flex flex-col md:flex-row justify-center">
            <Button>How It Works</Button>
            <Button>Buy Salt AI</Button>
          </div>

          <Divider className="hidden md:block" />

          <div className="flex flex-col md:flex-row justify-center md:justify-between my-1 gap-2">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="social-link-img"
                href="#"
              >
                <img src={`${baseUrl}/tg.png`} alt="Telegram" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="social-link-img"
                href="#"
              >
                <img src={`${baseUrl}/x.png`} alt="X" />
              </a>
            </div>

            <div className="links-group text-gray-500 flex justify-center md:justify-end">
              <ul>
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
