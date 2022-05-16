import HttpRequest from './http.request.js';

// @ts-ignore
const axios = new HttpRequest(import.meta.env.VITE_BASE_URL);

export default {
  axios
}