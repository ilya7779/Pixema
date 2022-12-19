import { AxiosError, AxiosInstance } from 'axios';


const checkAPIkeyInterceptor = (instance: AxiosInstance) => {
  // срабатывает на REQUEST
  instance.interceptors.request.use((config) => {
    if (!config) {
      config = {};
    }
    if (!config.headers) {
      config.headers = {};
    }
    return Promise.resolve(config);
  });
};


const authInterceptor = (instance: AxiosInstance) => {
  // срабатывает на REQUEST
  instance.interceptors.request.use((config) => {
    if (!config) {
      config = {};
    }
    if (!config.headers) {
      config.headers = {};
    }

    config.params = { ...config.params, apikey: '9ce5b90'};

    // config.headers.Authorization = 'Bearer ' + getToken('access');

    // здесь добавляется токен авторизации
    // можно добавить другую логику необходимую для запроса
    // или написать новый интерцептор для нее

    return Promise.resolve(config);
  });
};

const errorsInterceptor = (instance: AxiosInstance) => {
  // срабатывает на RESPONSE

  instance.interceptors.response.use(undefined, (error: AxiosError) => {
    if (error.response?.status === 401) {
      // clearToken('access');
      // clearToken('refresh');
      // history.push('/login');
    }

    // можно обрабатывать другие статусы http-запроса

    return Promise.reject(error);
  });
};

export const interceptors = [authInterceptor, errorsInterceptor];
