import type { AxiosInstance } from 'axios';
import { MessageSample, ParamSample } from '@/types/models/message';
import { API_URL } from '@/constants/api';

export interface RepositoryMessageProps {
  message: (params: any) => Promise<any>;
  messageSample: (params: ParamSample) => Promise<MessageSample>;
}

export const RepositoryMessage = ($axios: AxiosInstance): RepositoryMessageProps => ({
  message(params: any): Promise<any> {
    return $axios.get(API_URL.TEST.SAMPLE, params);
  },
  messageSample(params: ParamSample): Promise<MessageSample> {
    if (typeof params !== 'object') {
      params = {};
    }
    return $axios.post(API_URL.TEST.SAMPLE, params);
  },
});
