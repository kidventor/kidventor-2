"use client";

export default function Clock() {
  const now = new Date();

  return (
    <div className="font-bold text-white">

      {now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}

    </div>
  );
}