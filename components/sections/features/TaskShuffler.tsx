"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Workflow, Zap } from "lucide-react";

export default function TaskShuffler() {
    const [cards, setCards] = useState([
        { id: 1, title: "Data Ingestion Pipeline", icon: Database, color: "text-blue-600" },
        { id: 2, title: "Custom Agent Routing", icon: Zap, color: "text-amber-500" },
        { id: 3, title: "SaaS API Integrations", icon: Workflow, color: "text-[hsl(var(--accent))]" },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards((prev) => {
                const newCards = [...prev];
                const last = newCards.pop();
                if (last) newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[320px] w-full max-w-sm mx-auto flex items-center justify-center">
            <AnimatePresence>
                {cards.map((card, index) => {
                    const isFront = index === cards.length - 1;
                    const offset = (cards.length - 1 - index) * 24;
                    return (
                        <motion.div
                            layout
                            key={card.id}
                            initial={{ opacity: 0, scale: 0.8, y: -50 }}
                            animate={{
                                opacity: 1 - (cards.length - 1 - index) * 0.3,
                                y: offset,
                                scale: 1 - (cards.length - 1 - index) * 0.05,
                                zIndex: index,
                            }}
                            exit={{ opacity: 0, scale: 0.8, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 1 }}
                            className="absolute w-full rounded-3xl bg-surface p-8 shadow-2xl border border-black/5 flex flex-col justify-between h-[180px]"
                        >
                            <div className="flex items-center gap-5">
                                <div className={`rounded-2xl bg-black/5 p-4 ${card.color}`}>
                                    <card.icon size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 leading-tight">{card.title}</h4>
                                    <p className="text-sm font-medium text-slate-600 mt-1">Status: Processing</p>
                                </div>
                            </div>
                            <div className="mt-6 h-2 w-full rounded-full bg-black/5 overflow-hidden">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: isFront ? "100%" : "0%" }}
                                    transition={{ duration: 3, ease: "linear" }}
                                    className="h-full bg-accent"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}
