"use client";

import { useState } from "react";

type Pair = {
  left: string;
  right: string;
};

type MatchPairsData = {
  title: string;
  pairs: Pair[];
};

type MatchPairsProps = {
  data: MatchPairsData;
  onSuccess: () => void;
};

export default function MatchPairs({
  data,
  onSuccess,
}: MatchPairsProps) {

  const [matches, setMatches] = useState<
    Record<string, string>
  >({});

  const [selectedLeft, setSelectedLeft] =
    useState("");

  function chooseLeft(left: string) {
    setSelectedLeft(left);
  }

  function chooseRight(right: string) {

    if (!selectedLeft) return;

    setMatches((prev) => ({
      ...prev,
      [selectedLeft]: right,
    }));

    setSelectedLeft("");
  }

  const completed =
    Object.keys(matches).length ===
    data.pairs.length;

  function verify() {

    const correct =
      data.pairs.every(
        pair =>
          matches[pair.left] === pair.right
      );

    if (correct) {
      onSuccess();
    } else {
      alert(
        "Some matches are incorrect. Try again!"
      );
    }
  }

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8">

      <h2 className="text-2xl font-black text-cyan-300">
        {data.title}
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-8">

        {/* Left */}

        <div className="space-y-3">

          {data.pairs.map(pair => (

            <button
              key={pair.left}
              onClick={() =>
                chooseLeft(pair.left)
              }
              className={`w-full rounded-xl border p-4 text-left transition ${
                selectedLeft === pair.left
                  ? "border-cyan-400 bg-cyan-500/20"
                  : "border-white/10"
              }`}
            >
              {pair.left}
            </button>

          ))}

        </div>

        {/* Right */}

        <div className="space-y-3">

          {data.pairs.map(pair => (

            <button
              key={pair.right}
              onClick={() =>
                chooseRight(pair.right)
              }
              className="w-full rounded-xl border border-white/10 p-4 text-left hover:border-yellow-400"
            >
              {pair.right}
            </button>

          ))}

        </div>

      </div>

      <button
        disabled={!completed}
        onClick={verify}
        className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-black text-white disabled:opacity-40"
      >
        Verify Matches
      </button>

    </div>
  );
}