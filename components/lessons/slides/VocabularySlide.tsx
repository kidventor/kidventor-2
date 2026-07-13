"use client";

import VocabularyCard from "@/components/academy/cards/VocabularyCard";
import { VocabularyItem } from "@/types/lesson";

type VocabularySlideProps = {
  words: VocabularyItem[];
};

export default function VocabularySlide({
  words,
}: VocabularySlideProps) {

  return (

    <VocabularyCard
      words={words}
    />

  );

}