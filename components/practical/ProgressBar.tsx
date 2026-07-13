
{/*
"use client";

import { useAssemblyStore } from "@/store/assemblyStore";

export default function ProgressBar() {

  const installed = useAssemblyStore(
    (state) => state.installedParts
  );

  const percent =
    (installed.length / 3) * 100;

  return (

    <div className="mt-8">

      <div className="mb-3 flex justify-between">

        <span className="font-bold">

          Progress

        </span>

        <span>

          {percent}%

        </span>

      </div>

      <div className="h-5 overflow-hidden rounded-full bg-slate-800">

        <div

          className="h-full rounded-full bg-cyan-400 transition-all duration-700"

          style={{

            width: `${percent}%`,

          }}

        />

      </div>

    </div>

  );

}

*/}