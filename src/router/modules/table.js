/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'
const tableRouter = {
    path: '/table',
    // component: Layout,
    component: () => import('@/views/table/index'),
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
                icon: 'table'
            }
        },
        {
            path: 'drag-table',
            component: () => import('@/views/table/drag-table'),
            name: 'DragTable',
            meta: {
                title: 'dragTable',
                icon: 'table'
            }
        },
        {
            path: 'inline-edit-table',
            component: () => import('@/views/table/inline-edit-table'),
            name: 'InlineEditTable',
            meta: {
                title: 'inlineEditTable',
                icon: 'table'
            }
        },
        {
            path: 'complex-table',
            component: () => import('@/views/table/complex-table'),
            name: 'ComplexTable',
            meta: {
                title: 'complexTable',
                icon: 'table'
            }
        }
    ]
}

export default tableRouter
