import { useEffect, useState } from "react";

interface FixedVisibilityOptions {
    enterThreshold?: number;
    speed?: number;
}

export function useFixedVisibility<T extends HTMLElement>(
    triggerRef: React.RefObject<T | null>,
    options: FixedVisibilityOptions = {}
) {
    const { enterThreshold = 0, speed = 0 } = options;

    const [visible, setVisible] = useState(false);
    const [style, setStyle] = useState<React.CSSProperties>({
        transform: "translateY(0px)",
    });

    useEffect(() => {
        const handleScroll = () => {
            if (!triggerRef.current) return;

            const rect = triggerRef.current.getBoundingClientRect();
            const winHeight = window.innerHeight;

            const isVisible = rect.top <= winHeight + enterThreshold;
            setVisible(isVisible);

            if (!isVisible) return;

            const translateY = speed ? rect.top * speed : 0;

            setStyle({
                transform: `translateY(${translateY}px)`,
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [enterThreshold, speed]);

    return { visible, style };
}
