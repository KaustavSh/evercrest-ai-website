"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MapPin } from "lucide-react";

export default function DeploymentVisualizer() {
    const crosshairControls = useAnimation();
    const pinControls = useAnimation();
    const rippleControls = useAnimation();

    useEffect(() => {
        let isActive = true;

        const sequence = async () => {
            while (isActive) {
                // Reset state
                await Promise.all([
                    pinControls.set({ opacity: 0, scale: 0, y: -20 }),
                    rippleControls.set({ opacity: 0, scale: 0 }),
                    crosshairControls.set({ x: "15%", y: "20%" }),
                ]);

                await new Promise(r => setTimeout(r, 500));
                if (!isActive) break;

                // Move to target slowly
                await crosshairControls.start({
                    x: "70%",
                    y: "45%",
                    transition: { duration: 1.5, ease: "easeInOut" }
                });

                if (!isActive) break;

                // "Click" effect
                await crosshairControls.start({ scale: 0.8, transition: { duration: 0.1 } });
                await crosshairControls.start({ scale: 1, transition: { duration: 0.1 } });

                // Drop pin
                pinControls.start({
                    opacity: 1, scale: 1, y: 0,
                    transition: { type: "spring", stiffness: 400, damping: 15 }
                });

                // Emit Ripple
                rippleControls.start({
                    opacity: [0.8, 0],
                    scale: [0.5, 3],
                    transition: { duration: 2, ease: "easeOut" }
                });

                await new Promise(r => setTimeout(r, 3000));
            }
        };

        sequence();
        return () => { isActive = false; };
    }, [crosshairControls, pinControls, rippleControls]);

    return (
        <div className="relative h-[320px] w-full max-w-sm mx-auto overflow-hidden rounded-3xl bg-surface p-7 shadow-2xl border border-black/5">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />

            {/* Top Header */}
            <div className="relative z-10 flex items-center justify-between mb-4">
                <h4 className="font-bold text-xs text-slate-500 tracking-widest uppercase">Agent Network</h4>
                <div className="text-[10px] font-bold px-2 py-1 rounded bg-accent/20 text-blue-600 uppercase tracking-widest">Active</div>
            </div>

            <div className="relative w-full h-[75%] mt-2 bg-gradient-to-tr from-black/5 to-transparent rounded-2xl overflow-hidden border border-black/5 box-border">
                {/* The target node location based on percent */}

                {/* Overlay Pin */}
                <div className="absolute top-[45%] left-[70%] -translate-x-1/2 -translate-y-full z-20">
                    <motion.div animate={pinControls} className="text-[hsl(var(--accent))] drop-shadow-[0_0_12px_rgba(0,255,255,0.7)]">
                        <MapPin size={36} fill="currentColor" strokeWidth={1} />
                    </motion.div>
                </div>

                {/* Ripple Effect */}
                <div className="absolute top-[45%] left-[70%] -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div animate={rippleControls} className="w-20 h-20 rounded-full border border-[hsl(var(--accent))] absolute -inset-10 m-auto" />
                </div>

                {/* Crosshair Object */}
                <motion.div
                    animate={crosshairControls}
                    className="absolute z-30 w-10 h-10 -ml-5 -mt-5 flex items-center justify-center opacity-40 mix-blend-multiply"
                >
                    <div className="absolute w-full h-[1px] bg-black" />
                    <div className="absolute h-full w-[1px] bg-black" />
                    <div className="absolute w-4 h-4 border border-black rounded-full" />
                </motion.div>
            </div>
        </div>
    );
}
