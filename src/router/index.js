import Vue from 'vue'
import Router from 'vue-router'
import Log from '@/components/log'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'log',
      component: Log
    },
    {
      path: '/father',
      name: 'father',
      meta: ['metaFather'],
      component: () => import('@/components/father/father')
    },
    {
      path: '/promise',
      name: 'promise',
      component: () => import('@/components/father/promise')
    },
    {
      path: '/box',
      name: 'box',
      component: () => import('@/components/children/box')
    },
    {
      path: '/children2',
      name: 'children2',
      component: () => import('@/components/children/children2')
    },
    {
      path: '/children',
      name: 'children',
      meta: ['metaChildren'],
      component: () => import('@/components/children/children')
    },
    {
      path: '/children/:userId',
      name: 'childrenTo',
      component: () => import('@/components/children/children')
    },
    {
      path: '/father',
      component: () => import('@/components/father/father'),
      children: [
        {
          path: '/father/children',
          name: 'children',
          component: () => import('@/components/children/children')
        },
        {
          path: '/father/children2',
          name: 'children2',
          component: () => import('@/components/children/children2')
        }
      ]
    },
    {
      path: '/design/parttrns',
      name: 'desognParttrns',
      component: () => import('@/components/js/designParttrns')
    },
    {
      path: '/string',
      name: 'string',
      component: () => import('@/components/js/string')
    },
    {
      path: '/stringFunction',
      name: 'stringFunction',
      component: () => import('@/components/js/stringFunction')
    },
    {
      path: '/arrayExport',
      name: 'arrayExport',
      component: () => import('@/components/js/arrayExpot')
    },
    {
      path: '/objectExport',
      name: 'objectExport',
      component: () => import('@/components/js/objectExport')
    },
    {
      path: '/symbol',
      name: 'symbol',
      component: () => import('@/components/js/symbol')
    },
    {
      path: '/setAndMap',
      name: 'setAndMap',
      component: () => import('@/components/js/setAndMap')
    },
    {
      path: '/proxy',
      name: 'proxy',
      component: () => import('@/components/js/proxy')
    },
    {
      path: '/promiseTest',
      name: 'promiseTest',
      component: () => import('@/components/js/promise')
    },
    {
      path: '/cssTest',
      name: 'cssTest',
      component: () => import('@/components/js/css')
    },
    {
      path: '/center',
      name: 'center',
      component: () => import('@/components/htmlcss/center')
    }
  ]
})
