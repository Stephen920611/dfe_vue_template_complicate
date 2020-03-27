/** 当路由表过长时，可以将其拆分为小模块 **/

import Layout from '@/layout'

const chartsRouter = {
    path: '/charts',
    component: () => import('@/views/router-link/index'),
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
                noCache: true,
                isShowSlideBar:true,
            }
        },
        {
            path: 'line',
            component: () => import('@/views/charts/line'),
            name: 'LineChart',
            meta: {
                title: 'lineChart',
                icon: 'chart',
                noCache: true,
                isShowSlideBar:true,
            }
        },
        {
            path: 'mix-chart',
            component: () => import('@/views/charts/mix-chart'),
            name: 'MixChart',
            meta: {
                title: 'mixChart',
                icon: 'chart',
                noCache: true,
                isShowSlideBar:true,
            }
        }
    ]
}

export default chartsRouter
