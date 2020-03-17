import Cookies from 'js-cookie'
import { getLanguage } from '@/lang/index'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  language: getLanguage(),
  size: Cookies.get('size') || 'medium',
  sidebarData: null, // 侧边栏的数据
  hasSidebar: false, // 是否有sidebar，根据顶部导航是否有子元素来判断
  sidebarParents: null, // 点击的顶部标题的数据
    toggleMenuVisible:false,//默认显示单行菜单
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_LANGUAGE: (state, language) => {
    state.language = language
    Cookies.set('language', language)
  },
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  },
  UPDATE_SIDEBAR: (state, { sidebarData, hasSidebar, sidebarParents }) => {
    state.sidebarData = sidebarData
    state.hasSidebar = hasSidebar
    state.sidebarParents = sidebarParents ? sidebarParents.path : ''
  },
    TOGGLE_MENU: (state, toggleMenuVisible) => {
        state.toggleMenuVisible = toggleMenuVisible
    },
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setLanguage({ commit }, language) {
    commit('SET_LANGUAGE', language)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  },
  updateSidebar({ commit }, { type, sidebarData, hasSidebar, sidebarParents }) {
    commit('UPDATE_SIDEBAR', { sidebarData, hasSidebar, sidebarParents })
  },
    //判断顶部导航显示一行还是多行
    toggleMenu({ commit }, { _, toggleMenuVisible}) {
        commit('TOGGLE_MENU', toggleMenuVisible)
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
