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
        path: '/back',
        name: 'back',
        component: () => import('../views/back.vue')
      },{
        path: '/user',
        name: 'user',
        component: () => import('../views/user.vue')
      },{
        path: '/my',
        name: 'my',
        component: () => import('../views/my.vue')
      },{
        path: '/detail',
        name: 'detail',
        component: () => import('../views/detail.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },{
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next)=>{
//   // ...
//   if (localStorage.getItem('username')) {
//     next()
//   }else{
//     next('/login')
//     // if(to.path=='/login'){
//     //   next('/login')
//     // }else{
//     //   next()
//     // }
//   }
// })

export default router
