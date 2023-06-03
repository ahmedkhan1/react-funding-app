import { Dispatch } from 'redux';
import * as types from './actionTypes';

export const getUserProfileSuccess = (payload:any[]) => (dispatch:Dispatch) => {
  dispatch({
    type: types.GET_PROFILE_SUCCESS,
    payload,
  });
};

export const getUserProfileFailure = (payload:string) => ({
  type: types.GET_PROFILE_FAILURE,
  payload,
});

export const updateUserProfileSuccess = (payload:string) => (dispatch:Dispatch) => {
  dispatch({
    type: types.UPDATE_PROFILE_SUCCESS,
    payload,
  });
};

export const updateUserProfileFailure = (payload:string) => ({
  type: types.UPDATE_PROFILE_FAILURE,
  payload,
});

export const purgeUserProfileState = () => ({
  type: types.UPDATE_PROFILE_PURGE,
});
