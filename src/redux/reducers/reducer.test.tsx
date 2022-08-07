import absenceReducer from './absenceReducer';
import exportReducer from './exportReducer';
import initialState from './initialState';
import * as types from '../actions/actionTypes';

const payload:any = [
  {
    id: 1,
    userId: 1,
    employees: {
      name: 'John',
    },
    name: 'John',
    memberNote: '',
    type: 'Holiday',
    admitterNote: '',
    date: '',
    startDate: '',
    endDate: '',
    status: 'Confirmed',
    createdAt: '',
    confirmedAt: '',
    rejectedAt: '',
  },
];

describe('Absence reducer:', () => {
  it('should return the initial state', () => {
    expect(absenceReducer(undefined, { type: '', payload: [] })).toEqual(initialState);
  });

  it('should handle absences being added to list', () => {
    expect(absenceReducer(initialState, {
      type: types.GET_ABSENTEES_SUCCESS,
      payload,
    })).toEqual({
      router: '',
      absences: payload,
      exportList: '',
      error: null,
    });
  });

  it('should return fail action response', () => {
    expect(absenceReducer(initialState, {
      type: types.GET_ABSENTEES_FAILURE,
      payload: [],
    })).toEqual({
      router: '',
      absences: null,
      exportList: '',
      error: [],
    });
  });
});

describe('Export reducer:', () => {
  it('should handle Export being added to list', () => {
    expect(exportReducer(initialState, {
      type: types.EXPORT_ABSENTEES_SUCCESS,
      payload,
    })).toEqual({
      router: '',
      absences: [],
      exportList: payload,
      error: null,
    });
  });

  it('should return fail action response', () => {
    expect(exportReducer(initialState, {
      type: types.EXPORT_ABSENTEES_FAILURE,
      payload: [],
    })).toEqual({
      router: '',
      absences: [],
      exportList: null,
      error: [],
    });
  });
});
