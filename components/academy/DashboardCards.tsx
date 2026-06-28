"use client";

import { motion } from "framer-motion";

const cards = [
  {
    emoji: "📈",
    title: "Overall Progress",
    value: "25%",
    description: "You're making great progress!",
    color: "from-cyan-500 to-blue-600",
  },
  {
    emoji: "🎯",
    title: "Today's Mission",
    value: "Lesson 3",
    description: "Parts of a Computer",
    color: "from-emerald-500 to-green-600",
  },
  {
    emoji: "🏆",
    title: "Latest Badge",
    value: "Explorer",
    description: "Keep learning to unlock more.",
    color: "from-yellow-400 to-orange-500",
  },
];

export default function DashboardCards() {
  return (
    <section className="mt-10">
      <div className="grid gap-6 md:grid-cols-3">

        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -6,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all"
          >
            {/* Background Glow */}
            <div
              className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${card.color} opacity-10 blur-3xl transition-all group-hover:opacity-25`}
            />

            {/* Emoji */}
            <div
              className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color} text-3xl shadow-lg`}
            >
              {card.emoji}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white">
              {card.title}
            </h3>

            {/* Main Value */}
            <p className="mt-3 text-4xl font-black text-cyan-400">
              {card.value}
            </p>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {card.description}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}