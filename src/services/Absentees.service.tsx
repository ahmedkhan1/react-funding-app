import { Dispatch } from 'redux';
import request from './request.service';

type ApiParams = {
  successAction: any;
  failureAction: any;
};

export const getAbsentees = ({
  successAction,
  failureAction,
}: ApiParams) => (dispatch: Dispatch<any>) => {
  dispatch(
    request({
      path: 'getAllAbsentees',
      successAction,
      failureAction,
      opts: {
        method: 'GET',
      },
    }),
  );
};

export const exportAbsenteesICO = ({
  successAction,
  failureAction,
}: ApiParams) => (dispatch: Dispatch<any>) => {
  dispatch(
    request({
      path: 'absences/export',
      successAction,
      failureAction,
      opts: {
        method: 'GET',
      },
    }),
  );
};
