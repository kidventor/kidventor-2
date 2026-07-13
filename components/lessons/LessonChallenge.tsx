"use client";

import { useState } from "react";
import ProfessorReaction
from "@/components/academy/characters/ProfessorReaction";

type Question = {
  id: number;
  type: "multiple-choice";
  question: string;
  options: string[];
  answer: number;
};

type LessonChallengeProps = {
  lessonId: string;

  title: string;

  instruction: string;

  rewardXP: number;

  rewardBadge: string;

  buttonText: string;

  completed: boolean;

  questions: Question[];

  onCompleted: () => void;
};

export default function LessonChallenge({
  title,
  instruction,
  rewardXP,
  rewardBadge,
  questions,
  onCompleted,
}: LessonChallengeProps) {

  const [current, setCurrent] = useState(0);

const [selected, setSelected] = useState<number | null>(null);

const [score, setScore] = useState(0);

const [lives, setLives] = useState(3);

const [finished, setFinished] = useState(false);

const [message, setMessage] = useState("");

const [answerStatus, setAnswerStatus] = useState<
  "correct" | "wrong" | null
>(null);
const question = questions[current];

function nextQuestion() {

  if (selected === null) return;

  let newScore = score;
  let newLives = lives;

  if (selected === question.answer) {

    newScore++;

    setScore(newScore);

setAnswerStatus("correct");

setMessage("🎉 Excellent! Professor Pixel is proud of you!");

  } else {

    newLives--;

    setLives(newLives);

setAnswerStatus("wrong");

setMessage(
  `🤔 Nice try! The correct answer is "${question.options[question.answer]}".`
);

  }

  setTimeout(() => {

    if (newLives <= 0) {

      setFinished(true);

      return;

    }

    if (current === questions.length - 1) {

      setFinished(true);

      onCompleted();

      return;

    }

    setCurrent(current + 1);

    setSelected(null);

    setMessage("");
setAnswerStatus(null);

  }, 1800);

}

  if (finished) {

    return (

      <div className="mt-10 rounded-3xl bg-gradient-to-br from-cyan-900 to-slate-900 p-10 text-center shadow-xl">

        <h2 className="text-4xl font-black text-cyan-300">

          🎉 Mission Complete!

        </h2>

        <div className="mt-8">

  <div className="text-5xl">

    {"⭐".repeat(score)}

  </div>

  <p className="mt-5 text-2xl text-white">

    Mission Score

  </p>

  <p className="text-6xl font-black text-yellow-300">

    {score} / {questions.length}

  </p>

  <p className="mt-4 text-xl text-cyan-200">

    Accuracy: {Math.round((score / questions.length) * 100)}%

  </p>

  <div className="mt-8 space-y-3">

    <p className="text-xl text-cyan-200">

      +{rewardXP} XP Earned

    </p>

    <p className="text-xl text-yellow-300">

      🏅 Badge Unlocked: {rewardBadge}

    </p>

  </div>

</div>

</div>

    );

  }

  return (

    <section className="mt-12 rounded-3xl bg-[#08131F] p-8 shadow-xl">

      <h2 className="text-3xl font-black text-cyan-300">

        {title}

      </h2>

      <p className="mt-2 text-gray-300">

        {instruction}

      </p>

      <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-800">

  <div
    className="h-full rounded-full bg-cyan-400 transition-all duration-700"
    style={{
      width: `${((current + 1) / questions.length) * 100}%`,
    }}
  />

</div>

<div className="mt-6 flex items-center justify-between">

  <span className="rounded-xl bg-cyan-500/20 px-5 py-2 font-bold text-cyan-300">

    Question {current + 1} / {questions.length}

  </span>

  <div className="text-3xl">

    {"❤️".repeat(lives)}

  </div>

</div>

<div className="mt-8 rounded-3xl bg-slate-900 p-8">

<h3 className="text-3xl font-black leading-relaxed text-white">

{question.question}

</h3>

</div>

<ProfessorReaction

show={message!==""}

correct={answerStatus==="correct"}

message={message}

/>

<div className="mt-8 space-y-5">

  {question.options.map((option, index) => (

    <button
      key={index}
      onClick={() => setSelected(index)}
      disabled={selected !== null}
className={`
w-full
rounded-3xl
border-2
p-6
text-left
text-xl
font-bold
transition-all
duration-500

${
selected===index

? answerStatus==="correct"

? "border-green-400 bg-green-500/20 scale-105 shadow-2xl"

: answerStatus==="wrong"

? "border-red-400 bg-red-500/20 animate-pulse"

: "border-cyan-400 bg-cyan-500/20"

: "border-slate-700 bg-slate-800 hover:border-cyan-300 hover:scale-[1.02]"
}
`}
    >

      <div className="flex items-center gap-5">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 font-black text-black">

          {String.fromCharCode(65 + index)}

        </div>

        <span>

          {option}

        </span>

      </div>

    </button>

  ))}

</div>
      <div className="mt-8 flex justify-end">

        <button

          onClick={nextQuestion}

          disabled={selected === null}

          className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-4 text-xl font-black text-black shadow-xl transition hover:scale-105 disabled:opacity-40"

        >

          {current === questions.length - 1

            ? "Finish Mission"

            : "Next Question →"}

        </button>

      </div>

    </section>

  );

}