"use client";

type MissionSidebarProps = {
  current: number;
  total: number;
};

export default function MissionSidebar({
  current,
  total,
}: MissionSidebarProps) {

  const percent =
    Math.round(((current + 1) / total) * 100);

  return (

    <div className="sticky top-24 rounded-3xl bg-[#08131F] p-6 shadow-xl">

      <div className="flex flex-col items-center">

        <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border-8 border-cyan-400">

          <span className="text-3xl font-black text-cyan-300">

            {percent}%

          </span>

        </div>

        <p className="font-black tracking-widest text-cyan-300">

          MISSION

        </p>

        <p className="mb-8 text-gray-400">

          Progress

        </p>

        <div className="space-y-4">

          {Array.from({
            length: total,
          }).map((_, index) => (

            <div
              key={index}
              className={`h-5 w-5 rounded-full ${
                index <= current
                  ? "bg-cyan-400"
                  : "bg-slate-700"
              }`}
            />

          ))}

        </div>

      </div>

    </div>

  );

}