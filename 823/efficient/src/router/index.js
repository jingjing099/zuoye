import Vue from "vue"
import VueRouter from "vue-router"
// import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  // {
  //   path: "/home",
  //   name: "home",
  //   component: HomeView
  //   // redirect: ""
  // },
  {
    path: "/",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/HomeView.vue")
      },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/user.vue")
      },
      {
        path: "/role",
        name: "role",
        component: () => import("../views/role.vue")
      },
      {
        path: "/juris",
        name: "juris",
        component: () => import("../views/juris.vue")
      },
      {
        path: "/menus",
        name: "menus",
        component: () => import("../views/menus.vue")
      },
      {
        path: "/rank",
        name: "rank",
        component: () => import("../views/rank.vue")
      },
      {
        path: "/job",
        name: "job",
        component: () => import("../views/job.vue")
      },
      {
        path: "/oper",
        name: "oper",
        component: () => import("../views/oper.vue")
      },
      {
        path: "/login-oper",
        name: "login-oper",
        component: () => import("../views/login-oper.vue")
      }
    ]
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
