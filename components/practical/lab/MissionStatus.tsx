"use client";

export default function MissionStatus() {
  return (
    <aside className="space-y-6">

      {/* Professor Assistant */}

    

      {/* Current Mission */}

      <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-6">

        <p className="text-sm font-black uppercase tracking-wider text-cyan-400">
          Current Mission
        </p>

        <h3 className="mt-4 text-3xl font-black text-white">
          Find the
          <span className="text-yellow-400"> SPACEBAR</span>
        </h3>

        <p className="mt-4 text-xl text-yellow-400 font-bold">
          ⭐ +20 XP
        </p>

      </div>

      {/* Next Mission */}

      <div className="rounded-3xl border border-purple-500/30 bg-slate-900 p-6">

        <p className="text-sm font-black uppercase tracking-wider text-purple-400">
          Next Mission (Locked)
        </p>

        <h3 className="mt-4 text-3xl font-black text-white">
          🖱 Mouse Recognition
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          Identify mouse buttons and their uses.
        </p>

      </div>

      {/* Hint */}

      <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-6">

        <p className="text-xl font-black text-cyan-300">
          💡 Tip
        </p>

        <p className="mt-4 leading-8 text-gray-300">
          The Spacebar is the longest key on the keyboard.
        </p>

      </div>

    </aside>
  );
}