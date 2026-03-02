"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TaskShuffler from "./features/TaskShuffler";
import TelemetryTypewriter from "./features/TelemetryTypewriter";
import DeploymentVisualizer from "./features/DeploymentVisualizer";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".feature-card",
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                }
            );

            gsap.fromTo(
                ".feature-header",
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="services" className="relative w-full py-24 sm:py-32 lg:py-40 z-10 bg-background/50 backdrop-blur-3xl">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
                <div className="mb-24 max-w-3xl feature-header">
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-surface leading-[1.1] mb-6">
                        The Live <span className="font-serif italic font-light text-white/90">Operations</span> Dashboard.
                    </h2>
                    <p className="text-xl text-surface/70 leading-relaxed max-w-2xl">
                        We don&apos;t just build APIs and basic bots. We deploy an ecosystem of intelligent, interconnected agents tailored to your business operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    {/* Service 1 */}
                    <div className="feature-card group flex flex-col gap-8 transition-transform duration-500 hover:-translate-y-2 bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-8 rounded-3xl shadow-xl">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-amber-500 transition-colors duration-300">Custom Automations</h3>
                            <p className="text-white/60 text-base leading-relaxed">
                                Enterprise-grade workflows connecting your disparate SaaS tools without manual oversight.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <TaskShuffler />
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="feature-card group flex flex-col gap-8 transition-transform duration-500 hover:-translate-y-2 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 p-8 rounded-3xl shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-amber-500 transition-colors duration-300">Voice Agents</h3>
                            <p className="text-white/60 text-base leading-relaxed">
                                24/7 inbound and outbound human-like voice agents handling support, qualification, and sales.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <TelemetryTypewriter />
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="feature-card group flex flex-col gap-8 transition-transform duration-500 hover:-translate-y-2 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 p-8 rounded-3xl shadow-xl">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-amber-500 transition-colors duration-300">Agentic Workflows</h3>
                            <p className="text-white/60 text-base leading-relaxed">
                                Code-driven AI agents capable of complex reasoning, iterative execution, and intelligent self-correction.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <DeploymentVisualizer />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
