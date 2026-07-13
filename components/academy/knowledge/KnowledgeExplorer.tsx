"use client";

import { useState } from "react";

import KnowledgeScene from "./KnowledgeScene";
import { useExplorerStore } from "@/store/explorerStore";
import { KnowledgeId } from "@/data/academy/knowledge";

type RelatedItem = {
  id: string;
  knowledgeId: string;
};

type KnowledgeExplorerProps = {
  knowledgeId: KnowledgeId;
  title: string;
  image: string;
  meaning: string;
  related?: RelatedItem[];
  children: React.ReactNode;
};

export default function KnowledgeExplorer({
  knowledgeId,
  title,
  image,
  meaning,
  related = [],
  children,
}: KnowledgeExplorerProps) {

  const [open, setOpen] = useState(false);

  const discover = useExplorerStore(
    (state) => state.discover
  );

  return (
    <>
      <button
        onClick={() => {
          discover(knowledgeId);
          setOpen(true);
        }}
        className="w-full"
      >
        {children}
      </button>

      <KnowledgeScene
        open={open}
        knowledgeId={knowledgeId}
        onClose={() => setOpen(false)}
      />
    </>
  );
}