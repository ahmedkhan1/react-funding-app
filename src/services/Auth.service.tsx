import { Dispatch } from 'redux';
import request from './request.service';

type ApiParams = {
  successAction: any;
  failureAction: any;
  params: {},
};

export const userLogin = ({
  successAction,
  failureAction,
  params,
}: ApiParams) => (dispatch: Dispatch<any>) => {
  dispatch(
    request({
      path: 'api/user/login',
      successAction,
      failureAction,
      opts: {
        method: 'POST',
        ...params,
      },
    }),
  );
};
