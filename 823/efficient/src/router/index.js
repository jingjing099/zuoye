import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // redirect: ""
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("../views/index.vue")
      },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/user.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
