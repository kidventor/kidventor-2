import { mouseMission } from "./mouseMission";


export function getMouseMission(
  missionId: string
) {


  const mission =
    mouseMission.missions.find(
      (mission) =>
        mission.id === missionId
    );


  return mission ?? null;

}