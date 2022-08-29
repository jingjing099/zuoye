import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/students',
    component: HomeView,
    children:[
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },{
        path: '/students',
        name: 'students',
        component: () => import('../views/students.vue')
      },{
        path: '/teacher',
        name: 'teacher',
        component: () => import('../views/teacher.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
