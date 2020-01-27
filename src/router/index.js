import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from "@/main.js";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Create from '../views/Create.vue'
import Show from '../views/Show.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/create/:id',
    name: 'create',
    component: Create,
    props: true
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/create',
    redirect: '/create/new'
  },
  {
    path: '/show/:id',
    name: 'show',
    component: Show
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = auth.currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // 3
  if (requiresAuth) {
    if (currentUser) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
