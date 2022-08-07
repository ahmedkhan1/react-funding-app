import { Dispatch } from 'redux';
import { TAbsences } from 'types/TAbsences';
import * as types from './actionTypes';

export const getAbsenteesSuccess = (payload:TAbsences[]) => (dispatch:Dispatch) => {
  dispatch({
    type: types.GET_ABSENTEES_SUCCESS,
    payload,
  });
};

export const getAbsenteesFailure = (payload:string) => ({
  type: types.GET_ABSENTEES_FAILURE,
  payload,
});

export const exportAbsenteesSuccess = (payload:string) => (dispatch:Dispatch) => {
  dispatch({
    type: types.EXPORT_ABSENTEES_SUCCESS,
    payload,
  });
};

export const exportAbsenteesFailure = (payload:string) => ({
  type: types.EXPORT_ABSENTEES_FAILURE,
  payload,
});
