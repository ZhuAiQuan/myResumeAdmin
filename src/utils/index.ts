// @ts-ignore
import HttpRequest from './http.request.ts';

const axios = new HttpRequest(import.meta.env.VITE_BASE_URL);

export default {
  axios
}