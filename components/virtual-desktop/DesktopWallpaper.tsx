"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function DesktopWallpaper({
  children,
}: Props) {
  return (
    <div
      className="min-h-[550px] bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(135deg,#10264f,#0c6ab8,#23b5d3)",
      }}
    >
      {children}
    </div>
  );
}