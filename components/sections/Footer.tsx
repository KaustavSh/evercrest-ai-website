"use client";

import MagneticButton from "@/components/ui/MagneticButton";

const PLANS = [
    {
        name: "Build",
        price: "Custom",
        desc: "One-off custom AI automation or internal saas tool.",
        features: ["Process Audit", "Workflow Architecture", "n8n / Code Deployment", "API Integration", "30-day Support"],
        popular: false,
        cta: "Request Quote"
    },
    {
        name: "Operate",
        price: "Retainer",
        desc: "Continuous automation expansion and voice agent management.",
        features: ["Everything in Build", "Dedicated Engineer", "Unlimited Workflows", "24/7 Voice Agent Hosting", "Priority Support"],
        popular: true,
        cta: "Book an Audit"
    },
    {
        name: "Scale",
        price: "Enterprise",
        desc: "Full infrastructure for agencies and high-volume operations.",
        features: ["Everything in Operate", "White-label Options", "On-Prem Deployment", "Custom Fine-tuning", "SLA Guarantee"],
        popular: false,
        cta: "Contact Sales"
    }
];

export default function Footer() {
    return (
        <div className="relative w-full z-40 bg-[hsl(var(--surface))]">
            {/* Membership Section */}
            <section className="py-24 md:py-32 lg:py-40 bg-[hsl(var(--surface))] text-[hsl(var(--surface-foreground))] rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-10 shadow-2xl">
                <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
                    <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
                        <h2 className="text-[clamp(2.5rem,8vw,4rem)] font-bold tracking-tighter mb-4 md:mb-6 leading-tight">Partner with Evercrest AI</h2>
                        <p className="opacity-60 text-lg md:text-xl">Choose an engagement model tailored to your operational velocity.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                        {PLANS.map((plan, i) => (
                            <div
                                key={i}
                                className={`flex flex-col rounded-[2.5rem] p-8 md:p-10 border transition-transform duration-500 ${plan.popular ? 'bg-[hsl(var(--primary))] text-[hsl(var(--foreground))] border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.3)] md:scale-105 py-14 hover:scale-[1.07]' : 'bg-transparent border-black/10 hover:border-black/20 hover:-translate-y-2'}`}
                            >
                                {plan.popular && (
                                    <div className="mb-6 flex justify-center md:justify-start">
                                        <span className="bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-3xl font-bold mb-3 tracking-tight">{plan.name}</h3>
                                <div className="text-sm opacity-60 mb-8 h-12 leading-relaxed">{plan.desc}</div>

                                <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-current opacity-20">
                                    <div className="text-3xl md:text-4xl font-bold tracking-tighter">{plan.price}</div>
                                </div>

                                <ul className="flex flex-col gap-5 mb-12 flex-1">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start md:items-center gap-3 md:gap-4 text-[14px] md:text-[15px] font-medium">
                                            <div className={`mt-1.5 md:mt-0 min-w-2 w-2 h-2 rounded-full shadow-sm ${plan.popular ? 'bg-accent shadow-[0_0_8px_rgba(212,175,55,0.7)]' : 'bg-black/30'}`} />
                                            <span className={plan.popular ? 'opacity-90' : 'opacity-80'}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {plan.popular ? (
                                    <MagneticButton className="w-full flex justify-center text-base py-4">
                                        {plan.cta}
                                    </MagneticButton>
                                ) : (
                                    <button className="w-full py-4 rounded-full font-semibold border-2 border-current opacity-60 hover:opacity-100 hover:bg-black/5 transition-all flex items-center justify-center gap-2 text-sm tracking-wide">
                                        {plan.cta}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Footer */}
            <footer className="bg-[hsl(var(--primary))] text-[hsl(var(--foreground))] rounded-t-[2.5rem] md:rounded-t-[4rem] px-6 py-20 md:py-32 -mt-10 md:-mt-16 relative z-0 overflow-hidden">
                {/* Abstract Background element */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-16 relative z-10 pt-10 md:pt-16">

                    <div className="max-w-md">
                        <div className="text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8 flex items-center gap-1">
                            Evercrest AI<span className="text-accent">.</span>
                        </div>
                        <p className="text-white/50 text-sm md:text-base leading-relaxed mb-10 md:mb-12">
                            We engineer bespoke AI architectures that automate your most complex workflows—running your operations on autopilot so you can focus on growth.
                            <br /><span className="text-white/80 font-medium italic mt-2 block">Stop headcount. Start systems.</span>
                        </p>
                        <div className="flex gap-6">
                            {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
                                <a key={social} href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-6">
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-md shadow-2xl">
                            <div className="relative flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                            </div>
                            <span className="text-xs font-mono font-medium text-white/80 uppercase tracking-wider">System Operational</span>
                        </div>
                        <div className="text-white/30 text-xs font-mono">
                            &copy; {new Date().getFullYear()} Evercrest AI. All rights reserved.
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
}
