import AcademyHero from "@/components/academy/AcademyHero";
import ContinueLearning from "@/components/academy/ContinueLearning";
import DashboardCards from "@/components/academy/DashboardCards";
import StudentProfile from "@/components/profile/StudentProfile";
import MissionControl from "@/components/dashboard/MissionControl";
import MissionMap from "@/components/dashboard/MissionMap";
import BadgeCabinet from "@/components/profile/BadgeCabinet";
import Desktop from "@/components/virtual-desktop/Desktop";
import ExplorerNotebook from "@/components/notebook/ExplorerNotebook";


export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <AcademyHero />
    <div className="mx-auto max-w-7xl px-6 pt-8">
  <StudentProfile />

<MissionControl />

</div>

<div className="mx-auto max-w-7xl px-6 py-12">
  <ContinueLearning />

  <DashboardCards />

  <ExplorerNotebook />

  <BadgeCabinet />

  <MissionMap />

  <Desktop />
</div>
    </main>
  );
}