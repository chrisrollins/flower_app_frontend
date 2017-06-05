import { Actions } from 'react-native-router-flux';
import ax from './../config/axiosSetup';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    ax.post('login', {
      email: email,
      password: password
    })
    .then(response => {
      Actions.dashboard();
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      Actions.dashboard(); 
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: error.response
      });
    });
  };
};
