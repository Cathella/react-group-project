const GET_MISSIONS = 'missionStore/missions/GET_MISSIONS';
const JOIN_MISSION = 'missionStore/missions/JOIN_MISSION';
const LEAVE_MISSION = 'missionStore/missions/LEAVE_MISSION';

const initialState = [];

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const listMissions = async () => {
  const url = 'https://api.spacexdata.com/v3/missions';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      if (state !== initialState) {
        return state;
      }
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, status: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, status: false };
        }
        return mission;
      });
    default:
      return state;
  }
};

export default missionsReducer;
