import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rocketsReducer } from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
