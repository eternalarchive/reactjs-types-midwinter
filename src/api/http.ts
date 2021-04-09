import axios from 'axios';
import { TsignInInfo } from '../containers/SignIn/saga';

const { REACT_APP_MIDWINTER_API_URL } = process.env;

// [[auth]]
const axiosLoginInstance = () => {
  const params = {
    baseURL: REACT_APP_MIDWINTER_API_URL,
    timeout: 180000,
  };
  return axios.create(params);
};

export const authPost = (path: string, data: TsignInInfo) => {
  const instance = axiosLoginInstance();
  return new Promise((resolve, reject) => {
    instance
      .post(path, data)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};
