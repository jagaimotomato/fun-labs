import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/widgets',
    name: 'Widgets',
    component: () => import('../views/widgets/index.vue'),
  },
  {
    path: '/widgets/dateDiff',
    name: 'DateDiff',
    component: () => import('../views/widgets/dateDiff.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/notFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由守卫示例
router.beforeEach((to, _from, next) => {
  // 检查路由是否需要认证
  if (to.meta.requiresAuth) {
    // 这里可以添加认证逻辑
    // const userStore = useUserStore()
    // if (!userStore.isLoggedIn) {
    //   next('/login')
    //   return
    // }
  }
  next()
})

export default router
