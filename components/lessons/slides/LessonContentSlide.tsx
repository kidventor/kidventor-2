"use client";

import { LessonContent as LessonContentType } from "@/types/lesson";

type LessonContentSlideProps = {
  content: LessonContentType;
};

export default function LessonContentSlide({
  content,
}: LessonContentSlideProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

      <span className="rounded-full bg-cyan-500 px-4 py-1 text-sm font-bold">
        Step
      </span>

      <h2 className="mt-5 text-3xl font-black text-cyan-300">
        {content.heading}
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-300">
        {content.body}
      </p>

      {content.image && (

        <div className="mt-8 flex justify-center">

          <img
            src={content.image}
            alt={content.heading}
            className="max-h-[340px] object-contain"
          />

        </div>

      )}

      <div className="mt-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-6">

        <h3 className="font-black text-cyan-300">
          💡 Remember
        </h3>

        <p className="mt-3 text-gray-300">
          {content.tip}
        </p>

      </div>

      <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6">

        <h3 className="font-black text-yellow-300">
          🎯 Mini Activity
        </h3>

        <p className="mt-3 text-gray-300">
          {content.activity}
        </p>

      </div>

    </div>
  );
}