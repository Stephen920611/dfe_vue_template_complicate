import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   是否在侧边栏或者顶部导航栏显示；设为true, 该路由会隐藏（默认为false）
 * alwaysShow: true               如果设置为true，将始终显示根菜单
 *                                如果未设置alwaysShow，则当项具有多个子路线时，
 *                                它将变为嵌套模式，否则不显示根菜单
 * redirect: noRedirect           如果设置noRedirect，则不会在面包屑中重定向
 * name:'router-name'             该名称由<keep-alive>使用（必须设置！！！）
 * meta : {
    roles: ['admin','editor']    权限，控制页面角色（您可以设置多个角色）
    title: 'title'               名称，显示在侧边栏和面包屑中（推荐设置）
    icon: 'svg-name'             侧栏中或顶部导航栏的图标显示
    noCache: true                如果设置为true，将不缓存页面（默认为false）
    affix: true                  如果设为true,则改路由标签将粘贴在标签视图tags-view中（注：tags-view每项后面的小叉号）
    breadcrumb: false            如果设为false,该路由将在breadcrumb面包屑中隐藏（默认是false）
    activeMenu: '/example/list'  如果设置了路径，则侧边栏将突出高亮显示您设置的路径
    isShowSlideBar:true          是否需要显示侧边栏；设为true,该路由会显示侧边栏（默认是false）
  }
 */

/**
 * constantRoutes
 * 没有权限要求的基本页面
 * 所有角色都可以访问
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true // tags后面的关闭按钮是否显示
        }
      }
    ]
  }
  /* {
      path: '/documentation',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/documentation/index'),
          name: 'Documentation',
          meta: {
            title: 'documentation',
            icon: 'documentation',
            affix: true
          }
        }
      ]
    },
    {
      path: '/guide',
      component: Layout,
      redirect: '/guide/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/guide/index'),
          name: 'Guide',
          meta: {
            title: 'guide',
            icon: 'guide',
            noCache: true
          }
        }
      ]
    },
    {
      path: '/profile',
      component: Layout,
      redirect: '/profile/index',
      hidden: true,
      children: [
        {
          path: 'index',
          component: () => import('@/views/profile/index'),
          name: 'Profile',
          meta: { title: 'profile', icon: 'user', noCache: true }
        }
      ]
    }*/
  /* {
          path: '/step-form',
          component: Layout,
          redirect: '/step-form/index',
          // hidden: true,
          // name: 'step',
          meta: {
            title: '分步表单',
            icon: 'user'
          },
          children: [
            {
              path: 'index',
              component: () => import('@/views/step-form/index'),
              // redirect: '/step-form/index/step1',
              name: 'StepFrom', // 设定路由的名字
              // hidden: true,
              meta: {
                title: '分步表单',
                icon: 'user'
                // noCache: true,///如果设置为true，则不会被 <keep-alive> 缓存(默认 false)--- 如果为true时，点击路由会重新渲染
                // breadcrumb: false // 如果设置为false，则不会在breadcrumb面包屑中显示
              }
            },
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
        }*/
]

/**
 * asyncRoutes
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [
  /* {
      path: '/permission',
      component: Layout,
      redirect: '/permission/page',
      alwaysShow: true, // 始终显示根菜单
      name: 'Permission',
      meta: {
        title: 'permission',
        icon: 'lock',
        roles: ['admin', 'editor'] // 可以在根导航中设置角色
      },
      children: [
        {
          path: 'page',
          component: () => import('@/views/permission/page'),
          name: 'PagePermission',
          meta: {
            title: 'pagePermission',
            icon: 'lock',
            isShowSlideBar: true,
            roles: ['admin'] // 或者只能在子导航中设置角色
          }
        },
        {
          path: 'directive',
          component: () => import('@/views/permission/directive'),
          name: 'DirectivePermission',
          meta: {
            title: 'directivePermission',
            icon: 'lock',
            isShowSlideBar: true
            // 如果未设置角色，则表示：该页面不需要权限
          }
        },
        {
          path: 'role',
          component: () => import('@/views/permission/role'),
          name: 'RolePermission',
          meta: {
            title: 'rolePermission',
            icon: 'lock',
            isShowSlideBar: true,
            roles: ['admin']
          }
        }
      ]
    },*/

  /** 当您的路由图太长时，您可以将其拆分为小模块 **/
  /* componentsRouter,
     // chartsRouter,
     nestedRouter,*/
  // tableRouter,

  /* {
        path: '/example',
        component: Layout,
        redirect: '/example/list',
        name: 'Example',
        meta: {
            title: 'example',
            icon: 'example'
        },
        children: [
            {
                path: 'create',
                component: () => import('@/views/example/create'),
                name: 'CreateArticle',
                meta: {
                    title: 'createArticle',
                    icon: 'edit',
                    isShowSlideBar: true
                }
            },
            {
                path: 'edit/:id(\\d+)',
                component: () => import('@/views/example/edit'),
                name: 'EditArticle',
                hidden: true,
                meta: {
                    title: 'editArticle',
                    noCache: true,
                    activeMenu: '/example/list',
                    isShowSlideBar: true
                }
            },
            {
                path: 'list',
                component: () => import('@/views/example/list'),
                name: 'ArticleList',
                meta: {
                    title: 'articleList',
                    icon: 'list',
                    isShowSlideBar: true
                }
            }
        ]
    },*/

  {
    path: '/issueList',
    component: Layout,
    redirect: '/issueList/poorHouseholds',
    name: 'IssueList',
    meta: {
      title: 'issueList',
      icon: 'list'
    },
    children: [
      {
        path: 'poorHouseholds',
        redirect: '/issueList/poorHouseholds/index',
        component: () => import('@/views/issue-list/poor-households/index'),
        name: 'IssueListPoorHouseholds',
        meta: {
          title: 'poorHouseholds',
          icon: 'list',
          isShowSlideBar: true
        },
        children: [
          {
            path: 'index',
            component: () => import('@/views/issue-list/poor-households/list'),
            name: 'IssueListPoorHouseholdsIndex',
            hidden: true,
            meta: {
              title: '',
              activeMenu: '/issueList/poorHouseholds',
              noCache: true,
              isShowSlideBar: true
            }
          },
          {
            path: 'detail',
            component: () => import('@/views/issue-list/poor-households/detail'),
            name: 'IssueListPoorHouseholdsDetail',
            hidden: true,
            meta: {
              title: 'poorHouseholdsDetail',
              activeMenu: '/issueList/poorHouseholds',
              noCache: true,
              isShowSlideBar: true
            }
          }
        ]
      },
      {
        path: 'poorVillage',
        component: () => import('@/views/issue-list/poor-village/index'),
        name: 'IssueListPoorVillage',
        meta: {
          title: 'poorVillage',
          icon: 'list',
          isShowSlideBar: true
        }
      }
    ]
  },

  // 移动到组件中的路由
  /*  {
            path: '/tab',
            component: Layout,
            children: [
              {
                path: 'index',
                component: () => import('@/views/tab/index'),
                name: 'Tab',
                meta: { title: 'tab', icon: 'tab' }
              }
            ]
          },
          {
            path: '/error',
            component: Layout,
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
                meta: { title: 'page401', noCache: true }
              },
              {
                path: '404',
                component: () => import('@/views/error-page/404'),
                name: 'Page404',
                meta: { title: 'page404', noCache: true }
              }
            ]
          },
              {
              path: '/excel',
              component: Layout,
              redirect: '/excel/export-excel',
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
                  meta: { title: 'exportExcel',icon: 'excel' }
                },
                {
                  path: 'export-selected-excel',
                  component: () => import('@/views/excel/select-excel'),
                  name: 'SelectExcel',
                  meta: { title: 'selectExcel',icon: 'excel' }
                },
                {
                  path: 'export-merge-header',
                  component: () => import('@/views/excel/merge-header'),
                  name: 'MergeHeader',
                  meta: { title: 'mergeHeader',icon: 'excel' }
                },
                {
                  path: 'upload-excel',
                  component: () => import('@/views/excel/upload-excel'),
                  name: 'UploadExcel',
                  meta: { title: 'uploadExcel',icon: 'excel' }
                }
              ]
            },

            {
              path: '/zip',
              component: Layout,
              redirect: '/zip/download',
              alwaysShow: true,
              name: 'Zip',
              meta: { title: 'zip', icon: 'zip' },
              children: [
                {
                  path: 'download',
                  component: () => import('@/views/zip/index'),
                  name: 'ExportZip',
                  meta: { title: 'exportZip',icon: 'zip' }
                }
              ]
            },

            {
              path: '/pdf',
              component: Layout,
              redirect: '/pdf/index',
              children: [
                {
                  path: 'index',
                  component: () => import('@/views/pdf/index'),
                  name: 'PDF',
                  meta: { title: 'pdf', icon: 'pdf' }
                }
              ]
            },
            {
              path: '/pdf/download',
              component: () => import('@/views/pdf/download'),
              hidden: true
            },*/

  /* {
      path: '/error-log',
      component: Layout,
      children: [
        {
          path: 'log',
          component: () => import('@/views/error-log/index'),
          name: 'ErrorLog',
          meta: { title: 'errorLog', icon: 'bug' }
        }
      ]
    },

    {
      path: '/theme',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/theme/index'),
          name: 'Theme',
          meta: { title: 'theme', icon: 'theme' }
        }
      ]
    },

    {
      path: '/i18n',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/i18n-demo/index'),
          name: 'I18n',
          meta: { title: 'i18n', icon: 'international' }
        }
      ]
    },*/

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
