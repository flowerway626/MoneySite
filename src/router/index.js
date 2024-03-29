import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/App.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '收支記帳'
      }
    },
    {
      path: '/Pay',
      name: 'Pay',
      component: () => import('@/pages/PayPage.vue'),
      meta: {
        title: '收支記帳 - 支出'
      }
    },
    {
      path: '/Income',
      name: 'Income',
      component: () => import('@/pages/IncomePage.vue'),
      meta: {
        title: '收支記帳 - 收入'
      }
    },
    {
      path: '/Transfer',
      name: 'Transfer',
      component: () => import('@/pages/TransferPage.vue'),
      meta: {
        title: '收支記帳 - 轉帳'
      }
    },
    // {
    //   // path: '/prepare',
    //   name: 'prepare',
    //   // 內容元件通用、網址不同
    //   // component: () => import('../views/NoReady.vue'),
    //   // 路由別名 以下路由都可通用 NoReady 元件
    //   // 注意在這些路徑換頁時會被當作在同一個路由
    //   alias: [
    //     '/guitar',
    //     '/dance',
    //     '/baseball',
    //     '/badminton',
    //     '/sccer',
    //     '/scout',
    //   ],
    //   meta: {
    //     title: '準備中'
    //   }
    // },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('@/pages/NotFound.vue'),
      meta: {
        title: 'NoFound'
      }
    },
    {
      // 配對所有不在上面的路徑
      // 以上都不符合 /:catchAll(.*) 固定寫法
      path: '/:catchAll(.*)',
      // 自訂義
      name: 'all',
      // 進去到此路由，會自動導向到 /404
      redirect: '/404'
    }
  ]
})

// 進去頁面後
router.afterEach((to, from) => {
  // 改成進去那頁的 title
  document.title = to.meta.title
})
export default router
