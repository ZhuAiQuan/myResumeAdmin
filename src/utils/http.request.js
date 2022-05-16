// @ts-ignore
// @ts-ignore
import axios from 'axios';
// @ts-ignore
import config from '@/config'
console.log(config)
const { timeout } = config

// @ts-ignore
export default class HttpRequest {
  constructor(baseURL) {
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
  destroy(url) {
    delete this.queue[url]
  }
  interceptors(instance, url) {
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
  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options)
  }
}