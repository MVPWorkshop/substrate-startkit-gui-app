import axiosInstance from '../../shared/utils/api.util';
import { IMeResponse } from './auth.types';

class AuthService {
  public static async getMe() {
    try {
      const response = await axiosInstance.get<IMeResponse>('/me');

      return response.data;

    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
