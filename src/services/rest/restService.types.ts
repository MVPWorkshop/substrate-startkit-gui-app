import { AxiosRequestConfig } from 'axios';

export interface ApiRequestParams {
  url: string;
  config?: AxiosRequestConfig;
  data?: any;
}

export interface IApiResponse<T> {
  result: T;
}

export interface IApiErrorResponse {
  error:{
    code: number;
    message: string;
  },
  details?: any;
}
