"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".reveal-text",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out",
                    delay: 0.3,
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-[90vh] lg:min-h-[80vh] max-h-[900px] 2xl:max-h-[1000px] w-full flex-col justify-center overflow-hidden pt-32 pb-12 sm:pb-24 lg:pb-32"
        >
            {/* Background Image - User Uploaded Sky */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-[center_top] bg-no-repeat transition-transform duration-[20s] ease-out"
                style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
            />
            {/* Soft Light Overlay to ensure text readability */}
            <div className="absolute inset-0 z-0 bg-white/30 backdrop-blur-[2px]" />
            {/* Gradient to transition into the next section */}
            <div className="absolute inset-x-0 bottom-0 h-32 z-0 bg-gradient-to-t from-white to-transparent" />

            {/* Content */}
            <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-24">
                <div className="w-full lg:w-3/4 max-w-4xl">
                    <div className="reveal-text mb-6 sm:mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-xs sm:text-sm font-medium text-slate-800 backdrop-blur-md shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75"></span>
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                        </span>
                        Elite AI Automation Agency
                    </div>

                    <h1 className="reveal-text text-[clamp(3rem,6vw,5rem)] font-bold tracking-tighter text-slate-900 leading-[1.05] mb-6 max-w-4xl">
                        Stop scaling headcount.<br className="hidden sm:block" /> Start scaling systems.
                    </h1>

                    <h2 className="reveal-text text-lg sm:text-xl md:text-2xl text-slate-800 leading-relaxed max-w-2xl mb-10 font-medium">
                        We engineer bespoke AI architectures that automate your most complex workflows, running your operations on autopilot so you can focus on growth.
                    </h2>

                    <div className="reveal-text mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                        <MagneticButton className="whitespace-nowrap w-full sm:w-auto text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-10 flex items-center justify-center gap-2 shadow-lg bg-slate-900 text-white hover:bg-slate-800">
                            Book an Audit ↗
                        </MagneticButton>
                        <p className="text-xs sm:text-sm text-slate-700 font-bold tracking-[0.1em] uppercase">Operations capacity: 2 Spots Left</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
