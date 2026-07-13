"use client";

import { useAssemblyStore } from "@/store/assemblyStore";

export default function AssemblyCanvas() {

  const installedParts = useAssemblyStore(
    (state) => state.installedParts
  );

  return (

    <div className="rounded-3xl border-4 border-dashed border-cyan-500 bg-slate-900 p-12">

      <h2 className="mb-8 text-center text-3xl font-black text-cyan-300">
        🖥 Empty System Unit
      </h2>

      <div className="flex h-[450px] items-center justify-center rounded-3xl border-2 border-dashed border-slate-600">

        <div className="space-y-5">

          {installedParts.length === 0 && (
            <p className="text-gray-400">
              Parts will be installed here...
            </p>
          )}

          {installedParts.map((part) => (
            <div
              key={part}
              className="rounded-xl bg-cyan-500 p-3 font-bold"
            >
              ✅ {part}
            </div>
          ))}

        </div>

      </div>

    </div>

  );
}