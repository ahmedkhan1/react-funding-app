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
  const auth:any = {
    'Content-Type': 'application/json',
  };
  if (localStorage.getItem('authToken')) auth.Authorization = localStorage.getItem('authTestToken');
  axios({
    url: `${process.env.REACT_APP_API_URL}/${path}`,
    ...opts,
    headers: auth,
  })
    .then((res) => {
      dispatch(successAction(res.data.result));
    })
    .catch((error) => {
      dispatch(failureAction(error?.message));
    });
};

export default request;
