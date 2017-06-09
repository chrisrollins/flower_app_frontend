import { Actions } from 'react-native-router-flux';
import ax from './../config/axiosSetup';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  USERNAME_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
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

export const confirmPasswordChanged = (text) => {
  return {
    type: CONFIRM_PASSWORD_CHANGED,
    payload: text
  }
};

export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  }
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    ax.post('login', {
      email: email,
      password: password
    })
    .then(response => {
      console.log(response);
      Actions.dashboard();
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: error.response
      });
    });
  };
};

export const registerUser = ({ username, email, password, confirmPassword }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });
    ax.post('register', {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      username: username
    })
    .then(response => {
      Actions.dashboard();
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response
      });
    });
  };
};
