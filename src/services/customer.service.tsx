import { Dispatch } from 'redux';
import request from './request.service';

type ApiParams = {
  successAction: any;
  failureAction: any;
};

export const getCustomerIds = ({
  successAction,
  failureAction,
}: ApiParams) => (dispatch: Dispatch<any>) => {
  dispatch(
    request({
      path: 'api/user/customerId',
      successAction,
      failureAction,
      opts: {
        method: 'GET',
      },
    }),
  );
};

export default getCustomerIds;
