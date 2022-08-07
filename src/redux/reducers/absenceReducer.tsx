import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function absences(
  state = initialState,
  { type, payload } = { type: '', payload: [] },
) {
  switch (type) {
    case types.GET_ABSENTEES_SUCCESS:
      return {
        ...state,
        absences: payload,
        error: null,
      };
    case types.GET_ABSENTEES_FAILURE:
      return {
        ...state,
        absences: null,
        error: payload,
      };
    default:
      return state;
  }
}
