import { keyboardMission } from "./keyboardMission";


export function getKeyboardMission(
  missionId: string
) {

  return keyboardMission.missions.find(
    (mission) =>
      mission.id === missionId
  );

}