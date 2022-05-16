import utils from 'utils';
const { axios } = utils

export const getVerifyCode = (timestramp: number) => {
  return axios.request({
    url: '/captcha',
    method: 'get',
    headers: {
      'img-verify-code-state': timestramp
    }
  })
}