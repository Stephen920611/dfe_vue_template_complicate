import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // CSS重置替代方法

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // 全局 css

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // 国际化
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // 全局过滤器

import './utils/scrollbar' // 滚动条插件
import echarts from 'echarts'

Vue.prototype.$echarts = echarts // 引入echarts，将其绑定到vue原型上 使用时this.$echarts

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 * 如果您不想使用模拟服务器，您想将MockJs用于模拟API，您可以执行：mockXHR（）
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 * 目前MockJs将用于生产环境，请在上线前将其删除！ ！ ！
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // 设置element-ui默认大小
  i18n: (key, value) => i18n.t(key, value)
})

// 注册全局过滤器register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
