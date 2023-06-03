import { Dispatch } from 'redux';
import * as types from './actionTypes';

export const getCustomerIdsSuccess = (payload:any[]) => (dispatch:Dispatch) => {
  dispatch({
    type: types.GET_CUSTOMERID_SUCCESS,
    payload,
  });
};

export const getCustomerIdsFailure = (payload:string) => ({
  type: types.GET_CUSTOMERID_FAILURE,
  payload,
});

export const setCustomerIdsSuccess = (payload:string) => (dispatch:Dispatch) => {
  dispatch({
    type: types.SET_CUSTOMERID_SUCCESS,
    payload,
  });
};

export const setCustomerIdsFailure = (payload:string) => ({
  type: types.SET_CUSTOMERID_FAILURE,
  payload,
});
