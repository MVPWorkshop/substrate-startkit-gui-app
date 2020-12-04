import axios, { AxiosResponse } from 'axios'
import CONFIG from '../constants/config.constants'
import { AuthenticationError, AuthorizationError, NotFoundError, RestError } from './error.util';
import { EErrorTypes } from '../types/error.types';
import { IApiResponse } from '../../services/rest/restService.types';

export const apiBaseUrl = `${CONFIG.API_BASE_URL}/api/${CONFIG.API_VERSION}`;
const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true
});

axiosInstance.interceptors.response.use(
  function onResponse(response) {
    return (response as AxiosResponse<IApiResponse<any>>).data.result;
  },
  function onError(error) {
    if (error.response && error.response.status) {
      const errorCode = error.response.status;

      if (errorCode === 401) {
        return Promise.reject(new AuthenticationError(error.response));
      } else if (errorCode === 403) {
        return Promise.reject(new AuthorizationError(error.response));
      } else if (errorCode === 404) {
        return Promise.reject(new NotFoundError(error.response));
      } else {
        // Unhandled error 500, 409...
        return Promise.reject(new RestError(EErrorTypes.REST_ERROR, error.respone));
      }
    } else {
      return Promise.reject(error);
    }
  }
)

export default axiosInstance;
