import type { App } from 'vue';
import axios from 'axios';
import { RepositoriesInterface, RepositoryFactory } from '@/repositories/repository';

export default {
  install: (app: App) => {
    const http = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    http.interceptors.request.use(
      (config: any) => {
        // Do something before request is sent
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
    http.interceptors.response.use(
      response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      error => {
        return Promise.reject(error);
      },
    );
    app.config.globalProperties.$repositories = (name: keyof RepositoriesInterface) => {
      return RepositoryFactory.create(name)(http);
    };
  },
};
