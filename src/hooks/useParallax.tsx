import { useEffect, useState } from "react";

interface ParallaxOptions {
  speed?: number;
  // Fade IN (0 -> 1)
  fadeInStart?: number;
  fadeInEnd?: number;
  // Fade OUT (1 -> 0)
  fadeStart?: number;
  fadeEnd?: number;
  // Legacy alias support
  fadeOutStart?: number;
  fadeOutEnd?: number;
}

// Make the hook generic
export function useParallax<T extends HTMLElement | null>(
  ref: React.RefObject<T>,
  options: ParallaxOptions = {}
) {
  const {
    speed = 0.5,
    fadeOutStart,
    fadeOutEnd,
    // Support legacy names for backward compatibility if user uses them elsewhere (already used fadeStart/End for fade out)
    fadeStart,
    fadeEnd,
    fadeInStart,
    fadeInEnd
  } = { ...options, ...options }; // Destructuring

  // Normalize names
  const effectiveFadeOutStart = fadeOutStart ?? fadeStart ?? 100000; // Default to very far if not set
  const effectiveFadeOutEnd = fadeOutEnd ?? fadeEnd ?? 100000;

  const [style, setStyle] = useState({ transform: 'translateY(0px)', opacity: 1 });

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current)
        return;

      const scrollTop = window.scrollY;
      const translate = scrollTop * speed;

      let opacity = 1;

      // Handle Fade In
      if (fadeInStart !== undefined && fadeInEnd !== undefined) {
        if (scrollTop < fadeInStart) {
          opacity = 0;
        } else if (scrollTop >= fadeInStart && scrollTop < fadeInEnd) {
          opacity = (scrollTop - fadeInStart) / (fadeInEnd - fadeInStart);
        } else {
          // exceeded fadeInEnd, so fully visible (unless fade out kicks in)
          opacity = 1;
        }
      }

      // Handle Fade Out (multiplicative to support both)
      if (effectiveFadeOutStart !== undefined && effectiveFadeOutEnd !== undefined) {
        if (scrollTop >= effectiveFadeOutStart) {
          const fadeOutOpacity = Math.max(0, 1 - (scrollTop - effectiveFadeOutStart) / (effectiveFadeOutEnd - effectiveFadeOutStart));
          opacity *= fadeOutOpacity;
        }
      }

      setStyle({
        transform: `translateY(-${translate}px)`,
        opacity,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, effectiveFadeOutStart, effectiveFadeOutEnd, fadeInStart, fadeInEnd]);

  return style;
}
