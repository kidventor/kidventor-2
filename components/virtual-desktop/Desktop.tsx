"use client";

import { useState } from "react";

import DesktopWallpaper from "./DesktopWallpaper";
import DesktopIcon from "./DesktopIcon";
import DesktopWindow from "./DesktopWindow";
import Taskbar from "./Taskbar";
import KeyboardApp from "@/components/apps/KeyboardApp";

export default function Desktop() {

  const [windowOpen, setWindowOpen] =
    useState<string | null>(null);

  return (
    <section className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0a1327] shadow-2xl">

      <DesktopWallpaper>

        <div className="grid grid-cols-2 gap-8 p-8 md:grid-cols-4">

          <div
            onClick={() => setWindowOpen("computer")}
          >
            <DesktopIcon
              emoji="🖥"
              title="Computer"
            />
          </div>

          {
  windowOpen === "keyboard" && (

    <DesktopWindow
      emoji="⌨️"
      title="Keyboard Lab"
      onClose={() => setWindowOpen(null)}
    >

      <KeyboardApp />

    </DesktopWindow>

  )
}

          <div
  onClick={() => setWindowOpen("keyboard")}
>
  <DesktopIcon
    emoji="⌨️"
    title="Keyboard"
  />
</div>

          <DesktopIcon
            emoji="🖱️"
            title="Mouse"
          />

          <DesktopIcon
            emoji="🗑"
            title="Recycle Bin"
          />

        </div>

        {windowOpen === "computer" && (

          <DesktopWindow
            emoji="🖥"
            title="Computer"
            onClose={() => setWindowOpen(null)}
          >

            <h3 className="text-3xl font-black text-white">

              Welcome to Your Virtual Computer

            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-300">

              Soon you will learn how to power on a computer,
              use the desktop, open programs,
              type with the keyboard and use the mouse.

            </p>

          </DesktopWindow>

        )}

      </DesktopWallpaper>

      <Taskbar />

    </section>
  );
}