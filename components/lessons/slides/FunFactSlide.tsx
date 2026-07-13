"use client";

import FunFactCard from "@/components/academy/cards/FunFactCard";

type FunFactSlideProps = {
  fact: string;
};

export default function FunFactSlide({
  fact,
}: FunFactSlideProps) {

  return (

    <FunFactCard
      fact={fact}
    />

  );

}