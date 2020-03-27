/** 当路由表过长时，可以将其拆分为小模块 **/

import Layout from '@/layout'

const nestedRouter = {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1/menu1-1',
    name: 'Nested',
    meta: {
        title: 'nested',
        icon: 'nested'
    },
    children: [
        {
            path: 'menu1',
            component: () => import('@/views/nested/menu1/index'), // Parent router-view
            name: 'Menu1',
            meta: {title: 'menu1'},
            redirect: '/nested/menu1/menu1-1',
            children: [
                {
                    path: 'menu1-1',
                    component: () => import('@/views/nested/menu1/menu1-1'),
                    name: 'Menu1-1',
                    meta: {
                        title: 'menu1-1',
                        icon: 'nested',
                        isShowSlideBar: true,
                    }
                },
                {
                    path: 'menu1-2',
                    component: () => import('@/views/nested/menu1/menu1-2'),
                    name: 'Menu1-2',
                    redirect: '/nested/menu1/menu1-2/menu1-2-1',
                    meta: {
                        title: 'menu1-2',
                        icon: 'nested',
                        isShowSlideBar:true,
                    },
                    children: [
                        {
                            path: 'menu1-2-1',
                            component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                            name: 'Menu1-2-1',
                            meta: {
                                title: 'menu1-2-1',
                                icon: 'nested',
                                isShowSlideBar:true,
                            }
                        },
                        {
                            path: 'menu1-2-2',
                            component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                            name: 'Menu1-2-2',
                            meta: {
                                title: 'menu1-2-2',
                                icon: 'nested',
                                isShowSlideBar:true,
                            }
                        }
                    ]
                },
                {
                    path: 'menu1-3',
                    component: () => import('@/views/nested/menu1/menu1-3'),
                    name: 'Menu1-3',
                    meta: {
                        title: 'menu1-3',
                        icon: 'nested',
                        isShowSlideBar:true,
                    }
                }
            ]
        },
        {
            path: 'menu2',
            name: 'Menu2',
            component: () => import('@/views/nested/menu2/index'),
            meta: {
                title: 'menu2',
                icon: 'nested',
                isShowSlideBar:true,
            }
        }
    ]
}

export default nestedRouter
