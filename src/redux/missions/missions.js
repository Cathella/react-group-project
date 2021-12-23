const GET_MISSIONS = 'missionStore/missions/GET_MISSIONS';

const initialState = [];

export const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const listMissions = async () => {
  const url = 'https://api.spacexdata.com/v3/missions';
  const response = await fetch(url);
  const missions = await response.json();
  return missions;
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
