import axios from 'axios';
import { TsignInInfo } from '../containers/SignIn/saga';
import { handleError } from './handleError';

const {
  REACT_APP_MIDWINTER_API_URL,
  REACT_APP_GOOGLE_SEARCH_API_URL,
} = process.env;

// [[ auth ]]
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

// [[ ticket ]]
const axiosInstance = () => {
  const token = localStorage.getItem('token');
  const params = {
    baseURL: REACT_APP_MIDWINTER_API_URL,
    timeout: 180000,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.create(params);
};

export const post = (path: string, data: unknown) => {
  const instance = axiosInstance();
  return new Promise((resolve, reject) => {
    instance
      .post(path, data)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.dir(error);
        reject(handleError(error.response.status));
      });
  });
};

//[[ google image search ]]
const axiosGoogleInstance = () => {
  const params = {
    baseURL: REACT_APP_GOOGLE_SEARCH_API_URL,
    timeout: 180000,
  };
  return axios.create(params);
};

export const imgGet = (path: string) => {
  const instance = axiosGoogleInstance();
  return new Promise((resolve, reject) => {
    instance
      .get(path)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error.response.status));
      });
  });
};
