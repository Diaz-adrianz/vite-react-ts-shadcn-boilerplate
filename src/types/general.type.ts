import { AxiosProgressEvent } from 'axios';

export interface EventSubscriber {
  id: string;
  topic: string;
  func: (metadata: Record<string, any>) => void;
}

export interface ApiResponse {
  status: number | null;
  message: string | null;
  data: any | null;
}

export type ApiResponseCallback = (data: ApiResponse) => void | any;

export type ApiProgressCallback = (data: AxiosProgressEvent) => void | any;

export type ApiRequestContentTypes = 'application/json' | 'multipart/form-data';

export type StorageType = 'local' | 'session' | 'both';
