import axios, { AxiosInstance } from 'axios';
import { refreshToken } from './refresh-token';

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const { response } = err;

    if (response) {
      if (response.status == 401) {
        if (!err.config.sent) {
          err.config.sent = true;

          const newToken = await refreshToken();

          if (newToken) {
            err.config.headers = {
              ...err.config.headers,
              Authorization: `Bearer ${newToken}`,
            };
          }

          return axios(err.config);
        }
      }
    }

    throw err;
  },
);

export default axiosInstance;
