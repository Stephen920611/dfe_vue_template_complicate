import request from '@/utils/request'

/**
 * 分页查询
 * @param data
 */
export function fetchList(data) {
  return request({
    url: '/person/interim-inspector-page',
    method: 'post',
    data
  })
}

/**
 * 区、镇、乡树
 * @param data
 */
export function fetchAreaTree(data) {
    return request({
        url: '/area/group-area-list',
        method: 'post',
        params: data
    })
}
/**
 * 镇
 * @param data
 */
export function fetchTown(data) {
    return request({
        url: '/area/group-town-list',
        method: 'post',
        data
    })
}
/**
 * 村
 * @param data
 */
export function fetchVillage(data) {
    return request({
        url: '/area/group-village-list',
        method: 'post',
        data
    })
}

/**
 * 建档立卡 - 两不愁三保障
 * @param data
 */
export function fetchDPersonSafeguard(data) {
    return request({
        url: '/dPersonSafeguard/get',
        method: 'post',
        data
    })
}

/**
 * 建档立卡 - 行业扶贫政策
 * @param data
 */
export function fetchDPersonIndustury(data) {
    return request({
        url: '/dPersonIndustury/get',
        method: 'post',
        data
    })
}
/**
 * 建档立卡 - 帮扶责任落实
 * @param data
 */
export function fetchDPersonResponsibility(data) {
    return request({
        url: '/dPersonResponsibility/get',
        method: 'post',
        data
    })
}

/**
 * 建档立卡 - 贫困户满意度
 * @param data
 */
export function fetchDPersonPropose(data) {
    return request({
        url: '/dPersonPropose/get',
        method: 'post',
        data
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
