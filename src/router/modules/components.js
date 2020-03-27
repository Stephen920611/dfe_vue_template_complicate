/** 当路由表过长时，可以将其拆分为小模块 **/

import Layout from '@/layout'
import tableRouter from './table'
import chartsRouter from './charts'

const componentsRouter = {
    path: '/components',
    component: Layout,
    // redirect: 'noRedirect',
    redirect: '/components/tinymce',
    name: 'ComponentDemo',
    meta: {
        title: 'components',
        icon: 'component'
    },
    children: [
        {
            path: 'tinymce',
            component: () => import('@/views/components-demo/tinymce'),
            name: 'TinymceDemo',
            meta: {
                title: 'tinymce',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'markdown',
            component: () => import('@/views/components-demo/markdown'),
            name: 'MarkdownDemo',
            meta: {
                title: 'markdown',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'json-editor',
            component: () => import('@/views/components-demo/json-editor'),
            name: 'JsonEditorDemo',
            meta: {
                title: 'jsonEditor',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'split-pane',
            component: () => import('@/views/components-demo/split-pane'),
            name: 'SplitpaneDemo',
            meta: {
                title: 'splitPane',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'avatar-upload',
            component: () => import('@/views/components-demo/avatar-upload'),
            name: 'AvatarUploadDemo',
            meta: {
                title: 'avatarUpload',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'dropzone',
            component: () => import('@/views/components-demo/dropzone'),
            name: 'DropzoneDemo',
            meta: {
                title: 'dropzone',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'sticky',
            component: () => import('@/views/components-demo/sticky'),
            name: 'StickyDemo',
            meta: {
                title: 'sticky',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'count-to',
            component: () => import('@/views/components-demo/count-to'),
            name: 'CountToDemo',
            meta: {
                title: 'countTo',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'mixin',
            component: () => import('@/views/components-demo/mixin'),
            name: 'ComponentMixinDemo',
            meta: {
                title: 'componentMixin',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'back-to-top',
            component: () => import('@/views/components-demo/back-to-top'),
            name: 'BackToTopDemo',
            meta: {
                title: 'backToTop',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'drag-dialog',
            component: () => import('@/views/components-demo/drag-dialog'),
            name: 'DragDialogDemo',
            meta: {
                title: 'dragDialog',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'drag-select',
            component: () => import('@/views/components-demo/drag-select'),
            name: 'DragSelectDemo',
            meta: {
                title: 'dragSelect',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'dnd-list',
            component: () => import('@/views/components-demo/dnd-list'),
            name: 'DndListDemo',
            meta: {
                title: 'dndList',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'drag-kanban',
            component: () => import('@/views/components-demo/drag-kanban'),
            name: 'DragKanbanDemo',
            meta: {
                title: 'dragKanban',
                icon: 'component',
                isShowSlideBar:true,
            }
        },
        {
            path: 'step-form',
            component: () => import('@/views/step-form/index'),
            // redirect: '/step-form/index/step1',
            name: 'StepFrom', // 设定路由的名字
            // hidden: true,
            meta: {
                title: '分步表单',
                icon: 'user'
                // noCache: true,///如果设置为true，则不会被 <keep-alive> 缓存(默认 false)--- 如果为true时，点击路由会重新渲染
                // breadcrumb: false // 如果设置为false，则不会在breadcrumb面包屑中显示
            },
            children: [
                {
                    path: 'step1',
                    component: () => import('@/views/step-form/step1'),
                    name: 'Step1', // 设定路由的名字
                    hidden: true
                    // breadcrumb:false,
                },
                {
                    path: 'step2',
                    component: () => import('@/views/step-form/step2'),
                    name: 'Step2', // 设定路由的名字
                    hidden: true,
                    noCache: true// /如果设置为true，则不会被 <keep-alive> 缓存(默认 false)--- 如果为true时，点击路由会重新渲染
                    // breadcrumb:false,
                },
                {
                    path: 'step3',
                    component: () => import('@/views/step-form/step3'),
                    name: 'Step3', // 设定路由的名字
                    hidden: true
                    // breadcrumb:false,
                }

            ]
        },
        {
            path: '/tab',
            component: () => import('@/views/tab/index'),
            name: 'Tab',
            meta: {title: 'tab', icon: 'tab'}


        },
        tableRouter,
        chartsRouter,
        {
            path: 'excel',
            component: () => import('@/views/router-link/index'),
            redirect: '/components/excel/export-excel',
            name: 'Excel',
            meta: {
                title: 'excel',
                icon: 'excel'
            },
            children: [
                {
                    path: 'export-excel',
                    component: () => import('@/views/excel/export-excel'),
                    name: 'ExportExcel',
                    meta: {
                        title: 'exportExcel',
                        icon: 'excel',
                        isShowSlideBar:true,
                    }
                },
                {
                    path: 'export-selected-excel',
                    component: () => import('@/views/excel/select-excel'),
                    name: 'SelectExcel',
                    meta: {
                        title: 'selectExcel',
                        icon: 'excel',
                        isShowSlideBar:true,
                    }
                },
                {
                    path: 'export-merge-header',
                    component: () => import('@/views/excel/merge-header'),
                    name: 'MergeHeader',
                    meta: {
                        title: 'mergeHeader',
                        icon: 'excel',
                        isShowSlideBar:true,
                    }
                },
                {
                    path: 'upload-excel',
                    component: () => import('@/views/excel/upload-excel'),
                    name: 'UploadExcel',
                    meta: {
                        title: 'uploadExcel',
                        icon: 'excel',
                        isShowSlideBar:true,
                    }
                }
            ]
        },
        {
            path: 'zip/download',
            component: () => import('@/views/zip/index'),
            name: 'ExportZip',
            meta: {title: 'exportZip', icon: 'zip'}
        },
        {
            path: 'pdf',
            component: () => import('@/views/pdf/index'),
            name: 'PDF',
            meta: {title: 'pdf', icon: 'pdf'}
        },
        {
            path: 'pdf/download',
            component: () => import('@/views/pdf/download'),
            hidden: true
        },
        {
            path: '/error',
            // component: Layout,
            component: () => import('@/views/router-link/index'),
            redirect: 'noRedirect',
            name: 'ErrorPages',
            meta: {
                title: 'errorPages',
                icon: '404'
            },
            children: [
                {
                    path: '401',
                    component: () => import('@/views/error-page/401'),
                    name: 'Page401',
                    meta: {
                        title: 'page401',
                        noCache: true,
                        isShowSlideBar:true,
                    }
                },
                {
                    path: '404',
                    component: () => import('@/views/error-page/404'),
                    name: 'Page404',
                    meta: {
                        title: 'page404',
                        noCache: true,
                        isShowSlideBar:true,
                    }
                }
            ]
        },
        {
            path: '/icon',
            component: () => import('@/views/router-link/index'),
            children: [
                {
                    path: 'index',
                    component: () => import('@/views/icons/index'),
                    name: 'Icons',
                    meta: { title: 'icons', icon: 'icon', noCache: true }
                }
            ]
        },
        {
            path: '/clipboard',
            component: () => import('@/views/router-link/index'),
            children: [
                {
                    path: 'index',
                    component: () => import('@/views/clipboard/index'),
                    name: 'ClipboardDemo',
                    meta: { title: 'clipboardDemo', icon: 'clipboard' }
                }
            ]
        },
        {
            path: '/tree',
            component: () => import('@/views/router-link/index'),
            redirect: '/components/tree/index',
            // name: 'Tree',
            // meta: {title: '树', icon: 'example'},
            children: [
                {
                    path: 'index',
                    name: 'Tree',
                    component: () => import('@/views/tree-demo/index'),
                    meta: {
                        title: '树',
                        icon: 'tree',
                    }
                },
            ]
        },


    ]
}

export default componentsRouter
