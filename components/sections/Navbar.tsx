"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="fixed top-6 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2"
        >
            <nav
                className={cn(
                    "flex items-center justify-between rounded-[3rem] px-6 py-4 transition-all duration-300",
                    isScrolled
                        ? "bg-primary/60 backdrop-blur-xl border border-white/10 shadow-2xl"
                        : "bg-transparent border border-transparent shadow-none"
                )}
            >
                <div className="text-2xl font-bold tracking-tight text-surface">
                    Evercrest AI<span className="text-accent">.</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-surface/70">
                    <a href="#services" className="hover:text-surface transition-colors">Services</a>
                    <a href="#philosophy" className="hover:text-surface transition-colors">Philosophy</a>
                    <a href="#protocol" className="hover:text-surface transition-colors">Protocol</a>
                </div>

                <div className="flex items-center gap-4">
                    <MagneticButton className="hidden sm:block text-sm py-2.5 px-6">
                        Book an Audit
                    </MagneticButton>
                </div>
            </nav>
        </motion.header>
    );
}
