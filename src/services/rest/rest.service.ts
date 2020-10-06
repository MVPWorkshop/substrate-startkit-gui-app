import { AxiosInstance } from 'axios';
import apiClient, { apiBaseUrl } from '../../shared/utils/api.util';
import { ApiRequestParams } from './restService.types';

class RestService {
  protected static readonly rest: AxiosInstance = apiClient;
  public static readonly baseApiUrl = apiBaseUrl;

  protected static async get<T>(params: Omit<ApiRequestParams, 'data'>): Promise<T> {
    return this.rest.get(params.url, params.config) as unknown as T;
  }

  protected static async post<T>(params: ApiRequestParams): Promise<T> {
    return this.rest.post(params.url, params.data, params.config) as unknown as T;
  }

  protected static async put<T>(params: ApiRequestParams): Promise<T> {
    return this.rest.put(params.url, params.data, params.config) as unknown as T;
  }

  protected static async delete<T>(params: Omit<ApiRequestParams, 'data'>): Promise<T> {
    return this.rest.delete(params.url, params.config) as unknown as T;
  }
}

export default RestService;
