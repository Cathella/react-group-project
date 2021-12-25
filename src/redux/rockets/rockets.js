import axios from 'axios';

const LOAD_ROCKETS = 'LOAD_ROCKETS';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_FAIL = 'LOAD_FAIL';

const RESERVE_ROCKETS = 'RESERVE_ROCKETS';
const CANCEL_ROCKETS = 'CANCEL_ROCKETS';

const initialState = { rockets: [] };

const loadRockets = (payload) => ({
  type: LOAD_ROCKETS,
  payload,
});

const loadSuccess = (payload) => ({
  type: LOAD_SUCCESS,
  payload,
});

const loadFail = (payload) => ({
  type: LOAD_FAIL,
  payload,
});

const reserveRockets = (payload) => ({
  type: RESERVE_ROCKETS,
  payload,
});

const cancelRockets = (payload) => ({
  type: CANCEL_ROCKETS,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return { ...state };
    case LOAD_SUCCESS:
      return { ...state, rockets: action.payload };
    case LOAD_FAIL:
      return { ...state };
    case RESERVE_ROCKETS:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.payload) return { ...rocket, reserved: true };
          return rocket;
        }),
      };
    case CANCEL_ROCKETS:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.payload) return { ...rocket, reserved: false };
          return rocket;
        }),
      };
    default:
      return state;
  }
};

const endPoint = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = () => (dispatch) => {
  dispatch(loadRockets());
  axios
    .get(`${endPoint}`)
    .then((response) => {
      if (response.data !== '') {
        dispatch(loadSuccess(response.data));
      }
    })
    .catch(() => {
      dispatch(loadFail());
    });
};

export {
  rocketsReducer, fetchRockets, reserveRockets, cancelRockets,
};
