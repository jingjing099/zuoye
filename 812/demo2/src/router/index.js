import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue')
      },{
        path: '/vip',
        name: 'vip',
        component: () => import('../views/vip.vue')
      },{
        path: '/supplier',
        name: 'supplier',
        component: () => import('../views/supplier.vue')
      },{
        path: '/goods',
        name: 'goods',
        component: () => import('../views/goods.vue')
      },{
        path: '/staff',
        name: 'staff',
        component: () => import('../views/staff.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if(localStorage.getItem('token')){
    next()
  }else{
    // next('/login')
    if(to.path=='/login'){
      next()
    }else{
      next('/login')
    }
  }
})

export default router
