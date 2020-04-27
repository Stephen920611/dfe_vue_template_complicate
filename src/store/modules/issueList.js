import router, {resetRouter} from '@/router'
import {fetchAreaTree} from '@/api/issueList'

const state = {
    householdsData: {} // 贫困户查看详情的信息
}

const mutations = {
    SET_HOUSEHOLDS_DATA: (state, data) => {
        state.householdsData = data
    }
}

const actions = {
    // // 获取用户区、镇、乡树
    // fetchAreaTreeAction({commit}, data) {
    //     return new Promise((resolve, reject) => {
    //         fetchAreaTree(data).then(response => {
    //             resolve(response)
    //         }).catch(error => {
    //             reject(error)
    //         })
    //     })
    // },
    setHouseholdsData({commit}, data) {
        commit('SET_HOUSEHOLDS_DATA', data)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
