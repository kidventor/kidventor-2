"use client";

import { useEffect, useState } from "react";
import { useRecognitionStore } from "@/components/store/recognitionStore";
import { keyboardMission } from "@/components/practical/keyboardMission";
import {
  ArrowDown,
  CloudLightning,
  ImageOff,
} from "lucide-react";

export default function DropCanvas() {
  const selectedAnswer =
    useRecognitionStore(
      (state) => state.selectedAnswer
    );

  const selectAnswer =
    useRecognitionStore(
      (state) => state.selectAnswer
    );

  const celebrating =
    useRecognitionStore(
      (state) => state.celebrating
    );

  const startNewMission =
    useRecognitionStore(
      (state) => state.startNewMission
    );

  const [isDragActive, setIsDragActive] =
    useState(false);

  const [imageError, setImageError] =
    useState(false);

  const [displayImage, setDisplayImage] =
    useState<string | null>(null);

  const [displayTitle, setDisplayTitle] =
    useState<string | null>(null);

  useEffect(() => {

    if (!celebrating) return;

    const timer = setTimeout(() => {

      startNewMission();

      setDisplayImage(null);

      setDisplayTitle(null);

      setImageError(false);

    }, 3000);

    return () => clearTimeout(timer);

  }, [
    celebrating,
    startNewMission,
  ]);

  const handleDragOver = (
    e: React.DragEvent<HTMLDivElement>
  ) => {

    e.preventDefault();

  };

  const handleDragEnter = (
    e: React.DragEvent<HTMLDivElement>
  ) => {

    e.preventDefault();

    setIsDragActive(true);

  };

  const handleDragLeave = (
    e: React.DragEvent<HTMLDivElement>
  ) => {

    e.preventDefault();

    setIsDragActive(false);

  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>
  ) => {

    e.preventDefault();

    setIsDragActive(false);

    const keyId =
      e.dataTransfer.getData(
        "keyboardKey"
      );

    if (!keyId) return;

    const droppedTask =
      keyboardMission.missions
        .flatMap(
          (mission) =>
            mission.tasks
        )
        .find(
          (task) =>
            task.id === keyId
        );

    if (!droppedTask) return;

    // Cache image BEFORE store updates
    setDisplayImage(
      droppedTask.image
    );

    setDisplayTitle(
      droppedTask.title
    );

    setImageError(false);

    // Validate answer
    selectAnswer(keyId);

  };

  return (

    <div
      className="
      h-[500px]
      w-full
      rounded-2xl
      border
      border-cyan-500/20
      bg-slate-950/40
      p-6
      backdrop-blur-md
      shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]
      "
    >

      <div
        className="
        flex
        items-center
        gap-2
        "
      >

        <CloudLightning
          className="
          h-5
          w-5
          text-cyan-400
          "
        />

        <h3
          className="
          text-sm
          font-black
          uppercase
          tracking-wider
          text-cyan-300
          "
        >

          Drop Zone Canvas

        </h3>

      </div>

      <div

        onDragOver={handleDragOver}

        onDragEnter={handleDragEnter}

        onDragLeave={handleDragLeave}

        onDrop={handleDrop}

        className={`

        mt-4
        flex
        h-[410px]
        flex-col
        items-center
        justify-center
        rounded-xl
        border-2
        border-dashed
        p-6
        transition-all
        duration-300

        ${

          celebrating

            ? "border-emerald-400 bg-emerald-950/20 shadow-[0_0_30px_rgba(52,211,153,0.15)]"

            : isDragActive

            ? "border-amber-400 bg-slate-900/40 scale-[0.99] shadow-[0_0_30px_rgba(251,191,36,0.1)]"

            : "border-slate-800 bg-slate-950/20 hover:border-cyan-500/40"

        }

        `}
      >

        <div

          className={`

          mb-4
          text-cyan-400
          transition-transform
          duration-300

          ${

            isDragActive

              ? "scale-125 animate-bounce"

              : "animate-pulse"

          }

          `}
        >

          <ArrowDown
            className="
            h-10
            w-10
            "
          />

        </div>

        <div
          className="
          flex
          h-32
          items-center
          justify-center
          "
        >

          {

            displayImage &&
            !imageError

            ?

            <img

              key={displayImage}

              src={displayImage}

              alt={
                displayTitle ??
                "Dropped Key"
              }

              onError={() =>
                setImageError(true)
              }

              className={`

              h-28
              object-contain
              drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]

              ${

                celebrating

                  ? "animate-bounce"

                  : ""

              }

              `}

            />

            :

            imageError

            ?

            <div
              className="
              flex
              flex-col
              items-center
              gap-2
              rounded-xl
              border
              border-slate-800
              bg-slate-900/50
              p-4
              text-slate-500
              "
            >

              <ImageOff
                className="
                h-8
                w-8
                "
              />

              <span
                className="
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                "
              >

                Image Error

              </span>

            </div>

            :

            <img

              src="/images/keyboard/keyboard-outline.webp"

              alt="Keyboard"

              className="
              h-28
              object-contain
              opacity-20
              grayscale
              "

            />

          }

        </div>

        <h3
          className="
          mt-6
          text-center
          text-xl
          font-black
          tracking-tight
          text-white
          "
        >

          {

            celebrating

              ? "🎉 Mission Complete!"

              : isDragActive

              ? "Drop it now!"

              : displayImage

              ? "Checking your answer..."

              : "Drag the correct key here"

          }

        </h3>

        <p
          className="
          mt-1
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-slate-400
          "
        >

          {

            displayTitle

              ? `Selected: ${displayTitle}`

              : "Waiting for inputs..."

          }

        </p>

      </div>

    </div>

  );

}