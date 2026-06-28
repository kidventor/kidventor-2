"use client";

import { motion } from "framer-motion";
import ModuleCard from "./ModuleCard";

const modules = [
  {
    emoji: "🖥",
    title: "Computer Hardware",
    lessons: 12,
    color: "from-cyan-500 to-blue-600",
  },
  {
    emoji: "💾",
    title: "Computer Software",
    lessons: 10,
    color: "from-purple-500 to-pink-600",
  },
  {
    emoji: "🪟",
    title: "Operating System",
    lessons: 8,
    color: "from-emerald-500 to-green-600",
  },
  {
    emoji: "🌐",
    title: "Internet Basics",
    lessons: 14,
    color: "from-orange-500 to-red-500",
  },
  {
    emoji: "🔒",
    title: "Computer Safety",
    lessons: 9,
    color: "from-yellow-500 to-amber-500",
  },
  {
    emoji: "💻",
    title: "Coding Basics",
    lessons: 15,
    color: "from-indigo-500 to-violet-600",
  },
];

// Simple animation variants for a smooth cascade entry
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Subtle time difference between each card appearance
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function ModuleGrid() {
  return (
    <section className="mt-16 w-full max-w-7xl mx-auto px-4 sm:px-6">

      {/* Grid Header Info */}
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white tracking-tight">
          Learning Modules
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-400">
          Choose any module to begin your adventure.
        </p>
      </div>

      {/* Staggered Animated Grid Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {modules.map((module) => (
          <motion.div key={module.title} variants={itemVariants}>
            <ModuleCard {...module} />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}