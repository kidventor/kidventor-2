"use client";

import { motion } from "framer-motion";
import KnowledgeExplorer from "../knowledge/KnowledgeExplorer";
import { VocabularyItem } from "@/types/lesson";
import { getKnowledge } from "@/data/academy/knowledge";


type VocabularyCardProps = {
  words: VocabularyItem[];
};



export default function VocabularyCard({
  words,
}: VocabularyCardProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className="mt-10"
    >
      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-3xl">

            📚

          </div>

          <div>

            <h2 className="text-2xl font-black text-cyan-300">
              Explorer Vocabulary
            </h2>

            <p className="text-gray-300">
              Learn these important computer words before starting your mission.
            </p>

          </div>

        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

  {words.map((item, index) => {

  const knowledge = getKnowledge(item.knowledgeId as any);

  return (

    <KnowledgeExplorer
      key={knowledge.id}
      knowledgeId={knowledge.id}
      title={knowledge.title}
      image={knowledge.heroImage}
      meaning={knowledge.meaning}
      related={knowledge.related}
    >

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: index * 0.08,
        }}
        whileHover={{
          scale: 1.05,
        }}
        className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-lg transition hover:border-cyan-400 hover:bg-cyan-500/10"
      >

        <div className="mb-3 text-5xl">
          📚
        </div>

        <h3 className="text-xl font-black text-white">
          {knowledge.title}
        </h3>

        <p className="mt-2 text-cyan-300">
          Tap to Explore →
        </p>

      </motion.div>

    </KnowledgeExplorer>

  );

})}

        </div>

      </div>

    </motion.section>

  );

}