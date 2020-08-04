import axios from 'axios'
import CONFIG from '../constants/config.constants'

const axiosInstance = axios.create({
  baseURL: `${CONFIG.API_BASE_URL}/api`,
  withCredentials: true
});

export default axiosInstance;