import request from '@/utils/request'

/**
 * 分页查询
 * @param data
 */
export function fetchList(data) {
  return request({
    url: '/question/page',
    method: 'get',
    params: data
  })
}

/**
 * 保存
 * @param data
 */
export function saveQuestion(data) {
  return request({
    url: '/question/save',
    method: 'post',
    data
  })
}

/**
 * 删除
 * @param data
 */
export function deleteQuestion(data) {
  return request({
    url: '/question/delete',
    method: 'post',
    data
  })
}
