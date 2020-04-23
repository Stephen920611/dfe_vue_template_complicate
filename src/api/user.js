import request from '@/utils/request'

/**
 * 登录
 * @param data
 */
export function login(data) {
  /* return request({
        url: '/vue-element-admin/user/login',
        method: 'post',
        data
    })*/
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

/**
 * 退出登录
 */
export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}

/**
 * 获取验证码
 */
export function getVerify(params) {
  return request({
    url: '/user/getVertify',
    method: 'get',
    query: params
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

