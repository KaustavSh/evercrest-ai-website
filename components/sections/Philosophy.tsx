"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Split text animations
            gsap.fromTo(
                ".phil-word-1",
                { y: 60, opacity: 0, rotateX: -30 },
                {
                    y: 0, opacity: 1, rotateX: 0,
                    duration: 1.2, stagger: 0.1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".phil-trigger-1",
                        start: "top 75%",
                    }
                }
            );

            gsap.fromTo(
                ".phil-word-2",
                { y: 80, opacity: 0, scale: 0.9 },
                {
                    y: 0, opacity: 1, scale: 1,
                    duration: 1.5, stagger: 0.15, ease: "expo.out",
                    scrollTrigger: {
                        trigger: ".phil-trigger-2",
                        start: "top 80%",
                    }
                }
            );

            // Parallax soft focus
            gsap.to(".soft-focus-bg", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const text1 = "Most agencies sell you software.".split(" ");
    const text2 = "We engineer infrastructure.".split(" ");

    return (
        <section ref={containerRef} id="philosophy" className="relative w-full py-40 md:py-56 lg:py-72 overflow-hidden bg-[hsl(var(--surface))] rounded-t-[4rem] -mt-10 z-20">
            {/* High contrast: off-white background with soft focus texture */}
            <div
                className="soft-focus-bg absolute inset-0 z-0 mix-blend-multiply opacity-60"
                style={{
                    backgroundImage: "radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.1) 0%, transparent 60%)",
                    filter: "blur(60px)",
                    transform: "scale(1.2)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 text-center">

                <div className="phil-trigger-1 mb-8 md:mb-16">
                    <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-tighter leading-[1.1] flex flex-wrap justify-center gap-x-4 gap-y-2">
                        {text1.map((word, i) => (
                            <span key={i} className="phil-word-1 inline-block text-[hsl(var(--surface-foreground))] pb-2" style={{ perspective: "1000px" }}>
                                {word}
                            </span>
                        ))}
                    </h2>
                </div>

                <div className="phil-trigger-2">
                    <h2 className="font-serif italic text-[clamp(2.5rem,8vw,6.5rem)] tracking-tight text-[hsl(var(--accent))] flex flex-wrap justify-center gap-x-6 gap-y-2 drop-shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                        {text2.map((word, i) => (
                            <span key={i} className="phil-word-2 inline-block pb-4">{word}</span>
                        ))}
                    </h2>
                </div>

            </div>
        </section>
    );
}
