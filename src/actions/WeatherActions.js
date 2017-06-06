import weatherFuncs from './../config/weatherAPI';
import {
  UPDATE_WEATHER_SUCCESS,
  UPDATE_WEATHER_ERROR
} from './types';

export const updateWeather = (lat, lon) => {
  console.log("updateWeather");
  return (dispatch) => {
    weatherFuncs.getWeatherByCoords(lat, lon)
    .then(response => {
      console.log("updateWeather.then:", response);
      dispatch({
        type: UPDATE_WEATHER_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => { 
      console.log("updateWeather.catch:", error);
      dispatch({
        type: UPDATE_WEATHER_ERROR,
        payload: error.response
      });
    });
  };


};