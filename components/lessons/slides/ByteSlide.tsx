"use client";

import ByteSpeech from "@/components/academy/characters/ByteSpeech";

type ByteSlideProps = {
  speech: string;
};

export default function ByteSlide({
  speech,
}: ByteSlideProps) {

  return (

    <ByteSpeech
      speech={speech}
    />

  );

}