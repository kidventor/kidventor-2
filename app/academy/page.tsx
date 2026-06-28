import AcademyHero from "@/components/academy/AcademyHero";
import ContinueLearning from "@/components/academy/ContinueLearning";
import DashboardCards from "@/components/academy/DashboardCards";

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <AcademyHero />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <ContinueLearning />

        <DashboardCards />
      </div>
    </main>
  );
}