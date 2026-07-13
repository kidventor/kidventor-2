"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {

  getKnowledge,

  KnowledgeId,

} from "@/data/academy/knowledge";

type KnowledgeSceneProps = {

  open: boolean;

  knowledgeId: KnowledgeId;

  onClose: () => void;

};

export default function KnowledgeScene({

  open,

  knowledgeId,

  onClose,

}: KnowledgeSceneProps) {

  const [currentKnowledge, setCurrentKnowledge] =

    useState<KnowledgeId>(knowledgeId);

  useEffect(() => {

  setCurrentKnowledge(knowledgeId);

}, [knowledgeId]);
    const knowledge = getKnowledge(currentKnowledge);

  return (

    <AnimatePresence>

      {open && (

        <motion.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          exit={{ opacity: 0 }}

          className="fixed inset-0 z-[999] overflow-y-auto bg-[#020817]"

        >

          <div className="mx-auto max-w-6xl p-10">

            <button

              onClick={onClose}

              className="mb-8 rounded-2xl bg-red-500 px-6 py-3 text-xl font-black"

            >

              ← Return to Mission

            </button>

            <div className="grid gap-12 lg:grid-cols-2">

              <div>

                <img

                  src={knowledge.heroImage}

                  alt={knowledge.title}

                  className="mx-auto w-full max-w-md object-contain"

                />

              </div>

              <div>

                <h1 className="text-5xl font-black text-cyan-300">

                  {knowledge.title}

                </h1>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8">

                  <p className="text-xl leading-10 text-gray-300">

                    {knowledge.meaning}

                  </p>

                </div>

                <div className="mt-6 rounded-3xl bg-cyan-950/40 p-6">

                  <h2 className="text-2xl font-black text-cyan-300">

                    👨‍🏫 Professor Pixel

                  </h2>

                  <p className="mt-4 text-lg leading-9 text-white">

                    {knowledge.professorSpeech}

                  </p>

                </div>

                <div className="mt-6 rounded-3xl bg-yellow-500/10 p-6">

                  <h2 className="text-2xl font-black text-yellow-300">

                    💡 Fun Fact

                  </h2>

                  <p className="mt-4 text-lg text-gray-300">

                    {knowledge.funFact}

                  </p>

                </div>

                <div className="mt-6 rounded-3xl bg-green-500/10 p-6">

                  <h2 className="text-2xl font-black text-green-300">

                    🎯 Try This

                  </h2>

                  <p className="mt-4 text-lg text-gray-300">

                    {knowledge.activity}

                  </p>

                </div>

                <h2 className="mt-10 text-2xl font-black text-cyan-300">

                  Explore More

                </h2>

                <div className="mt-6 grid gap-4">

                  {knowledge.related.map((item) => {

                    const relatedKnowledge =
  getKnowledge(item.knowledgeId as KnowledgeId);

console.log(
  "Current:", knowledge.id,
  "Related:", item.knowledgeId,
  "Found:", relatedKnowledge
);

                    return (
                      

                      <button

                        key={item.id}

                        onClick={() =>

                          setCurrentKnowledge(

                            item.knowledgeId as KnowledgeId

                          )

                        }

                        className="rounded-2xl bg-slate-900 p-5 text-left transition hover:bg-cyan-500/20"

                      >

                        {relatedKnowledge.title}

                      </button>

                    );

                  })}

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}