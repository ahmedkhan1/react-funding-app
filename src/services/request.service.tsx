import axios from 'axios';

type ApiParams = {
  path?: string,
  successAction?: any;
  failureAction?: any;
  opts?: {}
};
const request = ({
  path,
  successAction,
  failureAction,
  opts = {},
}: ApiParams) => (dispatch:any) => {
  axios({
    url: `${process.env.REACT_APP_API_URL}/${path}`,
    ...opts,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      dispatch(successAction(res.data.Data));
    })
    .catch((error) => {
      dispatch(failureAction(error?.response?.data?.error ?? error));
    });
};

export default request;
