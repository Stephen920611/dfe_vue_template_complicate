/** 当路由表过长时，可以将其拆分为小模块 **/

import Layout from '@/layout'

const tableRouter = {
    path: '/table',
    // component: Layout,
    component: () => import('@/views/router-link/index'),
    redirect: '/table/complex-table',
    name: 'Table',
    meta: {
        title: 'Table',
        icon: 'table'
    },
    children: [
        {
            path: 'dynamic-table',
            component: () => import('@/views/table/dynamic-table/index'),
            name: 'DynamicTable',
            meta: {
                title: 'dynamicTable',
                icon: 'table',
                isShowSlideBar:true,
            }
        },
        {
            path: 'drag-table',
            component: () => import('@/views/table/drag-table'),
            name: 'DragTable',
            meta: {
                title: 'dragTable',
                icon: 'table',
                isShowSlideBar:true,
            }
        },
        {
            path: 'inline-edit-table',
            component: () => import('@/views/table/inline-edit-table'),
            name: 'InlineEditTable',
            meta: {
                title: 'inlineEditTable',
                icon: 'table',
                isShowSlideBar:true,
            }
        },
        {
            path: 'complex-table',
            component: () => import('@/views/table/complex-table'),
            name: 'ComplexTable',
            meta: {
                title: 'complexTable',
                icon: 'table',
                isShowSlideBar:true,
            }
        }
    ]
}

export default tableRouter
