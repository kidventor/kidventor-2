"use client";

type Props = {
  onOpenKeyboard: () => void;
};

const missions = [
  {
    id: "keyboard",
    icon: "⌨️",
    title: "Keyboard Recognition",
    description: "Identify important keyboard keys.",
    difficulty: "Easy",
    reward: "+20 XP",
    badge: "Keyboard Rookie",
    playable: true,
  },
  {
    id: "mouse",
    icon: "🖱",
    title: "Mouse Recognition",
    description: "Learn every mouse button and its function.",
    difficulty: "Easy",
    reward: "+20 XP",
    badge: "Mouse Rookie",
    playable: false,
  },
  {
    id: "monitor",
    icon: "🖥",
    title: "Monitor Recognition",
    description: "Identify the parts of a computer monitor.",
    difficulty: "Easy",
    reward: "+20 XP",
    badge: "Monitor Rookie",
    playable: false,
  },
  {
    id: "assembly",
    icon: "🛠",
    title: "Computer Assembly",
    description: "Build your first computer step by step.",
    difficulty: "Medium",
    reward: "+50 XP",
    badge: "Junior Computer Engineer",
    playable: false,
  },
];

export default function MissionBoard({
  onOpenKeyboard,
}: Props) {
  return (
    <div className="mt-10 space-y-10">

      {/* Mission Control */}

      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-slate-900 to-slate-800 p-8">

        <h2 className="text-4xl font-black text-cyan-300">
          🎮 Mission Control
        </h2>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-gray-300">
          Choose a practical mission below.
          Complete each mission to unlock the next challenge,
          earn XP, collect badges and become a Digital Technology Explorer.
        </p>

      </div>

      {/* Missions */}

      <div className="grid gap-8 md:grid-cols-2">

        {missions.map((mission) => (

          <button
            key={mission.id}
            disabled={!mission.playable}
            onClick={() => {
              if (mission.id === "keyboard") {
                onOpenKeyboard();
              }
            }}
            className={`group rounded-3xl border p-7 text-left transition duration-300

            ${
              mission.playable
                ? "border-cyan-400 bg-slate-900 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]"
                : "border-slate-700 bg-slate-900/60 opacity-70"
            }
            `}
          >

            <div className="flex items-center justify-between">

              <span className="text-5xl">
                {mission.icon}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-sm font-bold

                ${
                  mission.playable
                    ? "bg-green-500 text-black"
                    : "bg-slate-700 text-gray-300"
                }
                `}
              >
                {mission.playable ? "READY" : "LOCKED"}
              </span>

            </div>

            <h3 className="mt-5 text-3xl font-black text-cyan-300">
              {mission.title}
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              {mission.description}
            </p>

            <div className="mt-6 space-y-2 text-sm">

              <p>
                ⭐ Difficulty:
                <span className="ml-2 font-bold text-yellow-400">
                  {mission.difficulty}
                </span>
              </p>

              <p>
                🎁 Reward:
                <span className="ml-2 font-bold text-cyan-300">
                  {mission.reward}
                </span>
              </p>

              <p>
                🏅 Badge:
                <span className="ml-2 font-bold text-orange-400">
                  {mission.badge}
                </span>
              </p>

            </div>

            <div className="mt-8">

              {mission.playable ? (

                <div className="rounded-2xl bg-cyan-500 py-3 text-center text-lg font-black text-black transition group-hover:bg-cyan-400">
                  ▶ START MISSION
                </div>

              ) : (

                <div className="rounded-2xl bg-slate-700 py-3 text-center font-bold text-gray-300">
                  🔒 Complete previous mission
                </div>

              )}

            </div>

          </button>

        ))}

      </div>

      {/* Mission Journey */}

      <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8">

        <h2 className="text-3xl font-black text-cyan-300">
          🚀 Your Learning Journey
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-lg">

          <span className="rounded-full bg-cyan-500 px-5 py-3 font-bold text-black">
            ⌨️ Keyboard
          </span>

          <span className="text-3xl">➡️</span>

          <span className="rounded-full bg-slate-700 px-5 py-3">
            🖱 Mouse
          </span>

          <span className="text-3xl">➡️</span>

          <span className="rounded-full bg-slate-700 px-5 py-3">
            🖥 Monitor
          </span>

          <span className="text-3xl">➡️</span>

          <span className="rounded-full bg-slate-700 px-5 py-3">
            🛠 Assembly
          </span>

        </div>

      </div>

    </div>
  );
}