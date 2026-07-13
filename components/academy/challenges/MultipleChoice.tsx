"use client";

import { useState } from "react";

type Option = {
  id: string;
  text: string;
};

type MultipleChoiceData = {
  question: string;
  options: Option[];
  correctAnswer: string;
};

type MultipleChoiceProps = {
  data: MultipleChoiceData;
  onSuccess: () => void;
};

export default function MultipleChoice({
  data,
  onSuccess,
}: MultipleChoiceProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  function handleSelect(id: string) {
    if (answered) return;

    setSelected(id);
    setAnswered(true);

    if (id === data.correctAnswer) {
      setTimeout(() => {
        onSuccess();
      }, 1000);
    }
  }

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8">

      <h2 className="text-2xl font-black text-cyan-300">
        {data.question}
      </h2>

      <div className="mt-8 space-y-4">

        {data.options.map((option) => {

          const isCorrect =
            option.id === data.correctAnswer;

          const isSelected =
            selected === option.id;

          let style =
            "border-white/10 hover:border-cyan-400";

          if (answered && isCorrect) {
            style =
              "border-green-500 bg-green-500/20";
          }

          if (
            answered &&
            isSelected &&
            !isCorrect
          ) {
            style =
              "border-red-500 bg-red-500/20";
          }

          return (
            <button
              key={option.id}
              onClick={() =>
                handleSelect(option.id)
              }
              className={`w-full rounded-2xl border p-5 text-left text-lg transition ${style}`}
            >
              {option.text}
            </button>
          );
        })}

      </div>

      {answered && selected !== data.correctAnswer && (
        <p className="mt-6 text-red-300">
          ❌ Not quite. Read the lesson carefully and try again.
        </p>
      )}

    </div>
  );
}