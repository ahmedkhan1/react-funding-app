import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function profile(
  state = initialState,
  { type, payload } = { type: '', payload: {} },
) {
  switch (type) {
    case types.GET_CUSTOMERID_SUCCESS:
      return {
        ...state,
        payload,
        error: null,
      };
    case types.GET_CUSTOMERID_FAILURE:
      return {
        ...state,
        payload: null,
        error: payload,
      };
    default:
      return state;
  }
}
