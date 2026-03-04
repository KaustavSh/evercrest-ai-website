"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const PROTOCOLS = [
    {
        id: 1,
        title: "1. Audit & Blueprint",
        desc: "We analyze your operations and map out the exact points where AI can eliminate manual work and increase throughput.",
        visual: () => (
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <motion.svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-white/10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                >
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                    <path d="M50 5 L50 15 M95 50 L85 50 M50 95 L50 85 M5 50 L15 50" stroke="hsl(var(--accent))" strokeWidth="1" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M50 20 L50 25 M80 50 L75 50 M50 80 L50 75 M20 50 L25 50" stroke="hsl(var(--accent))" strokeWidth="1" opacity={0.5} />
                </motion.svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="w-3 h-3 rounded-full bg-accent"
                        animate={{ scale: [1, 2, 1], opacity: [1, 0.2, 1] }}
                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                    />
                </div>
            </div>
        )
    },
    {
        id: 2,
        title: "2. Autonomous Construction",
        desc: "Our engineers build your custom agents and agentic workflows. No templates. Hand-coded precision tailored to your logic.",
        visual: () => (
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center overflow-hidden border border-white/5 rounded-3xl bg-[#030308] shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
                {/* Scanning Laser */}
                <motion.div
                    className="absolute left-0 right-0 h-1/3 bg-gradient-to-b from-transparent via-accent/30 to-accent z-10 border-b border-accent shadow-[0_5px_15px_rgba(212,175,55,0.4)]"
                    animate={{ y: ["-100%", "300%"] }}
                    transition={{ duration: 2.5, ease: "easeIn", repeat: Infinity, repeatType: "mirror" }}
                />
                {/* Abstract code representation — static widths to avoid hydration mismatch */}
                <div className="absolute inset-6 flex flex-col gap-3 opacity-30">
                    {[
                        { accent: 38, white: 25 },
                        { accent: 52, white: 18 },
                        { accent: 28, white: 35 },
                        { accent: 45, white: 22 },
                        { accent: 33, white: 30 },
                        { accent: 55, white: 15 },
                        { accent: 40, white: 28 },
                        { accent: 24, white: 20 },
                    ].map((w, i) => (
                        <div key={i} className="flex gap-2">
                            <div
                                className="h-2 rounded-full bg-accent/80"
                                style={{ width: `${w.accent}%` }}
                            />
                            <div
                                className="h-2 rounded-full bg-white/40"
                                style={{ width: `${w.white}%` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 3,
        title: "3. Deployment & Scale",
        desc: "Your system goes live. You immediately stop executing manual tasks and step into the role of managing outcomes and scale.",
        visual: () => (
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <motion.div
                    className="absolute w-48 h-48 rounded-full bg-accent/20 blur-[40px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-accent/80 to-yellow-600/80 shadow-[0_0_50px_rgba(212,175,55,0.6)] flex items-center justify-center backdrop-blur-md border border-white/20">
                    <motion.div
                        className="w-10 h-10 rounded-full bg-white"
                        animate={{ scale: [1, 0.8, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                    />
                </div>
                <motion.div
                    className="absolute inset-0 border border-accent/20 rounded-full"
                    animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                    transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
                />
            </div>
        )
    }
];

export default function Protocol() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".protocol-card");

            cards.forEach((card, index) => {
                if (index === cards.length - 1) return; // last card doesn't shrink

                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    endTrigger: cards[index + 1],
                    end: "top top",
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    animation: gsap.to(card, {
                        scale: 0.9,
                        opacity: 0.2,
                        filter: "blur(20px)",
                        ease: "none"
                    })
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="protocol" className="relative w-full bg-background z-30 isolate">
            {PROTOCOLS.map((protocol) => (
                <div
                    key={protocol.id}
                    className="protocol-card sticky top-0 h-[100dvh] w-full flex items-center justify-center bg-background border-t border-white/[0.02]"
                >
                    {/* Subtle noise for each card */}
                    <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                    <div className="relative z-10 mx-auto max-w-6xl px-6 w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-24">

                        <div className="flex-1 max-w-xl text-center md:text-left">
                            <div className="text-accent font-mono text-xs md:text-sm tracking-widest mb-4 md:mb-6 opacity-80 uppercase">Phase 0{protocol.id}</div>
                            <h2 className="text-[clamp(2.1rem,7vw,4.5rem)] font-bold tracking-tighter text-surface leading-[1.1] mb-4 md:mb-6">
                                {protocol.title}
                            </h2>
                            <p className="text-base md:text-xl text-surface/60 leading-relaxed font-light">
                                {protocol.desc}
                            </p>
                        </div>

                        <div className="flex-1 flex justify-center md:justify-end w-full">
                            <protocol.visual />
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
}
