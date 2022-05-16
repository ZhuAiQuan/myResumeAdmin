import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

import config from '@/config'

const { timeout } = config

interface Queue {
  [key: string]: boolean
}

export default class HttpRequest {
  private baseURL: string;
  private queue: Queue
  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.queue = {}
  }
  getConfig() {
    return {
      baseURL: this.baseURL,
      timeout,
      headers: {
        /** */
      }
    }
  }
  destroy(url: string) {
    delete this.queue[url]
  }
  interceptors(instance: AxiosInstance, url: string) {
    instance.interceptors.request.use(config => {
      // 请求前拦截处理
      this.queue[url] = true
      return config
    }, errs => {
      return Promise.reject(errs)
    })
    instance.interceptors.response.use(res => {
      this.destroy(url)
      return res.data
    }, errs => {
      return Promise.reject(errs)
    })
  }
  request(options: AxiosRequestConfig) {
    const instance = axios.create();
    options = Object.assign(this.getConfig(), options);
    this.interceptors(instance, options.url as string);
    return instance(options)
  }
}