/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  // redirect: 'noRedirect',
  redirect: 'charts/keyboard',
  name: 'Charts',
  meta: {
    title: 'charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: {
          title: 'keyboardChart',
          icon: 'chart',
          noCache: true
      }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: {
          title: 'lineChart',
          icon: 'chart',
          noCache: true
      }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: {
          title: 'mixChart',
          icon: 'chart',
          noCache: true
      }
    }
  ]
}

export default chartsRouter
