"use client";

import { useEffect } from "react";

type Props = {
  onComplete: () => void;
};

export default function BootScreen({
  onComplete,
}: Props) {

  useEffect(() => {

    const timer = setTimeout(() => {

      onComplete();

    }, 3500);

    return () => clearTimeout(timer);

  }, [onComplete]);

  return (

    <div className="flex min-h-[450px] flex-col items-center justify-center bg-black text-white">

      <div className="animate-pulse text-7xl">

        💻

      </div>

      <h2 className="mt-8 text-3xl font-black">

        KidVentor OS

      </h2>

      <p className="mt-5 text-gray-400">

        Starting Computer...

      </p>

      <div className="mt-10 h-2 w-72 overflow-hidden rounded-full bg-white/10">

        <div className="h-full animate-[loading_3.5s_linear_forwards] bg-cyan-400" />

      </div>

    </div>

  );

}