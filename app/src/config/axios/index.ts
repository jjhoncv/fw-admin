import axios, { AxiosInstance, AxiosResponse } from 'axios';

export const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

instance.interceptors.response.use((response: AxiosResponse) => {
  return response;
}, async (error) => {
  const { config, response: { status, data } } = error
  const originalRequest = config

  if (status === 401) {
    // Promise.reject(error)
    // alert("gg")
    // localStorage.setItem('token', data.data.token);
    // originalRequest.headers['Authorization'] = data.data.token;
    // return instance.request(error.config);
    return Promise.reject(error)
  }
  return Promise.reject(error)
});


export const axiosAjax = ((): AxiosInstance => instance)();

export * from 'axios';
