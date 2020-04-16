import Cookies from 'js-cookie'

const TokenKey = 'yt_help_poor_web_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(data) {
  /* //app端固定写死12个小时，为了防止更新领导端的app出现问题
    let timestamp = new Date().getTime();//当前的时间戳
    timestamp = timestamp + 12 * 60 * 60 * 1000;*/
  return Cookies.set(TokenKey, data.token, { expires: new Date(data.expire) })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
