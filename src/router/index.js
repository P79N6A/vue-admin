import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    hidden: true,
    children: [{
      path: 'home',
      component: () => import('@/views/home/index')
    }]
  },

  {
    path: '/softporn',
      component: Layout,
      children: [{
              path: '/softporn',
              name: 'Softporn',
              component: () => import('@/views/softporn/index'),
              meta: { title: '软色情', icon: 'example' },
  }]
},


  {
    path: '/label',
    component: Layout,
      redirect: '/label/shortvideo',
      name: 'Label',
      meta: { title: '标签', icon: 'example' },
    children: [
      {
        path: 'shortvideo',
        name: 'Shortvideo',
        component: () => import('@/views/shortvideo/index'),
        meta: { title: '短视频类型', icon: 'nested' }
      },
        {
            path: 'smallvideo',
            name: 'Smallvideo',
            component: () => import('@/views/smallvideo/index'),
            meta: { title: '小视频类型和内容', icon: 'nested' }
        }
        
      
    ]
  },

{
    path: '/label',
    component: Layout,
    children: [
    {
        path: '/labeltest',
        name: 'Label',
        component: () => import('@/views/label/index'),
    meta: { title: '质量', icon: 'example' }
}
]
},

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
