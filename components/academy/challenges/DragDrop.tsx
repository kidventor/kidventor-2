"use client";

import { useState } from "react";
import SuccessPanel from "./SuccessPanel";

type Item = {
  id: string;
  label: string;
};

type Target = {
  id: string;
  label: string;
  accepts: string;
};

type DragDropData = {
  title: string;
  items: Item[];
  targets: Target[];
};

type DragDropProps = {
  data: DragDropData;
  onSuccess: () => void;
};

export default function DragDrop({
  data,
  onSuccess,
}: DragDropProps) {

  const [placed, setPlaced] = useState<
    Record<string, string>
  >({});

  const [completed, setCompleted] =
    useState(false);

  function handleDrop(
    itemId: string,
    targetId: string
  ) {

    setPlaced((prev) => {

      const updated = {
        ...prev,
        [targetId]: itemId,
      };

      const correct =
        data.targets.every(
          target =>
            updated[target.id] ===
            target.accepts
        );

      if (correct) {

        setCompleted(true);

        setTimeout(() => {
          onSuccess();
        }, 1200);

      }

      return updated;
    });

  }

  return (

    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8">

      <h2 className="text-2xl font-black text-cyan-300">

        {data.title}

      </h2>

      <div className="mt-8 grid grid-cols-2 gap-8">

        {/* Items */}

        <div>

          <h3 className="mb-4 text-lg font-bold">

            Drag Items

          </h3>

          <div className="space-y-3">

            {data.items.map(item => (

              <div

                key={item.id}

                draggable

                onDragStart={(e) =>
                  e.dataTransfer.setData(
                    "item",
                    item.id
                  )
                }

                className="cursor-move rounded-xl border border-white/10 bg-cyan-500/10 p-4"

              >

                {item.label}

              </div>

            ))}

          </div>

        </div>

        {/* Targets */}

        <div>

          <h3 className="mb-4 text-lg font-bold">

            Drop Here

          </h3>

          <div className="space-y-3">

            {data.targets.map(target => (

              <div

                key={target.id}

                onDragOver={(e) =>
                  e.preventDefault()
                }

                onDrop={(e) => {

                  const item =
                    e.dataTransfer.getData(
                      "item"
                    );

                  handleDrop(
                    item,
                    target.id
                  );

                }}

                className="min-h-[80px] rounded-xl border-2 border-dashed border-yellow-500/40 p-4"

              >

                <div className="font-bold">

                  {target.label}

                </div>

                <div className="mt-2 text-green-300">

                  {placed[target.id] &&
                    data.items.find(
                      i =>
                        i.id ===
                        placed[target.id]
                    )?.label}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      <SuccessPanel

        show={completed}

        title="Amazing!"

        message="You assembled it correctly!"

      />

    </div>

  );

}