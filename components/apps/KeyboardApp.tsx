"use client";

export default function KeyboardApp() {
  return (
    <div className="space-y-6">

      <h2 className="text-4xl font-black text-cyan-400">
        ⌨ Keyboard Lab
      </h2>

      <p className="text-lg text-gray-300">
        Welcome to the Keyboard Practice Laboratory.
      </p>

      <div className="grid gap-6 md:grid-cols-3">

        <button className="rounded-3xl bg-cyan-500/10 p-8 hover:bg-cyan-500/20">
          🎮 Keyboard Games
        </button>

        <button className="rounded-3xl bg-cyan-500/10 p-8 hover:bg-cyan-500/20">
          ✍ Typing Practice
        </button>

        <button className="rounded-3xl bg-cyan-500/10 p-8 hover:bg-cyan-500/20">
          📚 Keyboard Lessons
        </button>

      </div>

    </div>
  );
}