"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

export default function HeroStats() {
  return (
    <section className="mx-auto mt-12 mb-20 max-w-7xl px-4 sm:px-6 lg:px-8 select-none">
      {/* Outer Insulated Cyber Casing Container with Glass Backmolding */}
      <div className="relative grid grid-cols-2 gap-6 md:gap-8 rounded-[2.5rem] border-2 border-white/10 bg-[#0B1023]/60 p-6 md:p-10 backdrop-blur-2xl lg:grid-cols-4 shadow-[0_24px_60px_rgba(0,0,0,0.6)] overflow-hidden">
        
        {/* Decorative Grid Line Accents mimicking a high-tech tactical map HUD */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.05),transparent_50%)] pointer-events-none" />
        <div className="absolute top-0 left-1/4 bottom-0 w-px bg-gradient-to-b from-white/10 via-transparent to-transparent hidden lg:block" />
        <div className="absolute top-0 left-1/2 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden lg:block" />
        <div className="absolute top-0 left-3/4 bottom-0 w-px bg-gradient-to-b from-white/10 via-transparent to-transparent hidden lg:block" />

        <StatItem targetNumber={50} suffix="+" label="Premium Courses" badge="📚" neonColor="from-cyan-400 to-blue-500" />
        <StatItem targetNumber={100} suffix="+" label="Interactive Quests" badge="🎮" neonColor="from-yellow-400 to-amber-500" />
        <StatItem targetNumber={20} suffix="+" label="Epic Blueprints" badge="🧪" neonColor="from-pink-500 to-purple-600" />
        <StatItem targetNumber={999} isInfinite suffix="∞" label="Infinite Quests" badge="🚀" neonColor="from-emerald-400 to-teal-500" />

      </div>
    </section>
  );
}

interface StatItemProps {
  targetNumber: number;
  suffix: string;
  label: string;
  badge: string;
  neonColor: string;
  isInfinite?: boolean;
}

function StatItem({ targetNumber, suffix, label, badge, neonColor, isInfinite = false }: StatItemProps) {
  const count = useMotionValue(0);
  // Smooth spring bounce simulation for the numbers ticking upward upon entering view
  const springCount = useSpring(count, { stiffness: 45, damping: 15 });
  const displayCount = useTransform(springCount, (latest) => Math.floor(latest));
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (isInfinite) {
      // For the infinity track, animate the layout scale instead of numeric calculation limits
      animate(count, 100, { duration: 1.5 });
      return;
    }

    // Trigger dynamic count ticker animation natively on execution thread hooks
    const controls = animate(count, targetNumber, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [count, targetNumber, isInfinite]);

  useEffect(() => {
    if (isInfinite) return;
    return displayCount.on("change", (latest) => {
      if (elementRef.current) {
        elementRef.current.textContent = latest.toString() + suffix;
      }
    });
  }, [displayCount, suffix, isInfinite]);

  return (
    <div className="relative group text-center flex flex-col items-center justify-center py-4 px-2 rounded-2xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5">
      
      {/* Floating Mini Quest badge icon */}
      <div className="text-2xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
        {badge}
      </div>

      {/* Gamified Live Number Counter Stack */}
      <div className="relative min-h-[3rem] flex items-center justify-center">
        {isInfinite ? (
          <motion.h2 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${neonColor} tracking-tight`}
          >
            {suffix}
          </motion.h2>
        ) : (
          <h2
            ref={elementRef}
            className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${neonColor} tracking-tight`}
          >
            0{suffix}
          </h2>
        )}

        {/* Hidden underlying neon shadow core */}
        <div className={`absolute inset-0 blur-xl opacity-30 bg-gradient-to-r ${neonColor} pointer-events-none scale-70 group-hover:scale-100 transition-transform duration-300`} />
      </div>

      {/* Subtext HUD Metadata Label Descriptor */}
      <p className="mt-3 text-xs md:text-sm font-black tracking-wide text-gray-400 uppercase group-hover:text-white transition-colors duration-200">
        {label}
      </p>

      {/* Futuristic Level Progress Dot under each cell */}
      <div className="mt-4 flex gap-1 items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <div className="w-8 h-1 rounded-full bg-slate-800 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${neonColor}`} 
          />
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
      </div>

    </div>
  );
}