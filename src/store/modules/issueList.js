import router, { resetRouter } from '@/router'

const state = {
  householdsData: {} // 贫困户查看详情的信息
}

const mutations = {
  SET_HOUSEHOLDS_DATA: (state, data) => {
    state.householdsData = data
  }
}

const actions = {
  setHouseholdsData({ commit }, data) {
    commit('SET_HOUSEHOLDS_DATA', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
