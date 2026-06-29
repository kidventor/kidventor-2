"use client";

import { motion } from "framer-motion";

type LessonSection = {
  id: string;
  heading: string;
  body: string;
  tip: string;
};

type LessonContentProps = {
  content: LessonSection[];
};

export default function LessonContent({
  content,
}: LessonContentProps) {
  return (
    <section className="mt-12">

      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white">
          📖 Lesson Content
        </h2>

        <p className="mt-2 text-gray-400">
          Read each section carefully before moving to the next one.
        </p>
      </div>

      {/* Lesson Sections */}
      <div className="space-y-8">

        {content.map((section, index) => (

          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <h3 className="text-2xl font-black text-cyan-400">
              {section.heading}
            </h3>

            <p className="mt-5 leading-8 text-lg text-gray-300">
              {section.body}
            </p>

            <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

              <h4 className="font-bold text-cyan-400">
                💡 Remember
              </h4>

              <p className="mt-2 text-gray-300">
                {section.tip}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}