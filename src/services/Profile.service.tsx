import { Dispatch } from 'redux';
import request from './request.service';

type ApiParams = {
  successAction: any;
  failureAction: any;
  params: any;
};

export const getProfile = ({
  successAction,
  failureAction,
  params,
}: ApiParams) => (dispatch: Dispatch<any>) => {
  dispatch(
    request({
      path: `api/user?customerId=${params.customerId}`,
      successAction,
      failureAction,
      opts: {
        method: 'GET',
      },
    }),
  );
};

export const updateProfile = ({
  successAction,
  failureAction,
  params,
}: ApiParams) => (dispatch: Dispatch<any>) => {
  dispatch(
    request({
      path: 'api/user',
      successAction,
      failureAction,
      opts: {
        method: 'PUT',
        ...params,
      },
    }),
  );
};
