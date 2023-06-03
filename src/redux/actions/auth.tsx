import { Dispatch } from 'redux';
import * as types from './actionTypes';

export const loginSuccess = (payload:string) => (dispatch:Dispatch) => {
  dispatch({
    type: types.LOGIN_SUCCESS,
    payload,
  });
};

export const loginFailure = (payload:string) => ({
  type: types.LOGIN_FAILURE,
  payload,
});

export const purgeUserProfileState = () => ({
  type: types.UPDATE_PROFILE_PURGE,
});
