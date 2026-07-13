"use client";

import { AssemblyPart } from "@/types/assembly";
import { useAssemblyStore } from "@/store/assemblyStore";

type Props = {
  parts: AssemblyPart[];
};

export default function AssemblyShelf({ parts }: Props) {

  const installPart = useAssemblyStore(
    (state) => state.installPart
  );

  return (
    <div className="rounded-3xl bg-slate-900 p-8">

      <h2 className="mb-8 text-3xl font-black text-cyan-300">
        Available Parts
      </h2>

      <div className="space-y-5">

        {parts.map((part) => (

          <button
            key={part.id}
            onClick={() => installPart(part.id)}
            className="w-full rounded-2xl border border-white/10 bg-slate-800 p-5"
          >

            <img
              src={part.image}
              alt={part.title}
              className="mx-auto h-24 object-contain"
            />

            <h3 className="mt-3 text-center text-xl font-black">
              {part.title}
            </h3>

          </button>

        ))}

      </div>

    </div>
  );
}