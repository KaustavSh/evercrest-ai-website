"use client";

import React, { useState, useEffect, useRef } from "react";

const STAGES = [
    "Initializing Voice Agent (Evercrest Core)...",
    "[OK] Voice synthesis module loaded.",
    "Dialing lead: +1 (555) 019-2831...",
    "[CONNECTED] Analyzing real-time sentiment...",
    "[LIVE] Responding to intent: 'Pricing Query'",
    "Extracting entity: Budget > $5k",
    "Booking discovery call on calendar...",
    "[SUCCESS] Meeting confirmed for Thursday 2 PM.",
    "Closing connection. Agent returning to pool."
];

export default function TelemetryTypewriter() {
    const [lines, setLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentLineIndex >= STAGES.length) {
            const reset = setTimeout(() => {
                setLines([]);
                setCurrentLineIndex(0);
                setCurrentCharIndex(0);
            }, 3000);
            return () => clearTimeout(reset);
        }

        const currentString = STAGES[currentLineIndex];
        if (currentCharIndex < currentString.length) {
            const timeout = setTimeout(() => {
                setLines((prev) => {
                    const newLines = [...prev];
                    if (newLines[currentLineIndex] === undefined) {
                        newLines[currentLineIndex] = "";
                    }
                    newLines[currentLineIndex] = currentString.substring(0, currentCharIndex + 1);
                    return newLines;
                });
                setCurrentCharIndex((prev) => prev + 1);
            }, Math.random() * 20 + 20); // typing speed
            return () => clearTimeout(timeout);
        } else {
            const nextLineTimeout = setTimeout(() => {
                setCurrentLineIndex((prev) => prev + 1);
                setCurrentCharIndex(0);
            }, 800);
            return () => clearTimeout(nextLineTimeout);
        }
    }, [currentCharIndex, currentLineIndex]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <div className="relative flex h-[320px] w-full max-w-sm mx-auto flex-col overflow-hidden rounded-3xl bg-[#0a0a0c] border border-white/10 p-7 shadow-2xl font-mono text-sm text-[#4af626] tracking-tight">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                    <span className="text-white/40 font-semibold uppercase text-xs tracking-widest">Voice Telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-accent uppercase">Live</span>
                </div>
            </div>

            {/* Terminal View */}
            <div ref={containerRef} className="flex-1 overflow-y-auto flex flex-col justify-end pb-2 custom-scrollbar">
                <div className="space-y-1.5 opacity-90">
                    {lines.map((line, i) => (
                        <div key={i} className="leading-relaxed opacity-90 flex items-start gap-3">
                            <span className="text-white/30 text-xs mt-0.5 shrink-0">
                                [{new Date().toISOString().substring(11, 19)}]
                            </span>
                            <span className="break-words">{line}</span>
                        </div>
                    ))}
                    {currentLineIndex < STAGES.length && (
                        <div className="inline-block w-2h-[1.2em] align-middle bg-accent animate-pulse ml-2 mb-0.5" />
                    )}
                </div>
            </div>
        </div>
    );
}
