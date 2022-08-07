import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function exportList(
  state = initialState,
  { type, payload } = { type: '', payload: [] },
) {
  switch (type) {
    case types.EXPORT_ABSENTEES_SUCCESS:
      return {
        ...state,
        exportList: payload,
        error: null,
      };
    case types.EXPORT_ABSENTEES_FAILURE:
      return {
        ...state,
        exportList: null,
        error: payload,
      };
    default:
      return state;
  }
}
