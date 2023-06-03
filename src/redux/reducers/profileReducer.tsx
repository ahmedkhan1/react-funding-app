import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function profile(
  state = initialState,
  { type, payload } = { type: '', payload: {} },
) {
  switch (type) {
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        payload,
        error: null,
      };
    case types.GET_PROFILE_FAILURE:
      return {
        ...state,
        payload: null,
        error: payload,
      };
    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updated: payload,
        error: null,
      };
    case types.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        payload: null,
        updated: 0,
        error: payload,
      };
    case types.UPDATE_PROFILE_PURGE:
      return {
        ...state,
        updated: null,
        payload: null,
        error: null,
      };
    default:
      return state;
  }
}
