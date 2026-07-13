"use client";

export default function ProfessorGuide() {
  return (
    <div className="mb-8 flex items-center gap-6 rounded-3xl border border-cyan-500/20 bg-slate-800/70 p-6">

      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-5xl shadow-lg">
        👨‍🏫
      </div>

      <div>

        <h2 className="text-3xl font-black text-cyan-300">
          Professor Pixel
        </h2>

        <p className="mt-2 text-lg text-gray-300">
          Welcome, Explorer!
        </p>

        <p className="text-gray-400">
          Every practical mission will help you become confident with computers through fun, discovery, and practice.
        </p>

      </div>

    </div>
  );
}