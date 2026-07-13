"use client";

import { useExplorerStore } from "@/store/explorerStore";

export default function ExplorerNotebook() {

  const discovered = useExplorerStore(
    (state) => state.discovered
  );

  return (

    <div className="rounded-3xl bg-slate-900 p-8">

      <h2 className="text-3xl font-black text-cyan-300">

        📖 Explorer Notebook

      </h2>

      <p className="mt-2 text-gray-300">

        Discoveries:

        {" "}

        {discovered.length}

      </p>

      <div className="mt-6 space-y-3">

        {discovered.map((item) => (

          <div
            key={item}
            className="rounded-xl bg-cyan-500/10 p-4"
          >

            ✅ {item}

          </div>

        ))}

      </div>

    </div>

  );

}