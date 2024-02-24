import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from './instance';
import {
  ApiProgressCallback,
  ApiRequestContentTypes,
  ApiResponseCallback,
} from '@/types/general.type';
import { toast } from '@/components/ui/use-toast';
import StorageService from '../storage';

export default class ApiService {
  baseURL: string;
  service: AxiosInstance;
  token: boolean;
  credentials: boolean;
  requestContentType: ApiRequestContentTypes;
  progress: boolean;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.service = axiosInstance;
    this.token = true;
    this.progress = false;
    this.requestContentType = 'application/json';
    this.credentials = true;
  }

  useToken(val: boolean) {
    this.token = val;
    return this;
  }

  useCredentials(val: boolean) {
    this.credentials = val;
    return this;
  }

  setRequestContentType(typ: ApiRequestContentTypes) {
    this.requestContentType = typ;
    return this;
  }

  useProgress(val: boolean) {
    this.progress = val;
    return this;
  }

  async get(path: string, callback: ApiResponseCallback, progress?: ApiProgressCallback) {
    return await this.request('GET', path, null, callback, progress);
  }

  async delete(path: string, callback: ApiResponseCallback, progress?: ApiProgressCallback) {
    return await this.request('DELETE', path, null, callback, progress);
  }

  async post(
    path: string,
    data: any,
    callback: ApiResponseCallback,
    progress?: ApiProgressCallback,
  ) {
    return await this.request('POST', path, data, callback, progress);
  }

  async put(
    path: string,
    data: any,
    callback: ApiResponseCallback,
    progress?: ApiProgressCallback,
  ) {
    return await this.request('PUT', path, data, callback, progress);
  }

  async request(
    method: string,
    path: string,
    data: any,
    responseCallback: ApiResponseCallback,
    progressCallback?: ApiProgressCallback,
  ) {
    const config: AxiosRequestConfig = {
      method,
      url: path,
      baseURL: this.baseURL,
      withCredentials: true,
      headers: {
        'Content-Type': this.requestContentType,
      },
    };

    if (this.token) {
      const token = StorageService.get('both', 'auth');

      if (token != null)
        config['headers'] = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
    }

    if (this.progress && progressCallback != undefined) {
      method == 'GET'
        ? (config['onDownloadProgress'] = progressCallback)
        : (config['onUploadProgress'] = progressCallback);
    }

    if (data) config['data'] = data;

    try {
      const response = await this.service.request(config);

      this.notifyResponse(response);

      return responseCallback({
        status: response.status,
        message: response.data?.message || '',
        data: response.data?.data || {},
      });
    } catch (error: any) {
      if (error instanceof AxiosError) {
        const { response, code } = error;

        if (code == 'ERR_NETWORK')
          toast({
            title: 'Network Error',
            variant: 'destructive',
            description: "Can't connect to server. Try again later.",
          });

        if (response) this.notifyResponse(response);

        return responseCallback({
          status: response?.status || 599,
          message: response?.data?.message || 'Something went wrong',
          data: response?.data?.data || {},
        });
      } else
        return responseCallback({
          status: 599,
          message: 'Something went wrong with this app',
          data: {},
        });
    }
  }

  notifyResponse(res: AxiosResponse) {
    // const message = res.data.message || null;

    switch (res.status) {
      case 200:
        console.log('api_res_success: success');
        break;
      case 400:
        console.log('api_res_error: bad request');
        break;
      case 403:
        console.log('api_res_error: forbidden');
        break;
      case 404:
        console.log('api_res_error: resource not found');
        break;
      case 500:
        console.log('api_res_error: internal server error');
        break;
      default:
        console.log('api_res_unknown: unhandled response notifier');
        console.log(res);
        break;
    }
  }
}
