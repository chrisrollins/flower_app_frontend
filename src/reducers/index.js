import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import WeatherReducer from './WeatherReducer';

export default combineReducers({
  auth: AuthReducer,
  weather: WeatherReducer
});
