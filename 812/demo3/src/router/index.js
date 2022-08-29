import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/index',
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue'),
        children:[
          {
            path: '/popular',
            name: 'popular',
            component: () => import('../views/popular.vue')
          },{
            path: '/TV',
            name: 'TV',
            component: () => import('../views/TV.vue')
          }
        ]
      },{
        path: '/goods',
        name: 'goods',
        component: () => import('../views/goods.vue')
      },{
        path: '/my',
        name: 'my',
        component: () => import('../views/my.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
