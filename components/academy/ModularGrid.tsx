"use client";

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

export default function ModuleGrid() {
  return (
    <section className="mt-16">

      <div className="mb-8">

        <h2 className="text-3xl font-black text-white">
          Learning Modules
        </h2>

        <p className="mt-2 text-gray-400">
          Choose any module to begin your adventure.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {modules.map((module) => (
          <ModuleCard
            key={module.title}
            {...module}
          />
        ))}

      </div>

    </section>
  );
}