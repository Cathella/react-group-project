import axios from 'axios';

const LOAD_ROCKETS = 'LOAD_ROCKETS';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_FAIL = 'LOAD_FAIL';

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

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return { ...state };
    case LOAD_SUCCESS:
      return { ...state, rockets: action.payload };
    case LOAD_FAIL:
      return { ...state };
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

export { rocketsReducer, fetchRockets };
