import LessonViewer from "@/components/lessons/LessonViewer";

import { partsOfComputerLesson } from "@/data/academy/hardware/parts-of-a-computer";

export default function LessonPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <LessonViewer lesson={partsOfComputerLesson} />

    </main>
  );
}