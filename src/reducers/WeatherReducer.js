import {
  UPDATE_WEATHER_SUCCESS,
  UPDATE_WEATHER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  weather: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_WEATHER_SUCCESS:
      return { ...state, weather: action.payload };
    case UPDATE_WEATHER_FAIL:
      return { ...state, weather: action.payload };
    default:
      return state;
  }
};
